Add-Type -AssemblyName System.Drawing
$ErrorActionPreference = 'Stop'
$scriptDir = $PSScriptRoot
$fotosTratadasDir = (Resolve-Path (Join-Path $scriptDir "..\fotos-tratadas")).Path

$casaDir = Join-Path $fotosTratadasDir "casa-cor-2025"
$casaFiles = Get-ChildItem -Path $casaDir -File

Write-Host "=== CASA COR 2025 FILES ==="
foreach ($cf in $casaFiles) {
    $img = [System.Drawing.Image]::FromFile($cf.FullName)
    Write-Host "$($cf.Name): $($img.Width)x$($img.Height), $($cf.Length) bytes"
    $img.Dispose()
}

$geralDir = Join-Path $fotosTratadasDir "fotos-tratadas-geral"
$geralFiles = Get-ChildItem -Path $geralDir -File

Write-Host "`n=== FOTOS TRATADAS GERAL FILES ==="
foreach ($gf in $geralFiles) {
    $img = [System.Drawing.Image]::FromFile($gf.FullName)
    Write-Host "$($gf.Name): $($img.Width)x$($img.Height), $($gf.Length) bytes"
    $img.Dispose()
}
