Add-Type -AssemblyName System.Drawing
$ErrorActionPreference = 'Stop'
$scriptDir = $PSScriptRoot

$extractDir = Join-Path $scriptDir "assets_extraidos\pptx_unzipped\ppt\media"
$fotosTratadasDir = (Resolve-Path (Join-Path $scriptDir "..\fotos-tratadas")).Path

$extractedFiles = Get-ChildItem -Path $extractDir -File
$treatedFiles = Get-ChildItem -Path $fotosTratadasDir -Recurse -File | Where-Object { $_.Extension -match '\.(png|jpg|jpeg|webp)$' }

Write-Host "Analyzing extracted files ($($extractedFiles.Count))..."
$extractedData = @{}
foreach ($f in $extractedFiles) {
    try {
        $bmp = [System.Drawing.Image]::FromFile($f.FullName)
        $w = $bmp.Width
        $h = $bmp.Height
        $bmp.Dispose()
    } catch {
        $w = 0; $h = 0
    }
    $sha = (Get-FileHash -Path $f.FullName -Algorithm SHA256).Hash
    $extractedData[$f.Name] = [PSCustomObject]@{
        Name = $f.Name
        Length = $f.Length
        Width = $w
        Height = $h
        SHA256 = $sha
        FullName = $f.FullName
    }
}

Write-Host "Analyzing treated files ($($treatedFiles.Count))..."
$treatedData = @{}
foreach ($f in $treatedFiles) {
    $rel = $f.FullName.Substring($fotosTratadasDir.Length + 1)
    try {
        $bmp = [System.Drawing.Image]::FromFile($f.FullName)
        $w = $bmp.Width
        $h = $bmp.Height
        $bmp.Dispose()
    } catch {
        $w = 0; $h = 0
    }
    $sha = (Get-FileHash -Path $f.FullName -Algorithm SHA256).Hash
    $treatedData[$rel] = [PSCustomObject]@{
        RelPath = $rel
        Length = $f.Length
        Width = $w
        Height = $h
        SHA256 = $sha
        FullName = $f.FullName
    }
}

Write-Host "`n=== EXACT SHA256 MATCHES ==="
$matchedExtracted = @{}
foreach ($eName in $extractedData.Keys) {
    $e = $extractedData[$eName]
    foreach ($tRel in $treatedData.Keys) {
        $t = $treatedData[$tRel]
        if ($e.SHA256 -eq $t.SHA256) {
            Write-Host "MATCH: PPTX [$($e.Name)] == Treated [$($t.RelPath)] ($($e.Width)x$($e.Height), $($e.Length) bytes)"
            $matchedExtracted[$e.Name] = $t.RelPath
        }
    }
}

Write-Host "`n=== EXACT LENGTH MATCHES (non-SHA) ==="
foreach ($eName in $extractedData.Keys) {
    if ($matchedExtracted.ContainsKey($eName)) { continue }
    $e = $extractedData[$eName]
    foreach ($tRel in $treatedData.Keys) {
        $t = $treatedData[$tRel]
        if ($e.Length -eq $t.Length) {
            Write-Host "LENGTH MATCH: PPTX [$($e.Name)] ~ Treated [$($t.RelPath)] (PPTX: $($e.Width)x$($e.Height), Trt: $($t.Width)x$($t.Height))"
        }
    }
}
