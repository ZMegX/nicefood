
const cardObjectDefinitions = [
    {id:1, imgPath: '/images/front-card-1-zucchini-flower'},
    {id:2, imgPath: '/images/front-card-2-petits-farcis'},
    {id:3, imgPath: '/images/front-card-3-socca'},
    {id:4, imgPath: '/images/front-card-4-pan-bagnat'},
    {id:5, imgPath: '/images/front-card-5-joker'},
    {id:6, imgPath: '/images/front-card-6-pissaladiere'},
];

const backCardSrc = '/images/card-back-hunt-the-socca.png';

const cardContainerElem = document.querySelector('.card-container');

/* <div class="card-container">
<div class="card">
    <div class="card-inner">
        <div class="card-front">
            <img src="./images/front-card-1-zucchini-flower-flip-horizontal.png" alt="" class="front-card-img">
        </div>
        <div class="card-back">
            <img src="./images/card-back-hunt-the-socca.png" alt="" class="card-back-img">
        </div>
    </div>
</div>
</div> */

createCards();

function createCards(){
    cardObjectDefinitions.forEach((cardItem)=>{createCard(cardItem)});
}

function createCard(cardItem){
    //create card div 
    const cardElem = createElement('div');
    const cardInner = createElement('div');
    const cardFront = createElement('div');
    const cardBack = createElement('div');

    //create front and back img element
    const cardFrontImg = createElement('img');
    const cardBacktImg = createElement('img');

    //add class and id to card element
    addClassToElement(cardElem, 'card');
    addIdToElement(cardElem, cardItem.id);

    //add class to inner card element
    addClassToElement(cardInnerElem, 'card-inner');

    //add class to front card element
    addClassToElement(cardFrontElem, 'card-front');

    //add class to back card element
    addClassToElement(cardBackElem, 'card-back');

    //add src and attribut to img element - back card
    addSrcToImageElem(cardBackElem, backCardSrc);

    //add src and attribut to img element - front card
    addSrcToImageElem(cardFrontElem, cardItem.imagePath);

    //assign class to back image of back card
    addClassToElement(cardBackElem, 'card-back-img');

    //assign class to front image of front card
    addClassToElement(cardFrontElem, 'front-card-img');

    //add back image element as child element to back card element
    addChildElement(cardBacktElem, cardBackImg);

    //add back image element as child element to front card element
    addChildElement(cardFrontElem, cardFrontImg);

    //add front card element as child element to inner card element
    addChildElement(cardInnerElem, cardFrontElem);

    //add back card element as child element to inner card element
    addChildElement(cardInnerElem, cardBackElem);

    //add inner card element as child element to a card element
    addChildElement(cardElem, cardInnerElem);

    //add card element as child element to appropriate grid cell
    addCardToGridCell(card);


};
function createElement(elemType){
    return document.createElement(elemType);

};
function addClassToElement(elem, className){
    elem.classList.add(className);
};
function addIdToElement(elem, id){
    elem.id = id;
}
function addSrcToImageElem(imgElem, src){
    imgElem.src = src;
}
function addChildElement(parentElem, childElem){
    parentElem.appendChild(childElem);
}
function addCardToGridCell(card){
    const cardPositionClassName = mapCardIdToGridcell(card);
    const cardPosElem = document.querySelector(cardPositionClassName);

    addChildElement(cardPosElem, card);

};
function mapCardIdToGridcell(card){
    if(card.id == 1){
        return '.card-pos-a'
    }
    else if(card.id == 2){
        return '.card-pos-b' //defined in CSS later
    }
    else if(card.id ==3){
        return '.card-pos-c'
    }
    else if(card.id == 4){
        return '.card-pos-d'
    }
    else if(card.id == 5){
        return '.card-pos-e'
    }
    else if(card.id == 6){
        return '.card-pos-f'
    }
}