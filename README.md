# ArgentBank - Application Web d'Authentification Utilisateur

## Description

Ce projet est une application web développée avec React, dédiée à la gestion du système d'authentification des utilisateurs pour ArgentBank. Il permet aux utilisateurs de se connecter, de se déconnecter et de gérer leur profil. L'application est conçue pour être responsive et optimisée pour les meilleures pratiques de Green Code.

## Table des matières

- [Fonctionnalités](#fonctionnalités)
- [Technologies Utilisées](#technologies-utilisées)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Contribuer](#contribuer)
- [Documentation API](#documentation-api)

## Fonctionnalités

- **Page d'accueil** : Les utilisateurs peuvent visiter la page d'accueil de l'application.
- **Connexion** : Les utilisateurs peuvent se connecter au système avec gestion des erreurs (nom d'utilisateur ou mot de passe incorrects).
- **Déconnexion** : Les utilisateurs peuvent se déconnecter de leur compte.
- **Profil utilisateur** : Les utilisateurs peuvent visualiser les informations de leur profil après une connexion réussie.
- **Gestion du profil** : Les utilisateurs peuvent modifier leur pseudo, mais pas leur nom ni leur prénom.
- **Gestion d'état avec Redux** : Utilisation de Redux pour gérer l'état de l'application, anticipant les futurs besoins en gestion de données.

## Technologies Utilisées

- **Front-end** : React
- **State Management** : Redux
- **Back-end** : Routes API fournies par l'équipe back-end d'ArgentBank
- **Optimisation** : Meilleures pratiques de Green Code (optimisation des images, création de composants réutilisables)

## Installation

1. **Cloner le dépôt** :

   ```bash
   git clone https://github.com/ArgentBank/authentication-app.git
   cd authentication-app
