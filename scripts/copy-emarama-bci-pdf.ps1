# Copies the BCI eMarama PDF from OneDrive into public/private for /emarama-bci (bare PDF viewer).
$ErrorActionPreference = "Stop"
$repoRoot = Split-Path -Parent $PSScriptRoot
$destDir = Join-Path $repoRoot "public\private"
$destFile = Join-Path $destDir "emarama-bci-intro.pdf"
$src = "C:\Users\JamesTalbot\OneDrive - Easy Digital Solutions\EDS\Clients\Current Customers\BCI\Introducing eMarama_BCI_General Audience_Final.pdf"

New-Item -ItemType Directory -Force -Path $destDir | Out-Null
if (-not (Test-Path -LiteralPath $src)) {
    Write-Error "Source PDF not found: $src`nAdjust `$src in this script if your path differs."
}
Copy-Item -LiteralPath $src -Destination $destFile -Force
Write-Host "OK: $destFile"
Push-Location $repoRoot
try {
    node (Join-Path $repoRoot "scripts\set-emarama-pdf-title.mjs")
} finally {
    Pop-Location
}
