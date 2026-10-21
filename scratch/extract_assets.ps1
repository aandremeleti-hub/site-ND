$ErrorActionPreference = 'Stop'

$scriptDir = $PSScriptRoot
$extractDir = Join-Path $scriptDir "assets_extraidos"
$pptxUnzipDir = Join-Path $extractDir "pptx_unzipped"

if (!(Test-Path $extractDir)) {
    New-Item -ItemType Directory -Path $extractDir -Force | Out-Null
}

$atendimentoDir = (Resolve-Path (Join-Path $scriptDir "..\..\atendimento\4. atualizacao_site")).Path
Write-Host "Target directory: $atendimentoDir"

$sourcePptx = Get-ChildItem -Path $atendimentoDir -Filter "*.pptx" | Select-Object -First 1

if (!$sourcePptx) {
    Write-Error "PPTX file not found in target folder."
    exit 1
}

Write-Host "Found PPTX: $($sourcePptx.FullName)"
$tempZip = Join-Path $extractDir "portfolio_temp.zip"

Copy-Item -Path $sourcePptx.FullName -Destination $tempZip -Force
Write-Host "Copied to temp zip: $tempZip"

if (Test-Path $pptxUnzipDir) {
    Remove-Item -Path $pptxUnzipDir -Recurse -Force
}
New-Item -ItemType Directory -Path $pptxUnzipDir -Force | Out-Null

Write-Host "Expanding archive..."
Expand-Archive -Path $tempZip -DestinationPath $pptxUnzipDir -Force
Remove-Item -Path $tempZip -Force

Write-Host "Extraction complete."
$mediaDir = Join-Path $pptxUnzipDir "ppt\media"
if (Test-Path $mediaDir) {
    $files = Get-ChildItem -Path $mediaDir
    Write-Host "Total extracted media files: $($files.Count)"
    $files | Select-Object Name, Length, Extension | Format-Table -AutoSize | Out-String | Write-Host
} else {
    Write-Warning "No ppt/media directory found."
}
