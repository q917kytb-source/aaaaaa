# Script d'installation COMPLET pour C&V Digital Website
# Ce script installe Node.js (et npm) si nécessaire, puis installe les dépendances

# S'assurer qu'on est dans le bon répertoire (celui du script)
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptPath

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  C&V Digital - Installation COMPLETE" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Répertoire de travail : $scriptPath" -ForegroundColor Gray
Write-Host ""

# Fonction pour vérifier si une commande existe
function Test-Command {
    param($command)
    $null = Get-Command $command -ErrorAction SilentlyContinue
    return $?
}

# Fonction pour installer Node.js via Chocolatey
function Install-NodeViaChocolatey {
    Write-Host "Tentative d'installation via Chocolatey..." -ForegroundColor Yellow
    
    if (Test-Command "choco") {
        Write-Host "Chocolatey détecté. Installation de Node.js LTS..." -ForegroundColor Green
        choco install nodejs-lts -y
        
        # Rafraîchir les variables d'environnement
        $env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
        
        # Attendre un peu pour que l'installation se termine
        Start-Sleep -Seconds 3
        
        if (Test-Command "node") {
            $nodeVersion = node --version
            Write-Host "✓ Node.js installé avec succès : $nodeVersion" -ForegroundColor Green
            return $true
        }
    }
    return $false
}

