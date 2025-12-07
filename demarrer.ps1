# Script de démarrage pour C&V Digital Website

# S'assurer qu'on est dans le bon répertoire (celui du script)
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptPath

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  C&V Digital - Démarrage" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Vérifier si node_modules existe
if (-not (Test-Path "node_modules")) {
    Write-Host "⚠ Les dépendances ne sont pas installées !" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Exécution de l'installation..." -ForegroundColor Yellow
    Write-Host ""
    
    # Exécuter le script d'installation
    & "$PSScriptRoot\install-simple.ps1"
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host ""
        Write-Host "✗ Installation échouée. Veuillez exécuter install.ps1 manuellement." -ForegroundColor Red
        exit 1
    }
    
    Write-Host ""
}

Write-Host "Démarrage du serveur de développement..." -ForegroundColor Green
Write-Host ""
Write-Host "Le site sera accessible sur : http://localhost:3000" -ForegroundColor Cyan
Write-Host ""
Write-Host "Appuyez sur Ctrl+C pour arrêter le serveur" -ForegroundColor Yellow
Write-Host ""

# Démarrer le serveur
npm run dev
