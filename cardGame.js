document.addEventListener('DOMContentLoaded', createCard);

const cardObjectDefinitions = [
    {id:1, imgPath: '/images/front-card-1-zucchini-flower-flip-horizontal.png'},
    {id:2, imgPath: '/images/front-card-2-petits-farcis.png'},
    {id:3, imgPath: '/images/front-card-3-socca.png'},
    {id:4, imgPath: '/images/front-card-4-pan-bagnat.png'},
    {id:5, imgPath: '/images/front-card-5-joker.png'},
    {id:6, imgPath: '/images/front-card-6-pissaladiere.png'},
];
let cards = [];

const backCardSrc = '/images/card-back-hunt-the-socca.png';
const cardContainerElem = document.querySelector('.card-container');

const playGameButtonElem = document.querySelector('#playGame'); 

loadGame();
function loadGame(){
    createCard();

    cards = document.querySelectorAll('card');
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
};

function initializeNewRound(){

};

function createCard(){
    cardObjectDefinitions.forEach((cardItem)=>{
        //console.log(cardItem);
        createSingleCard(cardItem);
    });
};

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
}
function addChildElement(cardContainerElem, cardItem){
    cardContainerElem.appendChild(cardItem);
}
function addCardToGridCell(cardElem){
    const cardPositionClassName = mapCardIdToGridcell(cardElem);
    //console.log(cardPositionClassName);
    const cardPosElem = document.querySelector(cardPositionClassName);

    //console.log(cardPosElem);

    addChildElement(cardContainerElem, cardElem);

};
function mapCardIdToGridcell(cardItem){
    console.log(cardItem);

    if(parseInt(cardItem.id) === 1){
        console.log("card 1 found");
        return '.card-pos-a'
    }
    else if(parseInt(cardItem.id) === 2){
        return '.card-pos-b'
    }
    else if(parseInt(cardItem.id) ===3){
        return '.card-pos-c'
    }
    else if(parseInt(cardItem.id) === 4){
        return '.card-pos-d'
    }
    else if(parseInt(cardItem.id) === 5){
        return '.card-pos-e'
    }
    else if(parseInt(cardItem.id) === 6){
        return '.card-pos-f'
    }
};