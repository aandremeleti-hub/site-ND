Add-Type -AssemblyName System.Drawing
$ErrorActionPreference = 'Stop'
$scriptDir = $PSScriptRoot

$extractDir = Join-Path $scriptDir "assets_extraidos\pptx_unzipped\ppt\media"
$fotosTratadasDir = (Resolve-Path (Join-Path $scriptDir "..\fotos-tratadas")).Path
$geralDir = Join-Path $fotosTratadasDir "fotos-tratadas-geral"

$geralFiles = Get-ChildItem -Path $geralDir -File

function Compare-Thumb($pathA, $pathB) {
    try {
        $imgA = [System.Drawing.Image]::FromFile($pathA)
        $imgB = [System.Drawing.Image]::FromFile($pathB)
        $bmpA = New-Object System.Drawing.Bitmap(16, 16)
        $gA = [System.Drawing.Graphics]::FromImage($bmpA)
        $gA.DrawImage($imgA, 0, 0, 16, 16)
        $gA.Dispose()
        $bmpB = New-Object System.Drawing.Bitmap(16, 16)
        $gB = [System.Drawing.Graphics]::FromImage($bmpB)
        $gB.DrawImage($imgB, 0, 0, 16, 16)
        $gB.Dispose()
        
        $diff = 0
        for ($y=0; $y -lt 16; $y++) {
            for ($x=0; $x -lt 16; $x++) {
                $pA = $bmpA.GetPixel($x, $y)
                $pB = $bmpB.GetPixel($x, $y)
                $diff += [Math]::Abs([int]$pA.R - [int]$pB.R) + [Math]::Abs([int]$pA.G - [int]$pB.G) + [Math]::Abs([int]$pA.B - [int]$pB.B)
            }
        }
        $bmpA.Dispose(); $bmpB.Dispose(); $imgA.Dispose(); $imgB.Dispose()
        return [Math]::Round($diff / (16 * 16 * 3), 2)
    } catch { return 999 }
}

$allExtracted = Get-ChildItem -Path $extractDir -File

foreach ($gf in $geralFiles) {
    Write-Host "`n--- GERAL FILE: $($gf.Name) ($($gf.Length) bytes) ---"
    $matches = @()
    foreach ($ef in $allExtracted) {
        $d = Compare-Thumb $gf.FullName $ef.FullName
        if ($d -lt 25) {
            $matches += [PSCustomObject]@{ Extracted = $ef.Name; Diff = $d }
        }
    }
    if ($matches.Count -gt 0) {
        $matches | Sort-Object Diff | ForEach-Object { Write-Host "  -> Matches $($_.Extracted) (Diff: $($_.Diff))" }
    } else {
        # Show best 2
        $allExtracted | ForEach-Object { [PSCustomObject]@{ Extracted = $_.Name; Diff = (Compare-Thumb $gf.FullName $_.FullName) } } | Sort-Object Diff | Select-Object -First 2 | ForEach-Object { Write-Host "  -> Closest: $($_.Extracted) (Diff: $($_.Diff))" }
    }
}
