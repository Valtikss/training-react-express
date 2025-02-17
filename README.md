# Projet : Uber Eats (mini) – Formation React & Express

Bienvenue dans ce projet d’entraînement pour apprendre à développer une application **React** (client) avec un serveur **Express** (back).  
Au fil de 21 exercices (un par jour), vous allez construire progressivement un mini-site complet qui simule quelques fonctionnalités d’Uber Eats (liste de restaurants, plats, panier, commande…).

---

## Table des matières

1. [Structure du projet](#structure-du-projet)  
2. [Installation et lancement](#installation-et-lancement)  
3. [Branches Git et workflow](#branches-git-et-workflow)  
4. [Comment réaliser un exercice et envoyer sa solution ?](#comment-réaliser-un-exercice-et-envoyer-sa-solution)  
5. [À propos des exercices](#à-propos-des-exercices)  

---

## Structure du projet

Le repository contient deux dossiers principaux :

- **client/** : application front-end **React**, configurée avec **Tailwind**.  
- **server/** : application back-end **Express**, avec un endpoint de test `/api/test`, et éventuellement d’autres endpoints à venir (CRUD, commandes, etc.).

Schéma rapide :

```
project-root
 ┣━━ client
 ┃    ┣━━ package.json
 ┃    ┣━━ vite.config.js (ou config CRA)
 ┃    ┣━━ tailwind.config.js
 ┃    ┣━━ postcss.config.js
 ┃    ┗━━ src
 ┃         ┣━━ App.jsx
 ┃         ┣━━ index.css
 ┃         ┗━━ ...
 ┣━━ server
 ┃    ┣━━ package.json
 ┃    ┣━━ server.js
 ┃    ┗━━ ...
 ┣━━ .gitignore
 ┣━━ README.md
 ┗━━ ...
```

---

## Installation et lancement

### 1. Récupérer le repo
Clonez le projet sur votre machine :

```bash
git clone <url_du_repo.git>
cd project-root
```

### 2. Installer les dépendances

- **Pour le client** :
  ```bash
  cd client
  npm install
  ```
- **Pour le serveur** :
  ```bash
  cd ../server
  npm install
  ```
*(Assurez-vous d’avoir Node.js >= 14 ou 16 sur votre machine.)*

### 3. Lancer l’application

Il existe plusieurs manières de lancer le front et le back. La plus simple, en local, est de lancer chacun dans son propre terminal :

1. **Serveur (Express)**  
   ```bash
   cd server
   npm run dev
   ```
   Le serveur tournera par défaut sur [http://localhost:4000](http://localhost:4000).  
   Testez : [http://localhost:4000/api/test](http://localhost:4000/api/test) doit répondre `{ message: "Hello from Express!" }`.

2. **Client (React)**  
   ```bash
   cd client
   npm run dev
   ```
   L’interface web est disponible par défaut sur [http://localhost:5173](http://localhost:5173).

---

## Branches Git et workflow

Nous utilisons ce schéma de branches :

- **main** : la branche principale, contenant la version stable du projet / la correction / la version d'Alexis.
- **main/NOM**: chaque développeur aura sa branche main de production (ex. `main/alexis`, `main/ethan`, etc.).
- **dev/NOM** : chaque développeur aura sa branche de travail (ex. `dev/alexis`, `dev/ethan`, etc.).

### Workflow résumé

1. **Récupérer la dernière version de `main`** :
   ```bash
   git checkout main
   git pull origin main
   ```
2. **Basculer sur votre branche de dev** (ou la créer si c’est la première fois) :
   ```bash
   git checkout -b dev/alexis   # si elle n'existe pas encore
   # OU
   git checkout dev/alexis      # si elle existe déjà
   ```
3. **Réaliser l’exercice** (implémentation, tests, commits).
4. **Pousser vos modifications** sur `dev/alexis` :
   ```bash
   git add .
   git commit -m "Exo X - done"
   git push origin dev/alexis
   ```
5. **Créer une Pull Request** depuis `dev/alexis` **vers votre branche `main/alexis`**.  
6. **Le lead/mentor** révise la PR, la valide ou demande des corrections.  
7. **Une fois validée** : la PR est mergée dans votre branche `main/alexis`.  

---

## Comment réaliser un exercice et envoyer sa solution ?

Chaque jour, un nouvel exercice est publié via discord, dans le channel **[💪・exercices](https://discord.com/channels/1341055544999280710/1341055544999280713)**. Suivez les étapes :

1. **Lisez l’énoncé** de l’exercice du jour (20-30 minutes de travail).  
2. **Sur votre branche de dev** (ex. `dev/alexis`), implémentez les changements demandés :
   - Ajoutez/modifiez le code **front** dans `client/src` si besoin.
   - Ajoutez/modifiez le code **back** dans `server/` si besoin.  
3. **Vérifiez** que tout fonctionne en local : 
   - Lancez le serveur `server` via `npm run dev`.  
   - Lancez le front `client` via `npm run dev`.  
   - Testez le comportement demandé (affichage, CRUD, etc.).  
4. **Commitez et poussez** vos modifications : 
   ```bash
   git add .
   git commit -m "Exo X - Implementation"
   git push origin dev/alexis
   ```
5. **Ouvrez une PR** de `dev/alexis` vers `main/alexis`.  
   - Donnez un titre clair à votre PR, par ex. « [Exo X] Ajout de la barre de recherche ».  
   - Ajoutez un petit commentaire décrivant ce que vous avez fait.  
6. **Attendez la validation** du mentor/lead. Il peut laisser des commentaires sur votre code.  
7. **Faites les corrections** si demandées et repoussez.  
8. **Une fois validé**, le mentor/lead merge la PR et l’exercice est considéré comme terminé.

---

## À propos des exercices

Chaque exercice est pensé pour être court (20-30 minutes max), et s’inscrit dans la continuité du précédent.  
À la fin des 21 jours, vous devriez avoir :

- Un **listing** de restaurants et de plats (CRUD complet),
- Un système de **panier** (ajout, suppression, total),
- Un processus de **commande** (progress bar, confirmation),
- Un peu de **stockage local** (localStorage pour conserver la recherche, le panier, etc.),
- Des fonctionnalités bonus comme la **notation** (rating) ou une **connexion** simple.

Le but est de pratiquer régulièrement et d’acquérir les **fondamentaux** de **React**, **Express**, l’**intégration** (Tailwind, barre de recherche, forms), et la gestion du **versionning** (Git, PR).

---

**Bon courage et amusez-vous bien !**  

N’hésitez pas à poser vos questions, partager vos bloquages ou vos astuces sur le discord dans le canal dédié pour que tout le monde progresse ensemble.