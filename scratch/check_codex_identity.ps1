Add-Type -AssemblyName System.Drawing
$ErrorActionPreference = 'Stop'
$scriptDir = $PSScriptRoot

$extractDir = Join-Path $scriptDir "assets_extraidos\pptx_unzipped\ppt\media"
$fotosTratadasDir = (Resolve-Path (Join-Path $scriptDir "..\fotos-tratadas")).Path
$geralDir = Join-Path $fotosTratadasDir "fotos-tratadas-geral"

$geralFiles = Get-ChildItem -Path $geralDir -File
$allOtherTreated = Get-ChildItem -Path $fotosTratadasDir -Recurse -File | Where-Object { $_.DirectoryName -ne $geralDir -and $_.Extension -match '\.(png|jpg|jpeg|webp)$' }

foreach ($gf in $geralFiles) {
    $shaG = (Get-FileHash -Path $gf.FullName -Algorithm SHA256).Hash
    Write-Host "Geral: $($gf.Name) ($($gf.Length) bytes, SHA: $($shaG.Substring(0,8)))"
    foreach ($of in $allOtherTreated) {
        $shaO = (Get-FileHash -Path $of.FullName -Algorithm SHA256).Hash
        if ($shaG -eq $shaO) {
            $rel = $of.FullName.Substring($fotosTratadasDir.Length + 1)
            Write-Host "   == EXACT MATCH with $rel"
        }
    }
}
