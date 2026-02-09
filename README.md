# Serensia

Ce projet a été généré avec [Angular CLI](https://github.com/angular/angular-cli) version **11.0.2**.

## Description du sujet

L’objectif est d’implémenter une interface permettant de :

- saisir un **terme de recherche**,
- fournir une **liste de mots** (alphanumériques, en minuscules),
- définir un **nombre entier N**,
![Description de l’image](assets/demo.png)

afin de retourner une liste de **N suggestions** les plus proches du terme recherché.

### Règles de similarité

La similarité entre deux mots est déterminée par le **nombre de lettres à remplacer** pour transformer un mot en le terme recherché :

- Aucune insertion ni suppression de lettres n’est autorisée.
- Moins il y a de remplacements à effectuer, plus le mot est considéré comme similaire.

### Règles de tri

- Les mots sont d’abord triés par **nombre croissant de différences**.
- En cas d’égalité :
  1. Les mots dont la **longueur est la plus proche** de celle du terme recherché sont prioritaires.
  2. En dernier recours, un **tri alphabétique** est appliqué.

### Exemple

Pour une recherche de **2 suggestions** à partir du terme **`gros`** dans la liste suivante :

```
[gros, gras, graisse, agressif, go, ros, gro]
```

Résultat attendu :

- `gros` → 0 différence  
- `gras` → 1 différence  

Détails d’évaluation :

- `graisse` → 2 différences  
- `agressif` → 1 différence mais longueur moins proche  
- `go`, `ros`, `gro` → non similaires (longueur insuffisante)

## Description du code

### Interface

Le front-end permet de saisir :

- le terme recherché,
- la liste des mots (séparés par des virgules),
- le nombre de suggestions souhaitées,

ainsi qu’un bouton pour lancer le traitement.

### Variables principales

- `term: string` — terme de recherche  
- `rawChoices: string` — liste brute des mots  
- `numberOfSuggestions: number` — nombre de suggestions à retourner  

### Fonctions principales

- **`getDifferenceScore`**  
  Calcule le score de différence entre deux mots.

- **`getSuggestions`**  
  Ordonne les mots en fonction de leur score de similarité, en s’appuyant sur `getDifferenceScore`, puis applique les règles de tri définies.
