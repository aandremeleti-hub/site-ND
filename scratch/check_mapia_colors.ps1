Add-Type -AssemblyName System.Drawing
$ErrorActionPreference = 'Stop'
$scriptDir = $PSScriptRoot

$extractDir = Join-Path $scriptDir "assets_extraidos\pptx_unzipped\ppt\media"
$fotosTratadasDir = (Resolve-Path (Join-Path $scriptDir "..\fotos-tratadas")).Path
$geralDir = Join-Path $fotosTratadasDir "fotos-tratadas-geral"
$geralFiles = Get-ChildItem -Path $geralDir -File

# Function to get average color & aspect ratio
foreach ($gf in $geralFiles) {
    $img = [System.Drawing.Image]::FromFile($gf.FullName)
    $w = $img.Width; $h = $img.Height
    $ar = [Math]::Round($w / $h, 2)
    
    # Sample center pixel and corner pixels
    $bmp = New-Object System.Drawing.Bitmap($img)
    $cCenter = $bmp.GetPixel([int]($w/2), [int]($h/2))
    $cTop = $bmp.GetPixel([int]($w/2), 10)
    $bmp.Dispose()
    $img.Dispose()
    
    Write-Host "$($gf.Name) -> Dim: ${w}x${h} (AR: $ar) | CenterRGB: ($($cCenter.R),$($cCenter.G),$($cCenter.B)) | TopRGB: ($($cTop.R),$($cTop.G),$($cTop.B))"
}

Write-Host "`n--- SLIDE 39, 40, 41 (MAPIA) IMAGES ---"
$mapiaImages = @("image-39-1.png","image-40-1.png","image-40-2.png","image-40-3.png","image-41-1.png","image-41-2.png","image-41-3.png")
foreach ($mi in $mapiaImages) {
    $p = Join-Path $extractDir $mi
    if (Test-Path $p) {
        $img = [System.Drawing.Image]::FromFile($p)
        $w = $img.Width; $h = $img.Height
        $ar = [Math]::Round($w / $h, 2)
        $bmp = New-Object System.Drawing.Bitmap($img)
        $cCenter = $bmp.GetPixel([int]($w/2), [int]($h/2))
        $cTop = $bmp.GetPixel([int]($w/2), 10)
        $bmp.Dispose()
        $img.Dispose()
        Write-Host "$mi -> Dim: ${w}x${h} (AR: $ar) | CenterRGB: ($($cCenter.R),$($cCenter.G),$($cCenter.B)) | TopRGB: ($($cTop.R),$($cTop.G),$($cTop.B))"
    }
}
