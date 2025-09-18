---
sidebar_position: 1
---

# Saisir les produits

Cette étape permet d’ajouter les produits délivrés (code, quantité, prix). Le total dû se met à jour automatiquement.

---

## Identifier les produits

1. Dans la **tuile de saisie des produits**, placez le curseur dans le champ de saisie.
    
2. Ajoutez le produit :
    
    - **Par lecture** : scannez le code-barres/Datamatrix (la quantité s’incrémente si vous rescannez).
        
    - **Par saisie** : tapez le **CIP13/CIP7/EAN** ou le **libellé** puis _Entrée_.
        
    - **Par recherche** :
        
        - Dénomination commune : activez **dénomination commune (+)**, saisissez (ex. `paracetamol 500`).
            
        - Substitution : activez **substitution ($)** puis saisissez le code/libellé.
            
        - Équivalence : activez **equivalence (/)** puis saisissez le code/libellé.
            
        - Boutons utiles : **tous les produits**, **produits en stock**, **CRÉER PRODUIT**.
            

> Astuces d’affichage
> 
> - Sérialisation : pictogramme devant le code produit.
>     
> - **DAD** : pictogramme après le code (dispensation adaptée).
>     
> - Libellé **bleu** : première délivrance depuis _x_ mois.
>     
> - Libellé **orange** : chevauchement (voir **Gérer les alertes**).
>     
> - Libellé **barré** : fabrication supprimée (proposition de remplacement possible).

---
## Ajuster la quantité

1. Par défaut : **1**. Modifiez la colonne **Quantité/Stock** ou rescanner pour incrémenter.
    
2. Déterminer via **posologie** : tapez `=` puis _Entrée_ (ou **autres... > posologie**).

---
## Gérer les cas particuliers

- **Renouvellement** : si même date/prescripteur que l’historique, la liste _Renouvellement_ s’affiche.
    
- **Avances produits** : la liste _AVANCES_ s’affiche pour régularisation (si paramétrée).
    
- **Prestations en préparation** : la liste apparaît si activée.
    
- **Produit remplacé** : message de remplacement → **OUI** pour substituer automatiquement.
    
- **Produit en préparation** : accès au **compte client** pour ajouter/facturer la préparation.
    
- **PH2/PM2 en AME (majeur)** : alerte bloquante → retirer le produit et basculer en vente directe ou hors TP/hors télétransmission.
    
- **Produit sans CIP (Frais PH)** : délivrance sur ordonnance impossible → la ligne est annulée.