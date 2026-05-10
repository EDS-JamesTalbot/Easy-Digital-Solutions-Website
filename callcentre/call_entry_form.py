"""
Easy Digital Solutions — generic call centre data entry form.
Uses Tkinter (stdlib). Saves rows to a CSV log you choose.

First launch: a save dialog asks where to create call_log.csv (default folder: Documents).
That choice is stored under %LOCALAPPDATA%\\EasyDigitalSolutions\\CallCentreLog\\ so the next
launch uses the same file. If the dialog is cancelled, a default path is used instead.

Development (no saved choice yet): default is next to this script.
Frozen (.exe): default is under Local AppData if the user cancels the dialog.

Optional: eds_logo.png beside the script/exe, or bundled via PyInstaller (see build script).
"""

from __future__ import annotations

import csv
import json
import os
import sys
import uuid
import tkinter as tk
from datetime import datetime
from pathlib import Path
from tkinter import filedialog, messagebox, ttk

# EDS brand colours (aligned with Easy Digital Solutions logo)
COL_GREEN = "#449D21"
COL_GOLD = "#C2B011"
COL_GREY = "#595959"
COL_BLUE = "#3B82C4"
COL_WHITE = "#FFFFFF"
COL_LIGHT = "#F5F5F5"

# Canonical CSV columns (order fixed for DictReader/DictWriter)
CSV_FIELDNAMES = [
    "timestamp_utc",
    "record_id",
    "call_date",
    "call_time",
    "agent_name",
    "agent_id",
    "customer_name",
    "customer_phone",
    "customer_email",
    "account_reference",
    "road",
    "village",
    "island",
    "channel",
    "call_type",
    "priority",
    "outcome",
    "follow_up_required",
    "notes",
]

# (csv_key, label) for search field dropdown
SEARCH_FIELD_CHOICES: tuple[tuple[str, str], ...] = (
    ("customer_name", "Customer name"),
    ("customer_phone", "Phone"),
    ("customer_email", "Email"),
    ("account_reference", "Reference number"),
)

COOK_ISLANDS: tuple[str, ...] = (
    "Rarotonga",
    "Aitutaki",
    "Atiu",
    "Mangaia",
    "Mauke",
    "Mitiaro",
    "Palmerston",
    "Penrhyn (Tongareva)",
    "Manihiki",
    "Rakahanga",
    "Pukapuka",
    "Nassau",
    "Suwarrow",
    "Other / not listed",
)


def _normalize_record(row: dict, *, assign_id_if_missing: bool = False) -> dict:
    rec = {k: "" for k in CSV_FIELDNAMES}
    for k, v in row.items():
        if k in rec and v is not None:
            rec[k] = str(v).strip()
    if assign_id_if_missing and not rec["record_id"]:
        rec["record_id"] = str(uuid.uuid4())
    return rec


