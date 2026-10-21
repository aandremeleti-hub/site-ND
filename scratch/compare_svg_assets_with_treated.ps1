Add-Type -AssemblyName System.Drawing
$ErrorActionPreference = 'Stop'
$scriptDir = $PSScriptRoot

$assetsDir = (Resolve-Path (Join-Path $scriptDir "..\src\assets")).Path
$fotosTratadasDir = (Resolve-Path (Join-Path $scriptDir "..\fotos-tratadas")).Path

function Get-EmbeddedImage($svgPath) {
    $content = [System.IO.File]::ReadAllText($svgPath)
    $match = [regex]::Match($content, 'data:image/(png|jpeg|webp);base64,([A-Za-z0-9+/=]+)')
    if ($match.Success) {
        $bytes = [Convert]::FromBase64String($match.Groups[2].Value)
        $ms = New-Object System.IO.MemoryStream(,$bytes)
        $bmp = [System.Drawing.Bitmap]::FromStream($ms)
        return @{ Image = $bmp; Stream = $ms; Length = $bytes.Length }
    }
    return $null
}

function Fingerprint-Bitmap($bmp) {
    $thumb = New-Object System.Drawing.Bitmap(16, 16)
    $g = [System.Drawing.Graphics]::FromImage($thumb)
    $g.DrawImage($bmp, 0, 0, 16, 16)
    $g.Dispose()
    $pix = New-Object byte[] (16*16)
    $idx = 0
    for ($y=0; $y -lt 16; $y++) {
        for ($x=0; $x -lt 16; $x++) {
            $c = $thumb.GetPixel($x, $y)
            $pix[$idx] = [byte](0.299*$c.R + 0.587*$c.G + 0.114*$c.B)
            $idx++
        }
    }
    $thumb.Dispose()
    return $pix
}

$treatedFiles = Get-ChildItem -Path $fotosTratadasDir -Recurse -File | Where-Object { $_.Extension -match '\.(png|jpg|jpeg|webp)$' }
$treatedFps = @{}
foreach ($tf in $treatedFiles) {
    $rel = $tf.FullName.Substring($fotosTratadasDir.Length + 1)
    $img = [System.Drawing.Image]::FromFile($tf.FullName)
    $bmp = New-Object System.Drawing.Bitmap($img)
    $treatedFps[$rel] = Fingerprint-Bitmap $bmp
    $bmp.Dispose()
    $img.Dispose()
}

$svgList = @()
$svgList += Get-ChildItem -Path $assetsDir -Filter "illustrationBast*.svg"
$svgList += Get-ChildItem -Path $assetsDir -Filter "illustrationProjeto*.svg"
$svgList += Get-ChildItem -Path (Join-Path $assetsDir "projetos") -Filter "projeto*.svg"

Write-Host "Comparing $($svgList.Count) website SVGs against treated photos..."
foreach ($svg in $svgList) {
    $emb = Get-EmbeddedImage $svg.FullName
    if ($emb) {
        $fp = Fingerprint-Bitmap $emb.Image
        $bestRel = ""
        $minDiff = 999999
        foreach ($k in $treatedFps.Keys) {
            $diff = 0
            for ($i=0; $i -lt 256; $i++) {
                $diff += [Math]::Abs([int]$fp[$i] - [int]$treatedFps[$k][$i])
            }
            $diff = [Math]::Round($diff / 256, 1)
            if ($diff -lt $minDiff) {
                $minDiff = $diff
                $bestRel = $k
            }
        }
        Write-Host "$($svg.Name) ($($emb.Image.Width)x$($emb.Image.Height)) -> Best: $bestRel (Diff: $minDiff)"
        $emb.Image.Dispose()
        $emb.Stream.Dispose()
    }
}
