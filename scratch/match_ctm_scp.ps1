Add-Type -AssemblyName System.Drawing
$ErrorActionPreference = 'Stop'

$scriptDir = $PSScriptRoot
$extractDir = Join-Path $scriptDir "assets_extraidos\pptx_unzipped\ppt\media"
$fotosTratadasDir = (Resolve-Path (Join-Path $scriptDir "..\fotos-tratadas")).Path

function Compare-TwoImages($pathA, $pathB) {
    try {
        $imgA = [System.Drawing.Image]::FromFile($pathA)
        $imgB = [System.Drawing.Image]::FromFile($pathB)
        
        $bmpA = New-Object System.Drawing.Bitmap(32, 32)
        $gA = [System.Drawing.Graphics]::FromImage($bmpA)
        $gA.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBilinear
        $gA.DrawImage($imgA, 0, 0, 32, 32)
        $gA.Dispose()

        $bmpB = New-Object System.Drawing.Bitmap(32, 32)
        $gB = [System.Drawing.Graphics]::FromImage($bmpB)
        $gB.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBilinear
        $gB.DrawImage($imgB, 0, 0, 32, 32)
        $gB.Dispose()

        $totalDiff = 0
        for ($y = 0; $y -lt 32; $y++) {
            for ($x = 0; $x -lt 32; $x++) {
                $cA = $bmpA.GetPixel($x, $y)
                $cB = $bmpB.GetPixel($x, $y)
                $diffR = [Math]::Abs([int]$cA.R - [int]$cB.R)
                $diffG = [Math]::Abs([int]$cA.G - [int]$cB.G)
                $diffB = [Math]::Abs([int]$cA.B - [int]$cB.B)
                $totalDiff += ($diffR + $diffG + $diffB) / 3
            }
        }
        $bmpA.Dispose()
        $bmpB.Dispose()
        $imgA.Dispose()
        $imgB.Dispose()
        return [Math]::Round($totalDiff / (32 * 32), 2)
    } catch {
        return 999999
    }
}

$allMedia = Get-ChildItem -Path $extractDir -Filter "image-*.png"
$allMedia += Get-ChildItem -Path $extractDir -Filter "image-*.jpeg"

Write-Host "Comparing CTM images against PPTX media..."
$ctmFiles = Get-ChildItem -Path (Join-Path $fotosTratadasDir "CTM") -File
foreach ($ctm in $ctmFiles) {
    $best = $null
    $minScore = 999999
    foreach ($m in $allMedia) {
        $score = Compare-TwoImages $ctm.FullName $m.FullName
        if ($score -lt $minScore) {
            $minScore = $score
            $best = $m
        }
    }
    Write-Host "CTM $($ctm.Name) matches PPTX $($best.Name) with diff $minScore"
}

Write-Host "`nComparing SCP images against PPTX media..."
$scpFiles = Get-ChildItem -Path (Join-Path $fotosTratadasDir "SCP") -File
foreach ($scp in $scpFiles) {
    $best = $null
    $minScore = 999999
    foreach ($m in $allMedia) {
        $score = Compare-TwoImages $scp.FullName $m.FullName
        if ($score -lt $minScore) {
            $minScore = $score
            $best = $m
        }
    }
    Write-Host "SCP $($scp.Name) matches PPTX $($best.Name) with diff $minScore"
}
