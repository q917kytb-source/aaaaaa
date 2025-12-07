# 🚀 Instructions d'installation rapide

## Installation automatique (Recommandé)

### Windows PowerShell

1. **Ouvrez PowerShell** dans le dossier du projet

2. **Exécutez l'un des scripts suivants :**

   **⭐ Installation COMPLÈTE (recommandé si Node.js n'est pas installé) :**
   ```powershell
   .\install-complet.ps1
   ```
   - **INSTALLE Node.js et npm automatiquement** si nécessaire
   - Installe toutes les dépendances
   - Démarre automatiquement le serveur

   **Script complet (si Node.js est déjà installé) :**
   ```powershell
   .\install.ps1
   ```
   - Vérifie Node.js et npm
   - Installe toutes les dépendances
   - Démarre automatiquement le serveur

   **Script simple :**
   ```powershell
   .\install-simple.ps1
   ```
   - Installation rapide sans vérifications détaillées

   **Démarrage automatique :**
   ```powershell
   .\demarrer.ps1
   ```
   - Installe si nécessaire
   - Démarre le serveur

3. **Ouvrez votre navigateur** sur : http://localhost:3000

---

## Si vous avez des problèmes

### Erreur : "Execution policy"

Si vous obtenez une erreur concernant la politique d'exécution :

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Puis relancez le script.

### Node.js n'est pas installé

1. Téléchargez Node.js depuis : https://nodejs.org/
2. Choisissez la version **LTS** (Long Term Support)
3. Installez-le
4. Relancez le script d'installation

### Installation manuelle

Si les scripts ne fonctionnent pas :

```bash
npm install
npm run dev
```

---

## Commandes utiles

- **Démarrer le serveur :** `npm run dev`
- **Build de production :** `npm run build`
- **Démarrer en production :** `npm start`
- **Vérifier les erreurs :** `npm run lint`

---

## Support

Pour toute question, contactez : contact@cv-digital.com
