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
    const resultat = roll_dice();

     

    // jouer la bande de video
    const audio = new Audio('images/sonDe.mp3');

    // Quand la bande est chargé, lancer le son 
    audio.addEventListener("canplaythrough", function() 
    {
        audio.play();
    });

    // Quand la bande son est finie, afficher l´image

    audio.addEventListener('ended', function() {
        const dice_area = document.getElementsByClassName('dice-area');
        // Récuépérer l´image
        const image = document.getElementById('img-dice');
        // Ajouter l´attribut
        image.src = 'images/dice-'+ resultat + '.png';
    
       const score1 = document.getElementById('score1');
       score1.textContent = resultat;
       
    });
}

// Récupérer le bouton
const roll= document.getElementById('roll-dice');

roll.addEventListener('click', clickSurBouton);

