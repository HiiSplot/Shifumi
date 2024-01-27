const array = [1, 2, 3];
const pierre = document.getElementById('choix1');
const feuille = document.getElementById('choix2');
const ciseaux = document.getElementById('choix3');
const buttons = document.querySelectorAll('button');
const p = document.getElementById('button1');
const f = document.getElementById('button2');
const c = document.getElementById('button3');
const egalite = document.getElementById('egalite');
const perdu = document.getElementById('perdu');
const gagne = document.getElementById('gagne');
const jeuPerdu = document.getElementById('jeu-perdu');
const jeuGagne = document.getElementById('jeu-gagne');
const cpt1 = document.getElementById('compteurOrdi');
const cpt2 = document.getElementById('compteurJoueur');
const retry = document.getElementById('retry');
const retryLost = document.getElementById('retryLost');
const block = document.querySelector('.block')

let randomNumber;
let compteurOrdi = 0;
let compteurJoueur = 0;

console.log(retry);


function afficherChoix() {
    let randomNumber = Math.floor(Math.random() * 3); 

    pierre.style.visibility = 'hidden';
    pierre.style.display = 'none';
    feuille.style.visibility = 'hidden';
    feuille.style.display = 'none';
    ciseaux.style.visibility = 'hidden';
    ciseaux.style.display = 'none';

    switch(array[randomNumber]) {
        case 1 : pierre.style.visibility = 'visible';
                 pierre.style.display = 'block';
        break;

        case 2 : feuille.style.visibility = 'visible';
                 feuille.style.display = 'block';
        break;

        case 3 : ciseaux.style.visibility = 'visible';
                 ciseaux.style.display = 'block';
        break;
    }


    return randomNumber
}



buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        block.style.height = '80%';
        let randomNumber = afficherChoix();
        const compteurs = quiRemporteLePoint(randomNumber, e.target.id);
        console.log(e.target);
        const cptOrdi = compteurs.compteurOrdi;
        const cptJoueur = compteurs.compteurJoueur;
        finDePartie(e.target.id, cptJoueur, cptOrdi);
    });
    
});

retry.addEventListener('click', () => {
    location.reload();
})

retryLost.addEventListener('click', () => {
    location.reload();
})


function quiRemporteLePoint(randomNumber, e) {

    egalite.style.visibility = 'hidden';
    egalite.style.display = 'none';
    gagne.style.visibility = 'hidden';
    gagne.style.display = 'none';
    perdu.style.visibility = 'hidden';
    perdu.style.display = 'none';

    if(randomNumber === 0 && e == 'button1') {
        egalite.style.visibility = "visible";
        egalite.style.display = 'block';
    }

    if(randomNumber === 0 && e == 'button2') {
        compteurJoueur = compteurJoueur + 1;
        gagne.style.visibility = "visible";
        gagne.style.display = 'block';
    }

    if(randomNumber === 0 && e == 'button3') {
        compteurOrdi = compteurOrdi + 1;
        perdu.style.visibility = "visible";
        perdu.style.display = 'block';
    }

    if(randomNumber === 1 && e == 'button1') {
        compteurOrdi = compteurOrdi + 1;
        perdu.style.visibility = "visible";
        perdu.style.display = 'block';
        
    }

    if(randomNumber === 1 && e == 'button2') {
        egalite.style.visibility = "visible";
        egalite.style.display = 'block';
    }

    if(randomNumber === 1 && e == 'button3') {
        compteurJoueur = compteurJoueur + 1;
        gagne.style.visibility = "visible";
        gagne.style.display = 'block';
    }

    if(randomNumber === 2 && e == 'button1') {
        compteurJoueur = compteurJoueur + 1;
        gagne.style.visibility = "visible";
        gagne.style.display = 'block';
    }

    if(randomNumber === 2 && e == 'button2') {
        compteurOrdi = compteurOrdi + 1;
        perdu.style.visibility = "visible";
        perdu.style.display = 'block';
    }

    if(randomNumber === 2 && e == 'button3') {
        egalite.style.visibility = "visible";
        egalite.style.display = 'block';
    }

    cpt1.innerText = compteurOrdi;
    cpt2.innerHTML = compteurJoueur;

    return {compteurJoueur, compteurOrdi};

}



function finDePartie(e) {

    jeuPerdu.style.visibility = 'hidden';
    jeuPerdu.style.display = 'none';
    jeuGagne.style.visibility = 'hidden';
    jeuGagne.style.display = 'none';

    if (compteurJoueur === 3) {
        jeuGagne.style.visibility = 'visible';
        jeuGagne.style.display = 'block';
    } 

    if (compteurOrdi === 3) {
        jeuPerdu.style.visibility = 'visible';
        jeuPerdu.style.display = 'block';
    }

}



