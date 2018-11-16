
import { pokemons } from './pokemons.js'

const pokeyContainer = document.querySelector('#container');

    //function create card content
    const cardCreator = (pokey) => {   
    //appending flipCard
    let flipCard = document.createElement('div')
    flipCard.className = "flip-card"
    pokeyContainer.appendChild(flipCard)

    //appending flipCardInner
    let flipCardInner = document.createElement('div')
    flipCardInner.className = "flip-card-inner"
    flipCard.appendChild(flipCardInner)

    //appending flipCardFront
    let flipCardFront = document.createElement('div')
    flipCardFront.className = "flip-card-front"
    flipCardInner.appendChild(flipCardFront)

    
    let fig = document.createElement('figure')
    let img = document.createElement('img')
    let cap = document.createElement('figcaption')

    flipCardFront.appendChild(fig)
    fig.appendChild(img)
    fig.appendChild(cap)

    
    cap.textContent = pokey.ename
    img.src = pokey.src;
    
    //appending flipCardBack
    let flipCardBack= document.createElement('div')
    flipCardBack.className = "flip-card-back"
    flipCardInner.appendChild(flipCardBack)

    let stats = document.createElement('div')
    stats.className = "Stats"
    flipCardBack.appendChild(stats)
    
    let titleStats = document.createElement('h2')
    let descriptionStats = document.createElement('p')

    stats.appendChild(titleStats)
    stats.appendChild(descriptionStats)
    
    titleStats.textContent = `Stats of ${pokey.ename}`
    descriptionStats.textContent = `Attack: ${pokey.base.Attack}`  
    descriptionStats.innerHTML +=  `<br>Defense: ${pokey.base.Defense}`
    descriptionStats.innerHTML +=  `<br>HP: ${pokey.base.HP}`
    descriptionStats.innerHTML +=  `<br>Sp.Atk: ${pokey.base["Sp.Atk"]}`
    descriptionStats.innerHTML +=  `<br>Sp.Def: ${pokey.base["Sp.Def"]}`
    descriptionStats.innerHTML +=  `<br>Speed: ${pokey.base.Speed}`
    };

    
//calling the function above
pokemons.forEach(element => cardCreator(element))

//creating a new object
let newCard = 
{
"src" :"img/007Squirtle.png",
"ename": "d",
"base": {
    "Attack": "", 
    "Defense": "", 
    "HP": "45", 
    "Sp.Atk": "65", 
    "Sp.Def": "65", 
    "Speed": "45"
    }
};

//creating Cards 
$('#Form').submit(function () {

    newCard.src = document.getElementById("Image").value;            
    newCard.ename = document.getElementById("Name").value;
    newCard.base.Attack = document.getElementById("Attack").value;
    newCard.base.Defense = document.getElementById("Defense").value;
    newCard.base.HP = document.getElementById("HP").value;
    newCard.base["Sp.Atk"] = document.getElementById("SpAttack").value;
    newCard.base["Sp.Def"] = document.getElementById("SpDefense").value;
    newCard.base["Speed"] = document.getElementById("Speed").value;

    // let sourceImage =  document.getElementById("Image").value;
    // img.src = sourceImage;
    cardCreator(newCard);
    return false;
});

