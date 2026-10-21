Add-Type -AssemblyName System.Drawing
$ErrorActionPreference = 'Stop'
$scriptDir = $PSScriptRoot

$extractDir = Join-Path $scriptDir "assets_extraidos\pptx_unzipped\ppt\media"
$fotosTratadasDir = (Resolve-Path (Join-Path $scriptDir "..\fotos-tratadas")).Path
$geralDir = Join-Path $fotosTratadasDir "fotos-tratadas-geral"
$geralFiles = Get-ChildItem -Path $geralDir -File

function Get-EdgeAndColorProfile($path) {
    $img = [System.Drawing.Image]::FromFile($path)
    $bmp = New-Object System.Drawing.Bitmap(8, 8)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.DrawImage($img, 0, 0, 8, 8)
    $g.Dispose()
    
    $vals = @()
    for ($y=0; $y -lt 8; $y++) {
        for ($x=0; $x -lt 8; $x++) {
            $p = $bmp.GetPixel($x, $y)
            $vals += $p.R
            $vals += $p.G
            $vals += $p.B
        }
    }
    $bmp.Dispose()
    $img.Dispose()
    return $vals
}

function Diff-Profile($p1, $p2) {
    $sum = 0
    for ($i=0; $i -lt $p1.Length; $i++) {
        $sum += [Math]::Abs([int]$p1[$i] - [int]$p2[$i])
    }
    return [Math]::Round($sum / $p1.Length, 1)
}

$allCandidateFiles = Get-ChildItem -Path $fotosTratadasDir -Recurse -File | Where-Object { $_.DirectoryName -ne $geralDir -and $_.Extension -match '\.(png|jpg|jpeg)$' }
$candidateProfiles = @{}
foreach ($cf in $allCandidateFiles) {
    $rel = $cf.FullName.Substring($fotosTratadasDir.Length + 1)
    $candidateProfiles[$rel] = Get-EdgeAndColorProfile $cf.FullName
}

foreach ($gf in $geralFiles) {
    $gp = Get-EdgeAndColorProfile $gf.FullName
    $scores = @()
    foreach ($k in $candidateProfiles.Keys) {
        $d = Diff-Profile $gp $candidateProfiles[$k]
        $scores += [PSCustomObject]@{ Rel = $k; Diff = $d }
    }
    $top3 = $scores | Sort-Object Diff | Select-Object -First 3
    Write-Host "Codex: $($gf.Name)"
    foreach ($m in $top3) {
        Write-Host "   -> $($m.Rel): Diff = $($m.Diff)"
    }
}
