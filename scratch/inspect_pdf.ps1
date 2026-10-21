$ErrorActionPreference = 'Stop'
$scriptDir = $PSScriptRoot
$atendimentoDir = (Resolve-Path (Join-Path $scriptDir "..\..\atendimento\4. atualizacao_site")).Path
$pdfPath = (Get-ChildItem -Path $atendimentoDir -Filter "*.pdf" | Select-Object -First 1).FullName

# Read raw bytes or regex search for titles / metadata in PDF
$bytes = [System.IO.File]::ReadAllBytes($pdfPath)
$text = [System.Text.Encoding]::ASCII.GetString($bytes)

# Find Title, Producer, Creator
$matches = [regex]::Matches($text, '/(Title|Producer|Creator|CreationDate)\s*\(([^)]+)\)')
foreach ($m in $matches) {
    Write-Host "$($m.Groups[1].Value): $($m.Groups[2].Value)"
}

# Count /Type /Page
$pageCount = ([regex]::Matches($text, '/Type\s*/Page\b')).Count
Write-Host "Total /Type /Page occurrences: $pageCount"
