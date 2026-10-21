$ErrorActionPreference = 'Stop'
$scriptDir = $PSScriptRoot
$pptxUnzipDir = Join-Path $scriptDir "assets_extraidos\pptx_unzipped"

Write-Host "=== SLIDE ANALYSIS ==="
$slidesDir = Join-Path $pptxUnzipDir "ppt\slides"
$slides = Get-ChildItem -Path $slidesDir -Filter "slide*.xml" | Sort-Object { [int]($_.BaseName -replace '\D') }

foreach ($slide in $slides) {
    $slideNum = [int]($slide.BaseName -replace '\D')
    $slideXml = [xml](Get-Content -Path $slide.FullName -Raw -Encoding UTF8)
    
    $ns = New-Object System.Xml.XmlNamespaceManager($slideXml.NameTable)
    $ns.AddNamespace("a", "http://schemas.openxmlformats.org/drawingml/2006/main")
    $texts = $slideXml.SelectNodes("//a:t", $ns) | ForEach-Object { $_.InnerText.Trim() } | Where-Object { $_ -ne "" }
    $title = ($texts | Select-Object -First 3) -join " | "
    
    $relsFile = Join-Path $slidesDir "_rels\$($slide.Name).rels"
    $images = @()
    if (Test-Path $relsFile) {
        $relsXml = [xml](Get-Content -Path $relsFile -Raw -Encoding UTF8)
        $imgRels = $relsXml.SelectNodes("//*[@Type='http://schemas.openxmlformats.org/officeDocument/2006/relationships/image']")
        foreach ($r in $imgRels) {
            $images += (Split-Path $r.Target -Leaf)
        }
    }
    Write-Host "Slide ${slideNum}: Title='$title' | Images: $($images -join ', ')"
}

Write-Host "`n=== FOTOS TRATADAS DIRECTORIES ==="
$fotosTratadasDir = (Resolve-Path (Join-Path $scriptDir "..\fotos-tratadas")).Path
$treatedFiles = Get-ChildItem -Path $fotosTratadasDir -Recurse -File | Where-Object { $_.Extension -match '\.(png|jpg|jpeg|webp)$' }

Write-Host "Total treated files: $($treatedFiles.Count)"
$treatedFiles | Select-Object @{Name="RelativePath"; Expression={ $_.FullName.Substring($fotosTratadasDir.Length + 1) }}, Length | Sort-Object RelativePath | Format-Table -AutoSize | Out-String | Write-Host
