# 📧 Configuration de l'envoi d'emails

Les formulaires de contact et de rendez-vous envoient maintenant des emails à **quentinclaes@icloud.com**.

## 🚀 Configuration avec Resend (Recommandé)

### Étape 1 : Créer un compte Resend

1. Allez sur [https://resend.com](https://resend.com)
2. Créez un compte gratuit (3000 emails/mois gratuits)
3. Allez dans **API Keys** et créez une nouvelle clé API

### Étape 2 : Configurer la clé API

1. Créez un fichier `.env.local` à la racine du projet :

```env
RESEND_API_KEY=re_votre_clé_api_ici
```

2. **Important** : Ajoutez `.env.local` à `.gitignore` pour ne pas commiter votre clé API

### Étape 3 : Vérifier votre domaine (Optionnel)

Pour utiliser votre propre domaine d'email (ex: contact@cv-digital.com) :

1. Allez dans **Domains** sur Resend
2. Ajoutez votre domaine
3. Suivez les instructions DNS
4. Modifiez le `from` dans les fichiers API :
   - `app/api/contact/route.ts`
   - `app/api/appointment/route.ts`

Changez :
```typescript
from: 'C&V Digital <onboarding@resend.dev>'
```

Par :
```typescript
from: 'C&V Digital <contact@votre-domaine.com>'
```

## 🔄 Alternative : Sans Resend (Mode développement)

Si vous ne configurez pas Resend, les formulaires fonctionneront toujours mais :
- Les emails ne seront pas envoyés
- Les données seront loggées dans la console du serveur
- L'utilisateur verra quand même un message de succès

## 📝 Test

1. Remplissez un formulaire sur le site
2. Vérifiez votre boîte email (quentinclaes@icloud.com)
3. Vérifiez aussi la console du serveur pour les logs

## 🛠️ Dépannage

### Les emails ne sont pas reçus

1. Vérifiez que `RESEND_API_KEY` est bien défini dans `.env.local`
2. Vérifiez que la clé API est valide sur Resend
3. Vérifiez les logs du serveur pour les erreurs
4. Vérifiez le dossier spam

### Erreur "Invalid API key"

- Vérifiez que votre clé API commence par `re_`
- Vérifiez que vous avez copié la clé complète
- Redémarrez le serveur après avoir ajouté la variable d'environnement

## 📧 Changer l'email de destination

Pour changer l'email de destination, modifiez dans :
- `app/api/contact/route.ts` (ligne avec `to: 'quentinclaes@icloud.com'`)
- `app/api/appointment/route.ts` (ligne avec `to: 'quentinclaes@icloud.com'`)

Ou utilisez une variable d'environnement :

```env
CONTACT_EMAIL=votre-email@example.com
```

Et dans les fichiers API :
```typescript
to: process.env.CONTACT_EMAIL || 'quentinclaes@icloud.com',
```
