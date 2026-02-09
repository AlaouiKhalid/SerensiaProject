# Serensia

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

## Description du code 
Implémenter l'interface avec un algorithme qui prend un terme et retourne parmi une liste de termes en minuscule, alphanumérique, ceux qui contiennent le terme ou un terme le plus approchant de celui entré. 
On retourne N suggestions (s'il y a égalité dans le nombre de différences, prendre les termes les plus proche en longueur du terme recherché, puis triés par ordre alphabétique). 
La similarité est déterminée par le nombre de lettre à remplacer (on ne cherchera pas en insérant des lettres) pour retrouver le terme, moins il y a de changements a faire, plus le mot est "contenu". 
Exemple : si on cherche 2 termes approchant de 'gros' dans la liste [gros, gras, graisse, agressif, go, ros, gro] on aura: 

gros= 0 différence 

gras= 1 différence 

graisse= 2 différences 

agressif= 1 différence  

go = pas du tout similaire (pas assez de lettres) 

ros = pas du tout similaire (pas assez de lettres) 

gro = pas du tout similaire (pas assez de lettres) 
