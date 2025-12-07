# Script d'installation pour C&V Digital Website
# Ce script installe toutes les dépendances nécessaires et démarre le projet

# S'assurer qu'on est dans le bon répertoire (celui du script)
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptPath

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  C&V Digital - Installation du projet" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Fonction pour vérifier si une commande existe
function Test-Command {
    param($command)
    $null = Get-Command $command -ErrorAction SilentlyContinue
    return $?
}

# Vérification de Node.js
Write-Host "[1/4] Vérification de Node.js..." -ForegroundColor Yellow

if (Test-Command "node") {
    $nodeVersion = node --version
    Write-Host "✓ Node.js est installé : $nodeVersion" -ForegroundColor Green
    
    # Vérifier la version (minimum 18)
    $versionNumber = [int]($nodeVersion -replace 'v(\d+)\..*', '$1')
    if ($versionNumber -lt 18) {
        Write-Host "⚠ Attention : Node.js version 18+ recommandée. Version actuelle : $nodeVersion" -ForegroundColor Yellow
        Write-Host "  Vous pouvez continuer, mais certaines fonctionnalités peuvent ne pas fonctionner." -ForegroundColor Yellow
    }
} else {
    Write-Host "✗ Node.js n'est pas installé !" -ForegroundColor Red
    Write-Host ""
    Write-Host "Veuillez installer Node.js depuis : https://nodejs.org/" -ForegroundColor Yellow
    Write-Host "Choisissez la version LTS (Long Term Support)" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Après l'installation, relancez ce script." -ForegroundColor Yellow
    Write-Host ""
    $install = Read-Host "Voulez-vous ouvrir la page de téléchargement maintenant ? (O/N)"
    if ($install -eq "O" -or $install -eq "o") {
        Start-Process "https://nodejs.org/"
    }
    exit 1
}

Write-Host ""

# Vérification de npm
Write-Host "[2/4] Vérification de npm..." -ForegroundColor Yellow

if (Test-Command "npm") {
    $npmVersion = npm --version
    Write-Host "✓ npm est installé : v$npmVersion" -ForegroundColor Green
} else {
    Write-Host "✗ npm n'est pas installé !" -ForegroundColor Red
    Write-Host "  npm devrait être inclus avec Node.js. Réinstallez Node.js." -ForegroundColor Yellow
    exit 1
}

Write-Host ""

# Vérification du dossier node_modules
Write-Host "[3/4] Vérification des dépendances..." -ForegroundColor Yellow

if (Test-Path "node_modules") {
    Write-Host "✓ Le dossier node_modules existe déjà" -ForegroundColor Green
    $reinstall = Read-Host "Voulez-vous réinstaller les dépendances ? (O/N)"
    if ($reinstall -eq "O" -or $reinstall -eq "o") {
        Write-Host "  Suppression de node_modules..." -ForegroundColor Yellow
        Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
        Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue
        Write-Host "✓ Anciennes dépendances supprimées" -ForegroundColor Green
    } else {
        Write-Host "  Utilisation des dépendances existantes" -ForegroundColor Gray
        Write-Host ""
        Write-Host "[4/4] Démarrage du serveur..." -ForegroundColor Yellow
        Write-Host ""
        Write-Host "========================================" -ForegroundColor Cyan
        Write-Host "  Serveur de développement" -ForegroundColor Cyan
        Write-Host "========================================" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "Le serveur va démarrer sur : http://localhost:3000" -ForegroundColor Green
        Write-Host ""
        Write-Host "Appuyez sur Ctrl+C pour arrêter le serveur" -ForegroundColor Yellow
        Write-Host ""
        npm run dev
        exit 0
    }
}

# Installation des dépendances
Write-Host "  Installation des dépendances (cela peut prendre quelques minutes)..." -ForegroundColor Yellow
Write-Host ""

try {
    npm install
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "✓ Installation réussie !" -ForegroundColor Green
    } else {
        Write-Host ""
        Write-Host "✗ Erreur lors de l'installation" -ForegroundColor Red
        Write-Host "  Vérifiez votre connexion internet et réessayez." -ForegroundColor Yellow
        exit 1
    }
} catch {
    Write-Host ""
    Write-Host "✗ Erreur lors de l'installation : $_" -ForegroundColor Red
    exit 1
}

Write-Host ""

# Démarrage du serveur
Write-Host "[4/4] Démarrage du serveur..." -ForegroundColor Yellow
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Installation terminée !" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Le serveur de développement va démarrer..." -ForegroundColor Green
Write-Host ""
Write-Host "Ouvrez votre navigateur sur : http://localhost:3000" -ForegroundColor Cyan
Write-Host ""
Write-Host "Appuyez sur Ctrl+C pour arrêter le serveur" -ForegroundColor Yellow
Write-Host ""

# Démarrer le serveur
npm run dev