def read_all_records(path: Path) -> list[dict]:
    if not path.is_file() or path.stat().st_size == 0:
        return []
    with path.open(newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        if not reader.fieldnames:
            return []
        return [_normalize_record(dict(row), assign_id_if_missing=False) for row in reader]


def write_all_records(path: Path, records: list[dict]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=CSV_FIELDNAMES, extrasaction="ignore")
        w.writeheader()
        for raw in records:
            rec = _normalize_record(raw, assign_id_if_missing=True)
            w.writerow({k: rec.get(k, "") for k in CSV_FIELDNAMES})


def migrate_log_csv(path: Path) -> None:
    if not path.is_file() or path.stat().st_size == 0:
        return
    with path.open(newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        if not reader.fieldnames:
            return
        fn = [x.strip() for x in reader.fieldnames]
        rows = list(reader)
    if fn == CSV_FIELDNAMES:
        return
    records = [_normalize_record(dict(r), assign_id_if_missing=True) for r in rows]
    write_all_records(path, records)


def append_record(rec: dict) -> None:
    path = get_log_file()
    ensure_log_header()
    records = read_all_records(path)
    row = _normalize_record(rec, assign_id_if_missing=True)
    if not row["record_id"]:
        row["record_id"] = str(uuid.uuid4())
    records.append(row)
    write_all_records(path, records)


def replace_record_at(index: int, rec: dict) -> None:
    path = get_log_file()
    records = read_all_records(path)
    if index < 0 or index >= len(records):
        raise IndexError(index)
    merged = _normalize_record(rec, assign_id_if_missing=False)
    merged["record_id"] = (
        records[index].get("record_id") or merged.get("record_id") or str(uuid.uuid4())
    )
    records[index] = merged
    write_all_records(path, records)


def _frozen() -> bool:
    return getattr(sys, "frozen", False) is True


def _install_dir() -> Path:
    if _frozen():
        return Path(sys.executable).resolve().parent
    return Path(__file__).resolve().parent


def _bundle_dir() -> Path:
    """PyInstaller one-file extraction dir, or same as install when running from source."""
    if _frozen():
        return Path(getattr(sys, "_MEIPASS", _install_dir()))
    return Path(__file__).resolve().parent


def _user_data_dir() -> Path:
    if sys.platform == "win32":
        base = os.environ.get("LOCALAPPDATA") or str(Path.home() / "AppData" / "Local")
        p = Path(base) / "EasyDigitalSolutions" / "CallCentreLog"
    elif sys.platform == "darwin":
        p = Path.home() / "Library" / "Application Support" / "EasyDigitalSolutions" / "CallCentreLog"
    else:
        p = Path.home() / ".local" / "share" / "EasyDigitalSolutions" / "CallCentreLog"
    p.mkdir(parents=True, exist_ok=True)
    return p


def _default_log_file_path() -> Path:
    if _frozen():
        return _user_data_dir() / "call_log.csv"
    return _install_dir() / "call_log.csv"


def _log_location_config_path() -> Path:
    return _user_data_dir() / "log_location.json"


def _load_saved_log_path() -> Path | None:
    cfg = _log_location_config_path()
    if not cfg.is_file():
        return None
    try:
        data = json.loads(cfg.read_text(encoding="utf-8"))
        raw = data.get("log_csv_path")
        if not raw or not isinstance(raw, str):
            return None
        return Path(raw).expanduser().resolve()
    except (OSError, json.JSONDecodeError, TypeError, ValueError):
        return None


def _persist_log_path(path: Path) -> None:
    _log_location_config_path().parent.mkdir(parents=True, exist_ok=True)
    payload = {"log_csv_path": str(path.resolve())}
    _log_location_config_path().write_text(json.dumps(payload, indent=2), encoding="utf-8")


def _initial_current_log_path() -> Path | None:
    saved = _load_saved_log_path()
    if saved is not None:
        return saved
    default = _default_log_file_path()
    if default.is_file():
        # Upgrade from older builds that had no config: keep the existing default log
        resolved = default.resolve()
        _persist_log_path(resolved)
        return resolved
    return None


# Set from config, migrated default file, or None → first-run file dialog
CURRENT_LOG_PATH: Path | None = _initial_current_log_path()

_DEV_LOGO_FALLBACK = (
    _install_dir().parent.parent
    / "projects"
    / "c-Users-JamesTalbot-cursor"
    / "assets"
    / "c__Users_JamesTalbot_AppData_Roaming_Cursor_User_workspaceStorage_7d2def89bf0fc23e5d52e3f0321837f3_images_EDS_New_-_small-c8a4c4c3-ef20-4791-bd32-4da0f9891fa6.png"
)


def _logo_candidates() -> tuple[Path, ...]:
    """Beside exe (client override), bundled asset, then dev-only path."""
    paths = [
        _install_dir() / "eds_logo.png",
        _bundle_dir() / "eds_logo.png",
    ]
    if not _frozen() and _DEV_LOGO_FALLBACK.is_file():
        paths.append(_DEV_LOGO_FALLBACK)
    return tuple(paths)


def get_log_file() -> Path:
    """Resolved CSV path; falls back to default if nothing was chosen yet."""
    global CURRENT_LOG_PATH
    if CURRENT_LOG_PATH is not None:
        return CURRENT_LOG_PATH
    return _default_log_file_path().resolve()


def _log_file_status_text() -> str:
    if CURRENT_LOG_PATH is None:
        return "Log: choose save location…"
    s = str(CURRENT_LOG_PATH.resolve())
    if len(s) > 58:
        return f"Log: …{s[-55:]}"
    return f"Log: {s}"


def ensure_log_header() -> None:
    path = get_log_file()
    path.parent.mkdir(parents=True, exist_ok=True)
    if not path.exists():
        write_all_records(path, [])
    else:
        migrate_log_csv(path)


def _documents_dir() -> str:
    home = Path.home()
    if sys.platform == "win32":
        d = home / "Documents"
        if d.is_dir():
            return str(d)
    return str(home)


class CallEntryApp(tk.Tk):
    def __init__(self) -> None:
        super().__init__()
        self.title("EDS Call Centre — Call Log")
        self.configure(bg=COL_WHITE)
        self.minsize(980, 820)
        self.geometry("1060x920")
        self._editing_row_index: int | None = None
        self._editing_record_id: str | None = None
        self._search_hits: list[tuple[int, dict]] = []

        style = ttk.Style(self)
        if "vista" in style.theme_names():
            style.theme_use("vista")
        style.configure("TFrame", background=COL_WHITE)
        style.configure("TLabel", background=COL_WHITE, foreground=COL_GREY)
        style.configure("TLabelframe", background=COL_WHITE, foreground=COL_GREY)
        style.configure("TLabelframe.Label", background=COL_WHITE, foreground=COL_GREY)
        style.configure(
            "Blue.TSeparator",
            background=COL_BLUE,
        )
        # Combobox: stronger arrow and padding so dropdowns read clearly vs text fields
        style.configure(
            "EDS.TCombobox",
            font=("Segoe UI", 10),
            padding=(6, 4),
            arrowsize=22,
        )
        try:
            style.map(
                "EDS.TCombobox",
                fieldbackground=[("readonly", "#E3F0FA")],
                selectbackground=[("readonly", COL_BLUE)],
                selectforeground=[("readonly", COL_WHITE)],
            )
        except tk.TclError:
            pass

        self._build_header()
        self._build_actions()
        self._build_form()

        self.action_bar.pack(side=tk.BOTTOM, fill=tk.X)
        self.header_outer.pack(side=tk.TOP, fill=tk.X)
        self.form_body.pack(side=tk.TOP, fill=tk.BOTH, expand=True)

        if CURRENT_LOG_PATH is None:
            self.withdraw()
            self.after(0, self._first_run_choose_log_file)
        else:
            self.after(100, self._load_logo_if_available)

    def _first_run_choose_log_file(self) -> None:
        global CURRENT_LOG_PATH
        chosen = filedialog.asksaveasfilename(
            parent=self,
            title="Choose where to save your call log",
            defaultextension=".csv",
            filetypes=[("CSV log", "*.csv"), ("All files", "*.*")],
            initialfile="call_log.csv",
            initialdir=_documents_dir(),
        )
        if chosen:
            CURRENT_LOG_PATH = Path(chosen).expanduser().resolve()
            _persist_log_path(CURRENT_LOG_PATH)
        else:
            CURRENT_LOG_PATH = _default_log_file_path().resolve()
            _persist_log_path(CURRENT_LOG_PATH)
            messagebox.showinfo(
                "Call log location",
                "No file was selected. Using the default location:\n\n"
                f"{CURRENT_LOG_PATH}",
                parent=self,
            )
        self._refresh_log_path_label()
        self.deiconify()
        self.lift()
        self.focus_force()
        self.after(100, self._load_logo_if_available)

    def _refresh_log_path_label(self) -> None:
        if hasattr(self, "_log_path_label"):
            self._log_path_label.configure(text=_log_file_status_text())

    def _build_header(self) -> None:
        outer = tk.Frame(self, bg=COL_WHITE, padx=12, pady=6)
        self.header_outer = outer

        self.logo_label = tk.Label(outer, bg=COL_WHITE)
        self.logo_label.pack(side=tk.LEFT, padx=(0, 12))

        text_col = tk.Frame(outer, bg=COL_WHITE)
        text_col.pack(side=tk.LEFT, fill=tk.Y)

        line1 = tk.Frame(text_col, bg=COL_WHITE)
        line1.pack(anchor=tk.W)
        tk.Label(
            line1,
            text="Easy ",
            font=("Segoe UI", 16, "bold"),
            fg=COL_GREEN,
            bg=COL_WHITE,
        ).pack(side=tk.LEFT)
        tk.Label(
            line1,
            text="Digital ",
            font=("Segoe UI", 16, "bold"),
            fg=COL_GOLD,
            bg=COL_WHITE,
        ).pack(side=tk.LEFT)
        tk.Label(
            line1,
            text="Solutions",
            font=("Segoe UI", 16, "bold"),
            fg=COL_GREY,
            bg=COL_WHITE,
        ).pack(side=tk.LEFT)

        tk.Label(
            text_col,
            text="Call centre — interaction log",
            font=("Segoe UI", 10),
            fg=COL_GREY,
            bg=COL_WHITE,
        ).pack(anchor=tk.W)

        tk.Frame(outer, height=3, bg=COL_BLUE).pack(fill=tk.X, pady=(4, 0))

    def _load_logo_if_available(self) -> None:
        path = next((p for p in _logo_candidates() if p.is_file()), None)
        if not path:
            return
        try:
            img = tk.PhotoImage(file=str(path))
            max_h = 56
            while img.height() > max_h and img.width() > 1:
                img = img.subsample(2, 2)
            self.logo_label.configure(image=img)
            self.logo_label.image = img  # noqa: SLF001 — keep ref
        except tk.TclError:
            pass

    def _build_form(self) -> None:
        body = tk.Frame(self, bg=COL_WHITE, padx=16, pady=8)
        self.form_body = body

        # Reserve bottom space for lookup first so it is never clipped
        self._build_search_panel(body)

        main_area = tk.Frame(body, bg=COL_WHITE)
        main_area.pack(side=tk.TOP, fill=tk.BOTH, expand=True)

        lbl_font = ("Segoe UI", 9)
        lf_title = ("Segoe UI", 9, "bold")
        now = datetime.now()

        def mk_entry0(parent: tk.Frame, r: int, c: int = 0) -> tk.Entry:
            e = tk.Entry(
                parent,
                font=("Segoe UI", 9),
                fg=COL_GREY,
                bg=COL_LIGHT,
                insertbackground=COL_GREEN,
                relief=tk.FLAT,
                highlightthickness=2,
                highlightbackground=COL_BLUE,
                highlightcolor=COL_GREEN,
            )
            e.grid(row=r, column=c, sticky=tk.EW, pady=(0, 4))
            return e

        def lbl0(parent: tk.Frame, r: int, text: str, c: int = 0) -> None:
            tk.Label(parent, text=text, font=lbl_font, fg=COL_GREY, bg=COL_WHITE).grid(
                row=r, column=c, sticky=tk.W, pady=(2, 0)
            )

        def combo_block(parent: tk.Frame, label_row: int, label_text: str, c: int = 0) -> ttk.Combobox:
            lbl0(parent, label_row, label_text, c)
            wrap = tk.Frame(parent, bg=COL_GOLD, highlightthickness=0, padx=2, pady=2)
            wrap.grid(row=label_row + 1, column=c, sticky=tk.EW, pady=(0, 4))
            inner = tk.Frame(wrap, bg=COL_WHITE)
            inner.pack(fill=tk.BOTH, expand=True)
            cb = ttk.Combobox(
                inner,
                values=(),
                state="readonly",
                font=("Segoe UI", 9),
                style="EDS.TCombobox",
            )
            cb.pack(fill=tk.BOTH, expand=True, padx=1, pady=1)
            return cb

        def make_label_frame(parent: tk.Widget, title: str) -> tuple[tk.LabelFrame, tk.Frame]:
            lf = tk.LabelFrame(
                parent,
                text=title,
                font=lf_title,
                fg=COL_GREY,
                bg=COL_WHITE,
                padx=6,
                pady=4,
                labelanchor=tk.NW,
            )
            inner = tk.Frame(lf, bg=COL_WHITE)
            inner.pack(fill=tk.BOTH, expand=True, padx=4, pady=2)
            return lf, inner

        columns_row = tk.Frame(main_area, bg=COL_WHITE)
        columns_row.pack(fill=tk.BOTH, expand=True, pady=(0, 8))

        # --- Left: Call + Agent + Disposition ---
        left_wrap = tk.Frame(columns_row, bg=COL_WHITE)
        left_wrap.pack(side=tk.LEFT, fill=tk.BOTH, expand=True, padx=(0, 12))
        lf_left, left_in = make_label_frame(left_wrap, "Call, agent & disposition")
        lf_left.pack(fill=tk.BOTH, expand=True)

        r = 0
        lbl0(left_in, r, "Date (YYYY-MM-DD)")
        self.var_call_date = mk_entry0(left_in, r + 1)
        self.var_call_date.insert(0, now.strftime("%Y-%m-%d"))
        r += 2
        lbl0(left_in, r, "Time (local)")
        self.var_call_time = mk_entry0(left_in, r + 1)
        self.var_call_time.insert(0, now.strftime("%H:%M"))
        r += 2
        self.combo_channel = combo_block(left_in, r, "Channel")
        self.combo_channel.configure(
            values=("Phone", "Email", "Chat", "Social", "Callback", "Walk-in", "Other")
        )
        self.combo_channel.set("Phone")
        r += 2
        self.combo_call_type = combo_block(left_in, r, "Contact type")
        self.combo_call_type.configure(
            values=(
                "General inquiry",
                "Billing",
                "Technical support",
                "Sales",
                "Complaint",
                "Account update",
                "Other",
            )
        )
        self.combo_call_type.set("General inquiry")
        r += 2
        lbl0(left_in, r, "Agent name")
        self.var_agent_name = mk_entry0(left_in, r + 1)
        r += 2
        lbl0(left_in, r, "Agent ID / extension")
        self.var_agent_id = mk_entry0(left_in, r + 1)
        r += 2
        self.combo_priority = combo_block(left_in, r, "Priority")
        self.combo_priority.configure(values=("Normal", "High", "Urgent"))
        self.combo_priority.set("Normal")
        r += 2
        self.combo_outcome = combo_block(left_in, r, "Outcome")
        self.combo_outcome.configure(
            values=(
                "Resolved",
                "Partially resolved",
                "Escalated",
                "Callback scheduled",
                "Transferred",
                "No resolution",
                "Spam / wrong number",
            )
        )
        self.combo_outcome.set("Resolved")
        r += 2
        self.var_follow_up = tk.BooleanVar(value=False)
        tk.Checkbutton(
            left_in,
            text="Follow-up required",
            variable=self.var_follow_up,
            font=lbl_font,
            fg=COL_GREY,
            bg=COL_WHITE,
            activebackground=COL_WHITE,
            selectcolor=COL_LIGHT,
            highlightthickness=0,
        ).grid(row=r, column=0, sticky=tk.W, pady=(4, 0))
        left_in.columnconfigure(0, weight=1)

        # --- Right: Customer + Address ---
        right_wrap = tk.Frame(columns_row, bg=COL_WHITE)
        right_wrap.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)
        lf_right, right_in = make_label_frame(right_wrap, "Customer & address")
        lf_right.pack(fill=tk.BOTH, expand=True)

        rc = 0
        lbl0(right_in, rc, "Name")
        self.var_customer_name = mk_entry0(right_in, rc + 1)
        rc += 2
        lbl0(right_in, rc, "Phone")
        self.var_customer_phone = mk_entry0(right_in, rc + 1)
        rc += 2
        lbl0(right_in, rc, "Email (optional)")
        self.var_customer_email = mk_entry0(right_in, rc + 1)
        rc += 2
        lbl0(right_in, rc, "Account / case / ticket ref")
        self.var_account_ref = mk_entry0(right_in, rc + 1)
        rc += 2
        tk.Label(
            right_in,
            text="Location (Cook Islands)",
            font=lf_title,
            fg=COL_GREY,
            bg=COL_WHITE,
        ).grid(row=rc, column=0, sticky=tk.W, pady=(8, 2))
        rc += 1
        lbl0(right_in, rc, "Road")
        self.var_road = mk_entry0(right_in, rc + 1)
        rc += 2
        lbl0(right_in, rc, "Village / settlement")
        self.var_village = mk_entry0(right_in, rc + 1)
        rc += 2
        self.combo_island = combo_block(right_in, rc, "Island")
        self.combo_island.configure(values=COOK_ISLANDS)
        self.combo_island.set(COOK_ISLANDS[0])
        right_in.columnconfigure(0, weight=1)

        notes_outer = tk.Frame(main_area, bg=COL_WHITE)
        notes_outer.pack(fill=tk.X, pady=(4, 0))
        tk.Label(
            notes_outer,
            text="Notes / summary",
            font=lbl_font,
            fg=COL_GREY,
            bg=COL_WHITE,
        ).pack(anchor=tk.W, pady=(0, 4))
        self.txt_notes = tk.Text(
            notes_outer,
            height=5,
            font=("Segoe UI", 9),
            fg=COL_GREY,
            bg=COL_LIGHT,
            insertbackground=COL_GREEN,
            relief=tk.FLAT,
            highlightthickness=2,
            highlightbackground=COL_BLUE,
            highlightcolor=COL_GREEN,
            wrap=tk.WORD,
        )
        self.txt_notes.pack(fill=tk.X)

    def _build_search_panel(self, body: tk.Frame) -> None:
        lbl_font = ("Segoe UI", 9)
        sf = tk.LabelFrame(
            body,
            text="Lookup previous record",
            font=("Segoe UI", 9, "bold"),
            fg=COL_GREY,
            bg=COL_WHITE,
            padx=8,
            pady=6,
        )
        sf.pack(side=tk.BOTTOM, fill=tk.X, pady=(8, 0))
        inner = tk.Frame(sf, bg=COL_WHITE)
        inner.pack(fill=tk.X)

        tk.Label(inner, text="Search by", font=lbl_font, fg=COL_GREY, bg=COL_WHITE).grid(
            row=0, column=0, sticky=tk.W, padx=(0, 6)
        )
        wrap_sf = tk.Frame(inner, bg=COL_GOLD, padx=2, pady=2)
        wrap_sf.grid(row=0, column=1, sticky=tk.EW, padx=(0, 8))
        f1 = tk.Frame(wrap_sf, bg=COL_WHITE)
        f1.pack(fill=tk.BOTH, expand=True)
        self.combo_search_field = ttk.Combobox(
            f1,
            values=[label for _key, label in SEARCH_FIELD_CHOICES],
            state="readonly",
            font=("Segoe UI", 9),
            style="EDS.TCombobox",
            width=18,
        )
        self.combo_search_field.pack(padx=2, pady=2)
        self.combo_search_field.current(0)

        tk.Label(inner, text="Contains", font=lbl_font, fg=COL_GREY, bg=COL_WHITE).grid(
            row=0, column=2, sticky=tk.W, padx=(0, 6)
        )
        self.var_search_text = tk.Entry(
            inner,
            font=("Segoe UI", 9),
            width=28,
            fg=COL_GREY,
            bg=COL_LIGHT,
            insertbackground=COL_GREEN,
            relief=tk.FLAT,
            highlightthickness=2,
            highlightbackground=COL_BLUE,
            highlightcolor=COL_GREEN,
        )
        self.var_search_text.grid(row=0, column=3, sticky=tk.EW, padx=(0, 8))

        tk.Button(
            inner,
            text="Search",
            font=("Segoe UI", 9, "bold"),
            fg=COL_WHITE,
            bg=COL_GREEN,
            activebackground=COL_GOLD,
            activeforeground=COL_WHITE,
            relief=tk.FLAT,
            padx=12,
            pady=4,
            cursor="hand2",
            command=self._on_search_records,
        ).grid(row=0, column=4, padx=(0, 6))

        tk.Label(inner, text="Results", font=lbl_font, fg=COL_GREY, bg=COL_WHITE).grid(
            row=1, column=0, sticky=tk.NW, pady=(8, 0)
        )
        wrap_res = tk.Frame(inner, bg=COL_GOLD, padx=2, pady=2)
        wrap_res.grid(row=1, column=1, columnspan=3, sticky=tk.EW, pady=(8, 0), padx=(0, 8))
        f2 = tk.Frame(wrap_res, bg=COL_WHITE)
        f2.pack(fill=tk.BOTH, expand=True)
        self.combo_search_results = ttk.Combobox(
            f2,
            values=(),
            state="readonly",
            font=("Segoe UI", 9),
            style="EDS.TCombobox",
            width=55,
        )
        self.combo_search_results.pack(fill=tk.X, expand=True, padx=2, pady=2)

        bf = tk.Frame(inner, bg=COL_WHITE)
        bf.grid(row=1, column=4, sticky=tk.NW, pady=(8, 0))
        tk.Button(
            bf,
            text="Load record",
            font=("Segoe UI", 9),
            fg=COL_WHITE,
            bg=COL_BLUE,
            activebackground=COL_GOLD,
            activeforeground=COL_WHITE,
            relief=tk.FLAT,
            padx=10,
            pady=4,
            cursor="hand2",
            command=self._on_load_selected_hit,
        ).pack(side=tk.LEFT, padx=(0, 6))
        tk.Button(
            bf,
            text="New record",
            font=("Segoe UI", 9),
            fg=COL_GREY,
            bg=COL_LIGHT,
            activebackground=COL_BLUE,
            activeforeground=COL_WHITE,
            relief=tk.FLAT,
            padx=10,
            pady=4,
            cursor="hand2",
            command=self._on_new_record,
        ).pack(side=tk.LEFT)

        inner.columnconfigure(3, weight=1)

    def _search_field_key(self) -> str:
        idx = self.combo_search_field.current()
        if idx < 0:
            return SEARCH_FIELD_CHOICES[0][0]
        return SEARCH_FIELD_CHOICES[idx][0]

    def _on_search_records(self) -> None:
        ensure_log_header()
        path = get_log_file()
        needle = self.var_search_text.get().strip().lower()
        key = self._search_field_key()
        all_rows = read_all_records(path)
        indexed = list(enumerate(all_rows))
        if not needle:
            candidates = indexed
        else:
            candidates = [
                (i, r) for i, r in indexed if needle in (r.get(key) or "").lower()
            ]
        self._search_hits = list(reversed(candidates))
        if not self._search_hits:
            self.combo_search_results.set("")
            self.combo_search_results.configure(values=())
            messagebox.showinfo("Search", "No matching records found.", parent=self)
            return

        def fmt(item: tuple[int, dict]) -> str:
            _row_i, r = item
            d = r.get("call_date", "")
            n = (r.get("customer_name") or "")[:28]
            p = (r.get("customer_phone") or "")[:16]
            ref = (r.get("account_reference") or "")[:14]
            return f"{d} | {n} | {p} | ref:{ref}"

        labels = [fmt(t) for t in self._search_hits]
        self.combo_search_results.configure(values=labels)
        self.combo_search_results.current(0)

    def _on_load_selected_hit(self) -> None:
        if not self._search_hits:
            messagebox.showwarning("Load record", "Run a search first and pick a result.", parent=self)
            return
        idx = self.combo_search_results.current()
        if idx < 0:
            messagebox.showwarning("Load record", "Select a row in Results.", parent=self)
            return
        row_index, rec = self._search_hits[idx]
        self._editing_row_index = row_index
        self._editing_record_id = rec.get("record_id", "")
        self._apply_record_to_form(rec)
        self._update_save_button_label()
        messagebox.showinfo(
            "Record loaded",
            "Edit the form and click Update record to save changes.",
            parent=self,
        )

    def _on_new_record(self) -> None:
        self._on_clear()

    def _apply_record_to_form(self, r: dict) -> None:
        def set_entry(e: tk.Entry, val: str) -> None:
            e.delete(0, tk.END)
            e.insert(0, val or "")

        set_entry(self.var_call_date, r.get("call_date", ""))
        set_entry(self.var_call_time, r.get("call_time", ""))
        set_entry(self.var_agent_name, r.get("agent_name", ""))
        set_entry(self.var_agent_id, r.get("agent_id", ""))
        set_entry(self.var_customer_name, r.get("customer_name", ""))
        set_entry(self.var_customer_phone, r.get("customer_phone", ""))
        set_entry(self.var_customer_email, r.get("customer_email", ""))
        set_entry(self.var_account_ref, r.get("account_reference", ""))
        set_entry(self.var_road, r.get("road", ""))
        set_entry(self.var_village, r.get("village", ""))
        isl = r.get("island") or COOK_ISLANDS[0]
        if isl in COOK_ISLANDS:
            self.combo_island.set(isl)
        else:
            self.combo_island.set(COOK_ISLANDS[-1])

        for combo, key, default in (
            (self.combo_channel, "channel", "Phone"),
            (self.combo_call_type, "call_type", "General inquiry"),
            (self.combo_priority, "priority", "Normal"),
            (self.combo_outcome, "outcome", "Resolved"),
        ):
            v = r.get(key) or default
            vals = list(combo.cget("values"))
            if v in vals:
                combo.set(v)
            else:
                combo.set(default)

        self.var_follow_up.set((r.get("follow_up_required") or "").strip().lower() in ("yes", "y", "true", "1"))
        self.txt_notes.delete("1.0", tk.END)
        self.txt_notes.insert("1.0", r.get("notes") or "")

    def _collect_form_row(self) -> dict:
        ts = datetime.utcnow().isoformat(timespec="seconds") + "Z"
        rid = self._editing_record_id or str(uuid.uuid4())
        return {
            "timestamp_utc": ts,
            "record_id": rid,
            "call_date": self.var_call_date.get().strip(),
            "call_time": self.var_call_time.get().strip(),
            "agent_name": self.var_agent_name.get().strip(),
            "agent_id": self.var_agent_id.get().strip(),
            "customer_name": self.var_customer_name.get().strip(),
            "customer_phone": self.var_customer_phone.get().strip(),
            "customer_email": self.var_customer_email.get().strip(),
            "account_reference": self.var_account_ref.get().strip(),
            "road": self.var_road.get().strip(),
            "village": self.var_village.get().strip(),
            "island": self.combo_island.get(),
            "channel": self.combo_channel.get(),
            "call_type": self.combo_call_type.get(),
            "priority": self.combo_priority.get(),
            "outcome": self.combo_outcome.get(),
            "follow_up_required": "Yes" if self.var_follow_up.get() else "No",
            "notes": self.txt_notes.get("1.0", tk.END).strip(),
        }

    def _update_save_button_label(self) -> None:
        if self._editing_row_index is not None:
            self._btn_save.configure(text="Update record")
        else:
            self._btn_save.configure(text="Save to log")

    def _build_actions(self) -> None:
        bar = tk.Frame(self, bg=COL_WHITE, padx=16, pady=10)
        self.action_bar = bar

        tk.Frame(bar, height=2, bg=COL_BLUE).place(x=0, y=0, relwidth=1)

        inner = tk.Frame(bar, bg=COL_WHITE)
        inner.pack(fill=tk.X, pady=(4, 0))

        self._btn_save = tk.Button(
            inner,
            text="Save to log",
            font=("Segoe UI", 10, "bold"),
            fg=COL_WHITE,
            bg=COL_GREEN,
            activebackground=COL_GOLD,
            activeforeground=COL_WHITE,
            relief=tk.FLAT,
            padx=18,
            pady=6,
            cursor="hand2",
            command=self._on_submit,
        )
        self._btn_save.pack(side=tk.LEFT, padx=(0, 8))

        btn_clear = tk.Button(
            inner,
            text="Clear form",
            font=("Segoe UI", 10),
            fg=COL_GREY,
            bg=COL_LIGHT,
            activebackground=COL_BLUE,
            activeforeground=COL_WHITE,
            relief=tk.FLAT,
            padx=14,
            pady=6,
            cursor="hand2",
            command=self._on_clear,
        )
        btn_clear.pack(side=tk.LEFT)

        self._log_path_label = tk.Label(
            inner,
            text=_log_file_status_text(),
            font=("Segoe UI", 8),
            fg=COL_BLUE,
            bg=COL_WHITE,
        )
        self._log_path_label.pack(side=tk.RIGHT)

    def _on_clear(self) -> None:
        self._editing_row_index = None
        self._editing_record_id = None
        for w in (
            self.var_call_date,
            self.var_call_time,
            self.var_agent_name,
            self.var_agent_id,
            self.var_customer_name,
            self.var_customer_phone,
            self.var_customer_email,
            self.var_account_ref,
            self.var_road,
            self.var_village,
        ):
            w.delete(0, tk.END)
        now = datetime.now()
        self.var_call_date.insert(0, now.strftime("%Y-%m-%d"))
        self.var_call_time.insert(0, now.strftime("%H:%M"))
        self.combo_island.set(COOK_ISLANDS[0])
        self.combo_channel.set("Phone")
        self.combo_call_type.set("General inquiry")
        self.combo_priority.set("Normal")
        self.combo_outcome.set("Resolved")
        self.var_follow_up.set(False)
        self.txt_notes.delete("1.0", tk.END)
        self._update_save_button_label()

    def _on_submit(self) -> None:
        agent = self.var_agent_name.get().strip()
        customer = self.var_customer_name.get().strip()
        if not agent:
            messagebox.showwarning("Missing field", "Please enter the agent name.")
            return
        if not customer:
            messagebox.showwarning("Missing field", "Please enter the customer / caller name.")
            return

        ensure_log_header()
        row = self._collect_form_row()
        editing = self._editing_row_index

        try:
            if editing is not None:
                replace_record_at(editing, row)
                msg = "Record updated in the log."
            else:
                append_record(row)
                msg = "Call record saved."
        except OSError as e:
            messagebox.showerror("Save failed", str(e), parent=self)
            return

        messagebox.showinfo(
            "Saved",
            f"{msg}\n\n{_log_file_status_text()}",
            parent=self,
        )
        self._on_clear()


def main() -> None:
    try:
        app = CallEntryApp()
        app.mainloop()
    except Exception as exc:  # noqa: BLE001 — last-resort for frozen builds
        try:
            messagebox.showerror("Easy Digital Solutions — Call Log", f"The application could not start:\n\n{exc}")
        except Exception:
            print(exc, file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
