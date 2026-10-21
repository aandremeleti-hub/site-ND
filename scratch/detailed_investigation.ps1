Add-Type -AssemblyName System.Drawing
$ErrorActionPreference = 'Stop'
$scriptDir = $PSScriptRoot

$extractDir = Join-Path $scriptDir "assets_extraidos\pptx_unzipped\ppt\media"
$fotosTratadasDir = (Resolve-Path (Join-Path $scriptDir "..\fotos-tratadas")).Path

function Get-ImageFingerprint($imagePath) {
    try {
        $orig = [System.Drawing.Image]::FromFile($imagePath)
        # Create 16x16 thumbnail
        $thumb = New-Object System.Drawing.Bitmap(16, 16)
        $g = [System.Drawing.Graphics]::FromImage($thumb)
        $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::Bilinear
        $g.DrawImage($orig, 0, 0, 16, 16)
        $g.Dispose()
        $orig.Dispose()

        # Compute grayscale pixel values
        $pixels = New-Object byte[] (16 * 16)
        $idx = 0
        for ($y = 0; $y -lt 16; $y++) {
            for ($x = 0; $x -lt 16; $x++) {
                $c = $thumb.GetPixel($x, $y)
                # Luminance: 0.299*R + 0.587*G + 0.114*B
                $lum = [byte](0.299 * $c.R + 0.587 * $c.G + 0.114 * $c.B)
                $pixels[$idx] = $lum
                $idx++
            }
        }
        $thumb.Dispose()
        return $pixels
    } catch {
        return $null
    }
}

function Get-PixelDifference($pixA, $pixB) {
    if (!$pixA -or !$pixB) { return 999999 }
    $diff = 0
    for ($i = 0; $i -lt $pixA.Length; $i++) {
        $diff += [Math]::Abs([int]$pixA[$i] - [int]$pixB[$i])
    }
    return [Math]::Round($diff / $pixA.Length, 2)
}

Write-Host "Fingerprinting extracted PPTX media..."
$extractedFiles = Get-ChildItem -Path $extractDir -File | Where-Object { $_.Extension -match '\.(png|jpg|jpeg)$' }
$extractedInfo = @()
foreach ($f in $extractedFiles) {
    $fp = Get-ImageFingerprint $f.FullName
    try {
        $img = [System.Drawing.Image]::FromFile($f.FullName)
        $w = $img.Width; $h = $img.Height
        $img.Dispose()
    } catch { $w = 0; $h = 0 }
    $extractedInfo += [PSCustomObject]@{
        Name = $f.Name
        Path = $f.FullName
        Width = $w
        Height = $h
        Size = $f.Length
        Fingerprint = $fp
    }
}

Write-Host "Fingerprinting treated photos..."
$treatedFiles = Get-ChildItem -Path $fotosTratadasDir -Recurse -File | Where-Object { $_.Extension -match '\.(png|jpg|jpeg|webp)$' }
$treatedInfo = @()
foreach ($f in $treatedFiles) {
    $rel = $f.FullName.Substring($fotosTratadasDir.Length + 1)
    $fp = Get-ImageFingerprint $f.FullName
    try {
        $img = [System.Drawing.Image]::FromFile($f.FullName)
        $w = $img.Width; $h = $img.Height
        $img.Dispose()
    } catch { $w = 0; $h = 0 }
    $treatedInfo += [PSCustomObject]@{
        RelPath = $rel
        Path = $f.FullName
        Width = $w
        Height = $h
        Size = $f.Length
        Fingerprint = $fp
    }
}

Write-Host "`n=== BEST MATCH PER EXTRACTED IMAGE ==="
$results = @()
foreach ($e in $extractedInfo) {
    $bestMatch = $null
    $minDiff = 999999
    foreach ($t in $treatedInfo) {
        $diff = Get-PixelDifference $e.Fingerprint $t.Fingerprint
        if ($diff -lt $minDiff) {
            $minDiff = $diff
            $bestMatch = $t
        }
    }
    $results += [PSCustomObject]@{
        Extracted = $e.Name
        ExtractedDim = "$($e.Width)x$($e.Height)"
        Treated = $bestMatch.RelPath
        TreatedDim = "$($bestMatch.Width)x$($bestMatch.Height)"
        Difference = $minDiff
        Status = if ($minDiff -eq 0) { "EXACT HASH/VISUAL" } elseif ($minDiff -lt 15) { "HIGH CONFIDENCE MATCH" } elseif ($minDiff -lt 30) { "POSSIBLE CROP/GRADE" } else { "NO MATCH" }
    }
}

$results | Format-Table Extracted, ExtractedDim, Treated, TreatedDim, Difference, Status -AutoSize | Out-String | Write-Host
