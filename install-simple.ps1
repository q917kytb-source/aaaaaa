# Script d'installation simplifié pour C&V Digital Website
# Version rapide sans vérifications détaillées

# S'assurer qu'on est dans le bon répertoire (celui du script)
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptPath

Write-Host "Installation des dépendances..." -ForegroundColor Cyan

# Vérifier Node.js rapidement
try {
    $nodeVersion = node --version
    Write-Host "Node.js: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "ERREUR: Node.js n'est pas installé !" -ForegroundColor Red
    Write-Host "Téléchargez-le depuis: https://nodejs.org/" -ForegroundColor Yellow
    exit 1
}

# Installer les dépendances
Write-Host "Installation en cours..." -ForegroundColor Yellow
npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✓ Installation terminée !" -ForegroundColor Green
    Write-Host ""
    Write-Host "Pour démarrer le serveur, exécutez:" -ForegroundColor Cyan
    Write-Host "  npm run dev" -ForegroundColor White
} else {
    Write-Host ""
    Write-Host "✗ Erreur lors de l'installation" -ForegroundColor Red
}
