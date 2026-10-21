Add-Type -AssemblyName System.Drawing
$ErrorActionPreference = 'Stop'
$scriptDir = $PSScriptRoot

$assetsDir = (Resolve-Path (Join-Path $scriptDir "..\src\assets")).Path
$svgFiles = Get-ChildItem -Path $assetsDir -Filter "*.svg" | Where-Object { $_.Length -gt 100000 }

Write-Host "Found $($svgFiles.Count) large SVG files in src/assets/"
foreach ($svg in $svgFiles) {
    $content = [System.IO.File]::ReadAllText($svg.FullName)
    $match = [regex]::Match($content, 'data:image/(png|jpeg|webp);base64,([A-Za-z0-9+/=]+)')
    if ($match.Success) {
        $ext = $match.Groups[1].Value
        $b64 = $match.Groups[2].Value
        $bytes = [Convert]::FromBase64String($b64)
        $ms = New-Object System.IO.MemoryStream(,$bytes)
        try {
            $img = [System.Drawing.Image]::FromStream($ms)
            Write-Host "$($svg.Name) ($($svg.Length) bytes) -> Embedded ${ext}: $($img.Width)x$($img.Height) ($($bytes.Length) bytes)"
            $img.Dispose()
        } catch {
            Write-Host "$($svg.Name) -> Error reading image"
        }
        $ms.Dispose()
    } else {
        Write-Host "$($svg.Name) -> No base64 data URI found"
    }
}
