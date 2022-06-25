'use strict'

const roll_dice = function() 
{
    // Générer un nombre entre 1 et 6
    const nbreDecimal = (Math.random() * 6) + 1;
    const nbre = Math.trunc(nbreDecimal);

    // Retourne ce nombre
    return nbre;
}

const clickSurBouton = function() 
{
    // Lancer le dé virtuel et récupérer le résultat
    const résultat = roll_dice();

    const dice_area = document.getElementsByClassName('dice-area');
     // Récuépérer l´image
     const image = document.getElementById('img-dice');
     // Ajouter l´attribut
     image.src = 'images/dice-'+ résultat + '.png';
}

// Récupérer le bouton
const roll= document.getElementById('roll-dice');

roll.addEventListener('click', clickSurBouton);

