# 04 – Interfaces frontend

Cette application de gestion des congés permet aux utilisateurs de voir leurs congés, de poser des demandes de congés et de consulter un calendrier des congés.
Cette application a été faite uniquement en React et Tailwind, quelques features ne sont pas focntionnelles.

## Fonctionnalités

- Liste des congés avec leur état
- Compteur de congés (jours posés et jours restants)
- Formulaire de demande de congé
- Calendrier interactif des congés

## Prérequis

- Node.js v20.9.0 ou supérieur
- npm (inclus avec Node.js)

## Installation

1. Clonez le dépôt sur votre machine locale :

```bash
git clone https://github.com/votre-utilisateur/conge-app.git
```

2. Accédez au répertoire du projet
```bash
cd conge-app
```

3. Installez les dépendances
```bash
npm install
```
4. Lancer l'application
```bash
npm start
```
Cela lancera l'application et l'ouvrira dans votre navigateur par défaut à l'adresse http://localhost:3000.

## Scripts Disponibles
- npm start : Démarre l'application en mode développement.
- npm run build : Construit l'application pour la production dans le dossier build.
- npm test : Lance les tests.
- npm run eject : Éjecte la configuration de Create React App. Attention : cette action est irréversible.

## Utilisation des Composants
## Header
Le composant `Header` affiche le logo du site, le nom du site, l'avatar de l'utilisateur et un bouton de déconnexion.

## Compteur
Le composant `Count` affiche le nombre de jours de congé posés et le nombre de jours restants.

## Liste des Congés
Le composant `List` affiche la liste des congés avec leur état (approuvé, en attente, refusé).

## Formulaire de Demande de Congé
Le composant `Form` permet aux utilisateurs de poser une demande de congé en sélectionnant une date de début et une date de fin.

## Calendrier
Le composant `Calendar` affiche un calendrier interactif où les jours de congé posés sont mis en évidence.

## Auteur
- RAZAKANDRAINA Mahery

# conge-app
