## Les taches non finis


### ` 7. désactivation du taux réel lors d'une variation de 2%`

- pour se faire il fautt rajouter un trigger (useffect ) écoutant sur une variable  de la variation par rapport au taux réel (random) et faire un switch si sa dépasse les 2%

### ` 8. tableau d'historique`


-  rajoutant un usereducer avec l'action "addHistory" avec un  type History (vous le trouverez dans types.ts) a chaque onChange des inputs eur/usd 

-  pour l'UI j'utilise le Datatable d MUI .


PS: j'ai mis le champ de sortie en readonly .


