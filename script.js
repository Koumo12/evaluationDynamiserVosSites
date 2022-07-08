'use strict'

// Récupérer le bouton
const btn_player = [...document.getElementsByClassName('btn-player')];
const roll= document.getElementById('roll-dice');
const buttonHold = document.getElementById('hold');
const game = document.getElementById('new_game');
const dice_area = document.getElementsByClassName('dice-area');
let focus1 = document.getElementById('focus1');
const score1 = document.getElementById('score1');
const scoreGlobal1 = document.getElementById('scoreGlobal1');
let focus2 = document.getElementById('focus2');
const scoreGlobal2 = document.getElementById('scoreGlobal2');
const score2 = document.getElementById('score2');


// initialiser les globals rounds á zéro
setTimeout("localStorage.score1.clear()"); 
setTimeout("localStorage.score4.clear()"); 

if (setTimeout("localStorage.score1.clear()"))
{
    scoreGlobal1.innerHTML =  localStorage.score1 = 0;
}

if (setTimeout("localStorage.score4.clear()"))
{
    scoreGlobal2.innerHTML = localStorage.score4 = 0;
}

// calcul du nombre aléatoire
const roll_dice = function() 
{
    // Générer un nombre entre 1 et 6
    const nbreDecimal = (Math.random() * 6) + 1;
    const nbre = Math.trunc(nbreDecimal);

    // Retourne ce nombre
    return nbre;
}

// Jouer un partie en cliquant sur la touche Roll Dice
const jouerManche = function() 
{
    // Lancer le dé virtuel et récupérer le résultat
    const resultats = roll_dice();


    // jouer la bande de video
    const audio = new Audio('images/sonDe.mp3');

    // Quand la bande est chargé, lancer le son 
    audio.addEventListener("canplaythrough", function() 
    {
        audio.play();
    });

    // Quand la bande son est finie, afficher l´image

    audio.addEventListener('ended', function() 
    {
        // Récuépérer l´image
        const image = document.getElementById('img-dice');
        // Ajouter l´attribut
        image.src = 'images/dice-'+ resultats + '.png';

        // If - else: pour passer le jeux á l´autre joueur
        if(((parseInt(localStorage.score1) === 0) && (parseInt(localStorage.score4) === 0)) || ((parseInt(localStorage.score1) != 0) && (parseInt(localStorage.score4) != 0) && (parseInt(localStorage.score) === 0) && (parseInt(localStorage.score3) === 0)&& (focus2.style.visibility === 'visible')) || ((parseInt(localStorage.score1) != 0) && (parseInt(localStorage.score4) != 0) && (parseInt(localStorage.score) != 0) && (parseInt(localStorage.score3) === 0)&& (focus1.style.visibility === 'visible')))
        {
            focus1.style.visibility = 'visible';
            focus2.style.visibility = 'hidden'; 
    
            // Additionner le resultat du nombres aléatoire du joueur 1    
            if(localStorage.score)
            {
                localStorage.score = Number(localStorage.score) + resultats;
            } else{
                localStorage.score = 0;
            }
    
            score1.textContent = localStorage.score;  
    
        } else if (((parseInt(localStorage.score1) != 0) && (parseInt(localStorage.score4) === 0) && (parseInt(localStorage.score) === 0) && (parseInt(localStorage.score3) === 0)&& (focus1.style.visibility === 'visible')) || ((parseInt(localStorage.score1) != 0) && (parseInt(localStorage.score4) === 0) && (parseInt(localStorage.score) === 0) && (parseInt(localStorage.score3) != 0)&& (focus2.style.visibility === 'visible')) || ((parseInt(localStorage.score1) != 0) && (parseInt(localStorage.score4) != 0) && (parseInt(localStorage.score) === 0) && (parseInt(localStorage.score3) === 0)&& (focus1.style.visibility === 'visible')) || ((parseInt(localStorage.score1) != 0) && (parseInt(localStorage.score4) != 0) && (parseInt(localStorage.score) === 0) && (parseInt(localStorage.score3) != 0)&& (focus2.style.visibility === 'visible')))
        {
            // Aficher le focus
            focus1.style.visibility = 'hidden';
            focus2.style.visibility = 'visible'; 
    
            // Additionner le resultat du nombres aléatoire du joueur 2
            if(localStorage.score3)
            {
                localStorage.score3 = Number(localStorage.score3) + resultats;
            } else{
                localStorage.score3 = 0;
            }
            
            score2.textContent = localStorage.score3;            
        }   
        
        // Afficher le gagnant
        if(parseInt(scoreGlobal1.innerHTML) >= 100)
        {
            alert('Player 1 win the game!');
            new_game ();
        } else if(parseInt(scoreGlobal2.innerHTML) >= 100)
        {
            alert('Player 2 win the game!');
            new_game ();
        }
       
    });
}

// Arrêtez la partie et passez le tour á l´autre joueur.

const hold = function ()
{ 
    // Ajouter le score round au score global     
    if (localStorage.score1)
    {
        localStorage.score1 = Number(localStorage.score1)  + parseInt(score1.innerHTML);
    } else
    {
        localStorage.score1 = 0;
    }
                 
    // Afficher le Global round    
    scoreGlobal1.textContent = localStorage.score1;
    
    // Initialiser le score round á zéro

    setTimeout("localStorage.score.clear()"); 

    if (setTimeout("localStorage.score.clear()"))
    {
        score1.innerHTML = localStorage.score = 0;
    }   
    
    
    // Ajouter le score round au score global  
    if (localStorage.score4)
    {
        localStorage.score4 = Number(localStorage.score4)  + parseInt(score2.innerHTML);
    } else
    {
        localStorage.score4 = 0;
    }
                    
    // Afficher le Global round
    scoreGlobal2.textContent = localStorage.score4;

    // Initialiser le score round á zéro
    setTimeout("localStorage.score3.clear()"); 

    if (setTimeout("localStorage.score3.clear()"))
    {
        score2.innerHTML = localStorage.score3 = 0;
    }     
    
}


// Reset game
const new_game = function ()
{
    setTimeout("localStorage.score1.clear() && localStorage.score4.clear()"); 
    setTimeout("localStorage.score.clear() && localStorage.score3.clear()");

    if (setTimeout("localStorage.score1.clear() && localStorage.score4.clear()"))
    {
        scoreGlobal1.innerHTML = localStorage.score1 = 0;
        scoreGlobal2.innerHTML = localStorage.score4 = 0;
        score1.innerHTML = localStorage.score = 0;
        score2.innerHTML = localStorage.score3 = 0;
    }    
}

// Récupérer le bouton
game.addEventListener('click', new_game);
roll.addEventListener('click', jouerManche);
buttonHold.addEventListener('click',hold);
