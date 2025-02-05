document.addEventListener('DOMContentLoaded', createCard);
const cardObjectDefinitions = [
    {id:1, imgPath: './images/front-card-1-zucchini-flower-flip-horizontal.png'},
    {id:2, imgPath: '/images/front-card-2-petits-farcis.png'},
    {id:3, imgPath: '/images/front-card-3-socca.png'},
    {id:4, imgPath: '/images/front-card-4-pan-bagnat.png'},
    {id:5, imgPath: '/images/front-card-5-joker.png'},
    {id:6, imgPath: '/images/front-card-6-pissaladiere.png'},
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

createCard();
function createCard(){
    cardObjectDefinitions.forEach((cardItem)=>{createSingleCard(cardItem)});
};

function createSingleCard(cardItem){
    //create card div 
    const cardElem = document.createElement('div');
    const cardInner = document.createElement('div');
    const cardFront = document.createElement('div');
    const cardBack = document.createElement('div');
    const cardFrontImg = document.createElement('img');     //create front img element
    const cardBackImg = document.createElement('img');      //create back img element

    addClassToElement(cardElem, 'card');     //add class and id to card element
    addIdToElement(cardElem, cardItem.id);          //add id to card element
    addClassToElement(cardInner, 'card-inner');    //add class to inner card element
    addClassToElement(cardFront, 'card-front');    //add class to front card element

    //add class to back card element
    addClassToElement(cardBack, 'card-back');

    //add src and attribut to img element - back card
    addSrcToImageElem(cardBackImg, backCardSrc);

    //add src and attribut to img element - front card
    addSrcToImageElem(cardFrontImg, cardItem.imgPath);

    //assign class to back image of back card
    addClassToElement(cardBackImg, 'card-back-img');

    //assign class to front image of front card
    addClassToElement(cardFrontImg, 'front-card-img');

    //add back image element as child element to back card element
    addChildElement(cardBack, cardBackImg);

    //add back image element as child element to front card element
    addChildElement(cardFront, cardFrontImg);

    //add front card element as child element to inner card element
    addChildElement(cardInner, cardFront);

    //add back card element as child element to inner card element
    addChildElement(cardInner, cardBack);

    //add inner card element as child element to a card element
    addChildElement(cardElem, cardInner);

    //add card element as child element to appropriate grid cell
    addCardToGridCell(cardElem);

    //append to container
    cardElem.appendChild(cardElem);


};
function createElement(elemType){
    return document.createElement(elemType);

};
function addClassToElement(elem, className){
    elem.classList.add(className);
};
function addIdToElement(cardItem, id){
    cardItem.setAttribute("id", id);
};
function addSrcToImageElem(imgElem, src){
    imgElem.src = src;
}
function addChildElement(cardElem, cardItem){
    parentElem.appendChild(cardItem);
}
function addCardToGridCell(cardElem){
    const cardPositionClassName = mapCardIdToGridcell(cardElem);
    const cardPosElem = document.querySelector(cardPositionClassName);

    addChildElement(cardPosElem, cardElem);

};
function mapCardIdToGridcell(cardItem){
    if(parseInt(cardItem.id) === 1){
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