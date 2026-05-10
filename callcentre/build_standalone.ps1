# Build EDS_Call_Centre_Log.exe for distribution (no console window).
# Prerequisites: Python 3.10+ on PATH, same machine arch as your clients (usually 64-bit).

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

# Optional: copy logo from Cursor workspace assets if eds_logo.png is missing here
$logo = Join-Path $PSScriptRoot "eds_logo.png"
if (-not (Test-Path $logo)) {
    $src = Join-Path $PSScriptRoot "..\..\projects\c-Users-JamesTalbot-cursor\assets\c__Users_JamesTalbot_AppData_Roaming_Cursor_User_workspaceStorage_7d2def89bf0fc23e5d52e3f0321837f3_images_EDS_New_-_small-c8a4c4c3-ef20-4791-bd32-4da0f9891fa6.png"
    if (Test-Path $src) {
        Copy-Item -LiteralPath $src -Destination $logo -Force
        Write-Host "Copied workspace logo to eds_logo.png for bundling."
    } else {
        Write-Host "No eds_logo.png in folder - exe will use text header only (add eds_logo.png and rebuild to include logo)."
    }
}

python -m pip install -r requirements-standalone.txt
python -m PyInstaller --noconfirm EDS_Call_Centre_Log.spec

Write-Host ""
Write-Host "Output: $PSScriptRoot\dist\EDS_Call_Centre_Log.exe"
Write-Host 'Ship that file (and optionally a custom eds_logo.png beside the exe for overrides).'
