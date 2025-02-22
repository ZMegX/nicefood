document.addEventListener("DOMContentLoaded", createCard);

const cardObjectDefinitions = [
    {id:1, imgPath: "/images/front-card-1-zucchini-flower-flip-horizontal.png"},
    {id:2, imgPath: "/images/front-card-2-petits-farcis.png"},
    {id:3, imgPath: "/images/front-card-3-socca.png"},
    {id:4, imgPath: "/images/front-card-4-pan-bagnat.png"},
    {id:5, imgPath: "/images/front-card-5-joker.png"},
    {id:6, imgPath: "/images/front-card-6-pissaladiere.png"},
];

let cards = [];

const backCardSrc = "/images/card-back-hunt-the-socca.png";
const cardContainerElem = document.querySelector(".card-container");

const playGameButtonElem = document.querySelector("#playGame"); 

const collapsedGridAreaTemplate = '"a a" "a a"';
const cardCollectionCellClass = ".card-pos-a";

const numCards = cardObjectDefinitions.length;

let cardPositions = [];

loadGame();
function loadGame(){
    createCard();
    cards = document.querySelectorAll(".card");
    playGameButtonElem.addEventListener("click", () => {
        startGame();

    });
};

function startGame(){
    initializeNewGame();
    startRound();
};

function initializeNewGame(){

};

function startRound(){
    initializeNewRound();
    collectCards();
    //flipCards(true);
    shuffleCards();
};

function initializeNewRound(){

};

function collectCards(){
    transformGridArea(cardContainerElem);
    addCardsToGridAreaCell(cardCollectionCellClass);
};

function transformGridArea(areas){
    cardContainerElem.style.gridTemplateAreas = areas;
};

function addCardsToGridAreaCell(cellPositionClassName){
    const cardContainerElem = document.querySelector(cellPositionClassName);

    cards.forEach((card, index) => {
        addChildElement(cardContainerElem, card)
    });
};



function createCard(){
    cardObjectDefinitions.forEach((cardItem)=>{
        console.log(cardItem);
        createSingleCard(cardItem);
    });
};

function flipCard(cardItem, flipToBack){

    const cardInner = cardItem.querySelector(".card-inner");

    if(flipToBack && !cardInner.classList.contains('flip-it')){
        cardInner.classList.add('flip-it')
    }else if(cardInner.classList.contains('flip-it')){
        cardInner.classList.remove('flip-it')
    };

};

function flipCards(flipToBack){
    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index)=>{
        setTimeout(() => {
            flipCard(card, flipToBack)
        },index * 100)
    })
};

function shuffleCards(){
    const id = setInterval(shuffle, 12);
    let shuffleCount = 0;

    function shuffle(){
        randomizeCardPositions();

        if(shuffleCount == 500){
            clearInterval(id)
            dealCards()
        }else{
            shuffleCount ++;
        }
    }
}
function randomizeCardPositions(){
    const random1 = Math.floor(Math.random() * numCards) + 1 ;
    const random2 = Math.floor(Math.random() * numCards) + 1 ;

    const temp = cardPositions[random1 - 1];

    cardPositions[random1 - 1] = cardPositions[random2 - 1];
    cardPositions[random2 - 1] = temp;
}
function dealCards(){
    addCardsToAppropriateCell();
    const areasTemplate = returnGridAreasMappedToCardPos();

    transformGridArea(areasTemplate);
};
function returnGridAreasMappedToCardPos() {
    const cards = document.querySelectorAll(".card");

    let areas = [];

    cards.forEach((cardItem, index) => {
        let pos = " ";

        if (cardPositions[index] == 1){
            pos === "a";
        } ;
        
       // else if (cardPositions[index] === 2) areaChar = "b";
        //else if (cardPositions[index] === 3) areaChar = "c";
        //else if (cardPositions[index] === 4) areaChar = "d";
        //else if (cardPositions[index] === 5) areaChar = "e";
        //else if (cardPositions[index] === 6) areaChar = "f";

        // Assign the class to the card element
        cardItem.classList.replace("card", `card-pos-${pos}`);

        // Push to the areas array
        areas.push(`.card-pos-${pos}`);
    });

    return areas.join("");
}

function addCardsToAppropriateCell(){
    cards.forEach((card) =>{
        addCardToGridCell(card)
    })
}

function createSingleCard(cardItem){
    //create card div 
    const cardElem = document.createElement('div');
    const cardInner = document.createElement('div');
    const cardFront = document.createElement('div');
    const cardBack = document.createElement('div');
    const cardFrontImg = document.createElement('img');     //create front img element
    const cardBackImg = document.createElement('img');      //create back img element

    addClassToElement(cardElem, 'card');     //add class
    addIdToElement(cardElem, cardItem.id);          //add id to card element
    addClassToElement(cardInner, 'card-inner');    //add class to inner card element
    addClassToElement(cardFront, 'card-front');    //add class to front card element

    addClassToElement(cardBack, 'card-back');       //add class to back card element
    addSrcToImageElem(cardBackImg, backCardSrc);    //add src and attribut to img element - back card
    addSrcToImageElem(cardFrontImg, cardItem.imgPath); //add src and attribut to img element - front card
    addClassToElement(cardBackImg, 'card-back-img');    //assign class to back image of back card
    addClassToElement(cardFrontImg, 'front-card-img');  //assign class to front image of front card
    addChildElement(cardBack, cardBackImg);             //add back image element as child element to back card element
    addChildElement(cardFront, cardFrontImg);           //add back image element as child element to front card element
    addChildElement(cardInner, cardFront);              //add front card element as child element to inner card element
    addChildElement(cardInner, cardBack);               //add back card element as child element to inner card element
    addChildElement(cardElem, cardInner);               //add inner card element as child element to a card element
    addCardToGridCell(cardElem);                        //add card element as child element to appropriate grid cell

    //append to container
    cardContainerElem.appendChild(cardElem);

    initializeCardPositions(cardContainerElem);


};
function initializeCardPositions(cardItem) {
    cardPositions.push(cardItem.id)

};
function createElement(elemType){
    return document.createElement(elemType);

};
function addClassToElement(cardContainerElem, className){
    cardContainerElem.classList.add(className);
};
function addIdToElement(cardItem, id){
    cardItem.setAttribute("id", id);
};
function addSrcToImageElem(imgElem, src){
    imgElem.src = src;
};
function addChildElement(cardContainerElem, cardItem){
    cardContainerElem.appendChild(cardItem);
};
function addCardToGridCell(cardElem){
    const cardPositionClassName = mapCardIdToGridcell(cardElem);
    const cardPosElem = document.querySelector(cardPositionClassName);

    //console.log(cardPosElem);

    addChildElement(cardContainerElem, cardElem);

};
function mapCardIdToGridcell(cardItem){
    console.log(cardItem);

    const cardId = parseInt(cardItem.id);

    if((cardId.id) === 1){
        //console.log("card 1 found");
        return '.card-pos-a'
    }
    else if(cardId.id === 2){
        return '.card-pos-b'
    }
    else if((cardId.id) ===3){
        return '.card-pos-c'
    }
    else if((cardId.id) === 4){
        return '.card-pos-d'
    }
    else if((cardId.id) === 5){
        return '.card-pos-e'
    }
    else if((cardId.id) === 6){
        return '.card-pos-f'
    }
};