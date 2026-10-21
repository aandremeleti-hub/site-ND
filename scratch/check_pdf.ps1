$ErrorActionPreference = 'Stop'
$scriptDir = $PSScriptRoot
$atendimentoDir = (Resolve-Path (Join-Path $scriptDir "..\..\atendimento\4. atualizacao_site")).Path
$pdf = Get-ChildItem -Path $atendimentoDir -Filter "*.pdf"

foreach ($p in $pdf) {
    Write-Host "PDF: $($p.FullName) | Size: $($p.Length) bytes"
}
