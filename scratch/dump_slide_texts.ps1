$ErrorActionPreference = 'Stop'
$scriptDir = $PSScriptRoot
$pptxUnzipDir = Join-Path $scriptDir "assets_extraidos\pptx_unzipped"
$slidesDir = Join-Path $pptxUnzipDir "ppt\slides"
$slides = Get-ChildItem -Path $slidesDir -Filter "slide*.xml" | Sort-Object { [int]($_.BaseName -replace '\D') }

foreach ($slide in $slides) {
    $slideNum = [int]($slide.BaseName -replace '\D')
    $slideXml = [xml](Get-Content -Path $slide.FullName -Raw -Encoding UTF8)
    $ns = New-Object System.Xml.XmlNamespaceManager($slideXml.NameTable)
    $ns.AddNamespace("a", "http://schemas.openxmlformats.org/drawingml/2006/main")
    
    $paragraphs = @()
    $pNodes = $slideXml.SelectNodes("//a:p", $ns)
    foreach ($p in $pNodes) {
        $tNodes = $p.SelectNodes(".//a:t", $ns)
        $pText = ($tNodes | ForEach-Object { $_.InnerText }) -join ""
        if ($pText.Trim() -ne "") {
            $paragraphs += $pText.Trim()
        }
    }
    
    # Rels
    $relsFile = Join-Path $slidesDir "_rels\$($slide.Name).rels"
    $images = @()
    if (Test-Path $relsFile) {
        $relsXml = [xml](Get-Content -Path $relsFile -Raw -Encoding UTF8)
        $imgRels = $relsXml.SelectNodes("//*[@Type='http://schemas.openxmlformats.org/officeDocument/2006/relationships/image']")
        foreach ($r in $imgRels) {
            $images += (Split-Path $r.Target -Leaf)
        }
    }
    
    Write-Host "=========================================="
    Write-Host "SLIDE $slideNum (Images: $($images -join ', '))"
    Write-Host "=========================================="
    foreach ($line in $paragraphs) {
        Write-Host "  - $line"
    }
}
