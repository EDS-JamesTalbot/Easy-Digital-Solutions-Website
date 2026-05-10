# OPSView optimized Power Query

## Files

- `OPSView_Cleansed_Optimized.m` — full M script for Excel / Power BI Advanced Editor.

## Setup in Excel

1. **Create a parameter** (Data → Get Data → Query Options → **Manage Parameters** → New):
   - **Name:** `LastRefresh`
   - **Type:** Date/Time
   - **Current value:** e.g. `1/1/2000 12:00:00 AM` for an initial full load, then move it forward after each refresh (or link from a cell).

2. Open your existing query → **Advanced Editor**, replace the whole `let … in` block with the contents of `OPSView_Cleansed_Optimized.m` (paste everything **after** any file header comments if the editor rejects `//` — Excel sometimes wants those removed).

3. **Verify folding:** Right-click the **`Filtered`** step → if available, **View Native Query**. You should see a `WHERE` on `Booking_Entered_Datetime`. If not, ask your DBA for a filtered view or use `Value.NativeQuery` with explicit SQL.

## Changes vs your original script

- **`Filtered`:** `Table.SelectRows` on `Booking_Entered_Datetime > LastRefresh` (speed when folded).
- **`WithBookingStatus`:** Now correctly follows **`RemovedBookingBranchCode`** so **Booking Branch Name** is kept.
- **`Cleaned`:** `Table.RemoveColumns(..., MissingField.Ignore)` so a missing column name does not break refresh after schema changes.
- **`Reordered`:** Uses **`Booking Branch Name`** instead of **`Booking_Branch`** (the code column was removed; the descriptive name is what remains).
- **`ReplacedBackticks`:** Renamed from `ReplacedBlanks` for clarity (same behavior).

## If you need the old column header `Booking_Branch` in Excel

Add after `#"Changed Type"`:

```m
RenamedForExport = Table.RenameColumns(#"Changed Type", {{"Booking Branch Name", "Booking_Branch"}})
in
    RenamedForExport
```

## No incremental load (full refresh every time)

Replace the `Filtered` line with:

```m
Filtered = OPSView,
```

Or set `LastRefresh` to a very old datetime.