# Fonction pour télécharger et installer Node.js manuellement
function Install-NodeManually {
    Write-Host ""
    Write-Host "Téléchargement de Node.js LTS..." -ForegroundColor Yellow
    
    # URL du MSI Node.js LTS (version 20.x)
    $nodeUrl = "https://nodejs.org/dist/v20.11.0/node-v20.11.0-x64.msi"
    $nodeInstaller = "$env:TEMP\nodejs-installer.msi"
    
    try {
        # Télécharger Node.js
        Write-Host "Téléchargement en cours (cela peut prendre quelques minutes)..." -ForegroundColor Yellow
        Invoke-WebRequest -Uri $nodeUrl -OutFile $nodeInstaller -UseBasicParsing
        
        Write-Host "Installation de Node.js..." -ForegroundColor Yellow
        Write-Host "Une fenêtre d'installation peut s'ouvrir. Suivez les instructions." -ForegroundColor Cyan
        
        # Installer Node.js silencieusement
        Start-Process msiexec.exe -ArgumentList "/i `"$nodeInstaller`" /quiet /norestart" -Wait
        
        # Nettoyer
        Remove-Item $nodeInstaller -ErrorAction SilentlyContinue
        
        # Rafraîchir les variables d'environnement
        $env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
        
        # Attendre un peu
        Start-Sleep -Seconds 5
        
        if (Test-Command "node") {
            $nodeVersion = node --version
            Write-Host "✓ Node.js installé avec succès : $nodeVersion" -ForegroundColor Green
            return $true
        } else {
            Write-Host "⚠ Node.js installé mais pas encore détecté dans le PATH." -ForegroundColor Yellow
            Write-Host "  Veuillez redémarrer PowerShell et relancer ce script." -ForegroundColor Yellow
            return $false
        }
    } catch {
        Write-Host "✗ Erreur lors du téléchargement/installation : $_" -ForegroundColor Red
        return $false
    }
}

# ÉTAPE 1 : Vérification/Installation de Node.js
Write-Host "[1/5] Vérification de Node.js..." -ForegroundColor Yellow

if (Test-Command "node") {
    $nodeVersion = node --version
    Write-Host "✓ Node.js est déjà installé : $nodeVersion" -ForegroundColor Green
    
    # Vérifier la version (minimum 18)
    $versionNumber = [int]($nodeVersion -replace 'v(\d+)\..*', '$1')
    if ($versionNumber -lt 18) {
        Write-Host "⚠ Attention : Node.js version 18+ recommandée. Version actuelle : $nodeVersion" -ForegroundColor Yellow
        $upgrade = Read-Host "Voulez-vous installer une version plus récente ? (O/N)"
        if ($upgrade -eq "O" -or $upgrade -eq "o") {
            if (-not (Install-NodeViaChocolatey)) {
                Install-NodeManually
            }
        }
    }
} else {
    Write-Host "✗ Node.js n'est pas installé" -ForegroundColor Red
    Write-Host ""
    Write-Host "Installation de Node.js (cela inclut npm automatiquement)..." -ForegroundColor Cyan
    Write-Host ""
    
    # Essayer d'abord avec Chocolatey
    $installed = $false
    if (Test-Command "choco") {
        $installed = Install-NodeViaChocolatey
    }
    
    # Si Chocolatey n'est pas disponible, installation manuelle
    if (-not $installed) {
        Write-Host ""
        Write-Host "Chocolatey n'est pas disponible. Installation manuelle..." -ForegroundColor Yellow
        $installed = Install-NodeManually
    }
    
    if (-not $installed) {
        Write-Host ""
        Write-Host "✗ Impossible d'installer Node.js automatiquement." -ForegroundColor Red
        Write-Host ""
        Write-Host "Veuillez installer Node.js manuellement :" -ForegroundColor Yellow
        Write-Host "1. Allez sur https://nodejs.org/" -ForegroundColor Yellow
        Write-Host "2. Téléchargez la version LTS" -ForegroundColor Yellow
        Write-Host "3. Installez-le" -ForegroundColor Yellow
        Write-Host "4. Redémarrez PowerShell" -ForegroundColor Yellow
        Write-Host "5. Relancez ce script" -ForegroundColor Yellow
        Write-Host ""
        $openBrowser = Read-Host "Voulez-vous ouvrir la page de téléchargement maintenant ? (O/N)"
        if ($openBrowser -eq "O" -or $openBrowser -eq "o") {
            Start-Process "https://nodejs.org/"
        }
        exit 1
    }
}

Write-Host ""

# ÉTAPE 2 : Vérification de npm
Write-Host "[2/5] Vérification de npm..." -ForegroundColor Yellow

if (Test-Command "npm") {
    $npmVersion = npm --version
    Write-Host "✓ npm est installé : v$npmVersion" -ForegroundColor Green
} else {
    Write-Host "✗ npm n'est pas détecté !" -ForegroundColor Red
    Write-Host "  npm devrait être inclus avec Node.js." -ForegroundColor Yellow
    Write-Host "  Veuillez redémarrer PowerShell et relancer ce script." -ForegroundColor Yellow
    exit 1
}

Write-Host ""

# ÉTAPE 3 : Vérification des dépendances existantes
Write-Host "[3/5] Vérification des dépendances..." -ForegroundColor Yellow

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
        Write-Host "[4/5] Vérification terminée" -ForegroundColor Yellow
        Write-Host "[5/5] Démarrage du serveur..." -ForegroundColor Yellow
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

# ÉTAPE 4 : Installation des dépendances npm
Write-Host "[4/5] Installation des dépendances npm..." -ForegroundColor Yellow
Write-Host "  Cela peut prendre quelques minutes..." -ForegroundColor Gray
Write-Host ""

# Vérifier qu'on est dans le bon répertoire avec package.json
if (-not (Test-Path "package.json")) {
    Write-Host "✗ Erreur : package.json introuvable dans le répertoire actuel" -ForegroundColor Red
    Write-Host "  Répertoire actuel : $(Get-Location)" -ForegroundColor Yellow
    Write-Host "  Veuillez exécuter ce script depuis le dossier du projet." -ForegroundColor Yellow
    exit 1
}

Write-Host "  Répertoire : $(Get-Location)" -ForegroundColor Gray
Write-Host ""

try {
    npm install
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "✓ Installation des dépendances réussie !" -ForegroundColor Green
    } else {
        Write-Host ""
        Write-Host "✗ Erreur lors de l'installation des dépendances" -ForegroundColor Red
        Write-Host "  Vérifiez votre connexion internet et réessayez." -ForegroundColor Yellow
        exit 1
    }
} catch {
    Write-Host ""
    Write-Host "✗ Erreur lors de l'installation : $_" -ForegroundColor Red
    exit 1
}

Write-Host ""

# ÉTAPE 5 : Démarrage du serveur
Write-Host "[5/5] Démarrage du serveur..." -ForegroundColor Yellow
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Installation terminée avec succès !" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "✓ Node.js et npm sont installés" -ForegroundColor Green
Write-Host "✓ Toutes les dépendances sont installées" -ForegroundColor Green
Write-Host ""
Write-Host "Le serveur de développement va démarrer..." -ForegroundColor Green
Write-Host ""
Write-Host "Ouvrez votre navigateur sur : http://localhost:3000" -ForegroundColor Cyan
Write-Host ""
Write-Host "Appuyez sur Ctrl+C pour arrêter le serveur" -ForegroundColor Yellow
Write-Host ""

# Démarrer le serveur
npm run dev
