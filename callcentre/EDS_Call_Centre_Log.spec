# PyInstaller spec — run from this folder: pyinstaller EDS_Call_Centre_Log.spec
# -*- mode: python ; coding: utf-8 -*-

from pathlib import Path

spec_dir = Path(SPEC).resolve().parent

datas = []
_logo = spec_dir / "eds_logo.png"
if _logo.is_file():
    datas.append((str(_logo), "."))

a = Analysis(
    [str(spec_dir / "call_entry_form.py")],
    pathex=[str(spec_dir)],
    binaries=[],
    datas=datas,
    hiddenimports=[],
    hookspath=[],
    hooksconfig={},
    runtime_hooks=[],
    excludes=[],
    noarchive=False,
)

pyz = PYZ(a.pure)

exe = EXE(
    pyz,
    a.scripts,
    a.binaries,
    a.zipfiles,
    a.datas,
    [],
    name="EDS_Call_Centre_Log",
    debug=False,
    bootloader_ignore_signals=False,
    strip=False,
    upx=True,
    upx_exclude=[],
    runtime_tmpdir=None,
    console=False,
    disable_windowed_traceback=False,
    argv_emulation=False,
    target_arch=None,
    codesign_identity=None,
    entitlements_file=None,
    version=None,
)
