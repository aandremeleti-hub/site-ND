Add-Type -AssemblyName System.Drawing
$ErrorActionPreference = 'Stop'
$scriptDir = $PSScriptRoot

$extractDir = Join-Path $scriptDir "assets_extraidos\pptx_unzipped\ppt\media"
$fotosTratadasDir = (Resolve-Path (Join-Path $scriptDir "..\fotos-tratadas")).Path

function Compare-TwoImages($pathA, $pathB) {
    try {
        $imgA = [System.Drawing.Image]::FromFile($pathA)
        $imgB = [System.Drawing.Image]::FromFile($pathB)
        
        # Resize both to 32x32
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

# Define project slides to test
$tests = @(
    @{ Project="RPJ"; Slides=@(11,12,13,14,15,16); Folders=@("fotos-tratadas-01","rpj-nicolas") },
    @{ Project="MJP (Mara)"; Slides=@(23,24); Folders=@("arq-mara-jd-paulistano") },
    @{ Project="CMG (Maria e Gustavo)"; Slides=@(25,26); Folders=@("gustavo-e-maria") },
    @{ Project="AMP (Maurício Apinajés)"; Slides=@(35,36); Folders=@("apinajes-mauricio") },
    @{ Project="RVM (Vinicius Mamede)"; Slides=@(20,21,22); Folders=@("vinicius-mamede") },
    @{ Project="RCM (Maurício Colatino)"; Slides=@(17,18,19); Folders=@("rcm-mauricio","fotos-tratadas-01") },
    @{ Project="CASA COR 2025"; Slides=@(37,38); Folders=@("casa-cor-2025") },
    @{ Project="Mapiá (CRF)"; Slides=@(39,40,41); Folders=@("fotos-tratadas-geral") }
)

foreach ($t in $tests) {
    Write-Host "`n========================================================"
    Write-Host "PROJECT: $($t.Project) (Slides: $($t.Slides -join ', '))"
    Write-Host "========================================================"
    
    $candidateFiles = @()
    foreach ($fld in $t.Folders) {
        $fldPath = Join-Path $fotosTratadasDir $fld
        if (Test-Path $fldPath) {
            $candidateFiles += Get-ChildItem -Path $fldPath -File | Where-Object { $_.Extension -match '\.(png|jpg|jpeg|webp)$' }
        }
    }
    
    # Get extracted files for these slides
    $slideExtracted = @()
    foreach ($sNum in $t.Slides) {
        $slideExtracted += Get-ChildItem -Path $extractDir -Filter "image-$sNum-*.png"
        $slideExtracted += Get-ChildItem -Path $extractDir -Filter "image-$sNum-*.jpeg"
    }
    
    foreach ($ext in $slideExtracted) {
        $bestCandidate = $null
        $minScore = 999999
        $allScores = @()
        
        foreach ($cand in $candidateFiles) {
            $score = Compare-TwoImages $ext.FullName $cand.FullName
            $allScores += [PSCustomObject]@{ File = $cand.Name; Score = $score; Rel = ($cand.FullName.Substring($fotosTratadasDir.Length + 1)) }
            if ($score -lt $minScore) {
                $minScore = $score
                $bestCandidate = $cand
            }
        }
        
        $top3 = $allScores | Sort-Object Score | Select-Object -First 3
        $top3Str = ($top3 | ForEach-Object { "$($_.Rel) ($($_.Score))" }) -join " | "
        Write-Host "[$($ext.Name)] Best: $($bestCandidate.Name) (Diff: $minScore) | Top: $top3Str"
    }
}
