const shuffle = (array) => { //knuth shuffle function
    let i = 0
    let j = 0
    let temp = null
    
    for (i = array.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1))
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
}

$(() => {
    let turnCount = 0;
    const infectionRate = [2,2,2,3,3,4,4];
    const currentInfectionRate = infectionRate[0];
    let outbreakCount = 0;
    let measlesUnitsRemaining = 24;
    let malariaUnitsRemaining = 24;
    let tbUnitsRemaining = 24;
    let fluUnitsRemaining = 24;
    
    const atlanta = {color: 'blue', researchStation: true, moveOptions: ['chicago', 'washington', 'miami']};
    const essen = {color: 'blue', researchStation: false, moveOptions: ['london', 'milan', 'paris', 'stPetersburg']};
    const paris = {color: 'blue', researchStation: false, moveOptions: ['algiers', 'madrid', 'london', 'essen', 'milan']};
    const sanFrancisco = {color: 'blue', researchStation: false, moveOptions: ['losAngeles', 'chicago', 'tokyo', 'manila']};
    const stPetersburg = {color: 'blue', researchStation: false, moveOptions: ['essen', 'istanbul', 'moscow']};
    const milan = {color: 'blue', researchStation: false, moveOptions: ['essen', 'paris', 'istanbul']};
    const madrid = {color: 'blue', researchStation: false, moveOptions: ['london', 'paris', 'algiers', 'newYork', 'saoPaulo']};
    const london = {color: 'blue', researchStation: false, moveOptions: ['essen', 'paris', 'madrid', 'newYork']};
    const montreal = {color: 'blue', researchStation: false, moveOptions: ['chicago', 'washington', 'newYork']};
    const newYork = {color: 'blue', researchStation: false, moveOptions: ['london', 'madrid', 'washington', 'montreal']};
    const chicago = {color: 'blue', researchStation: false, moveOptions: ['montreal', 'atlanta', 'mexicoCity', 'losAngeles', 'sanFrancisco']};
    const washington = {color: 'blue', researchStation: false, moveOptions: ['newYork', 'montreal', 'atlanta', 'miami']};

    const playerCards = [
        {
        type: 'city',
        name: 'essen',
        color: 'blue'
        },
        {
        type: 'city',
        name: 'paris',
        color: 'blue'
        },
        {
        type: 'city',
        name: 'sanFrancisco',
        color: 'blue'
        },
        {
        type: 'city',
        name: 'stPetersburg',
        color: 'blue'
        },
        {
        type: 'city',
        name: 'milan',
        color: 'blue'
        },
        {
        type: 'city',
        name: 'madrid',
        color: 'blue'
        },
        {
        type: 'city',
        name: 'london',
        color: 'blue'
        },
        {
        type: 'city',
        name: 'montreal',
        color: 'blue'
        },   
        {
        type: 'city',
        name: 'newYork',
        color: 'blue'
        },
        {
        type: 'city',
        name: 'chicago',
        color: 'blue'
        },  
        {
        type: 'city',
        name: 'washington',
        color: 'blue'
        },      
    ];
    const infectionCardsDeck = [
       atlanta, essen, sanFrancisco, paris, stPetersburg, madrid, milan, london, montreal, newYork, chicago, washington
    ];

    const infectionCardsDiscard = [

    ];

    // const infect = () => {
    //     infectionCardsDeck[0].
    // }

    const epidemic = {
        type: 'epidemic', 
        epidemic:()=>{
            infectionRate.shift();
            const bottomInfectionCard = infectionCardsDeck[infectionsCardDeck.length]
            infect(bottomInfectionCard)
            infect(bottomInfectionCard)
            infect(bottomInfectionCard)
            infectionCardsDiscard.push(bottomInfectionCard);
            shuffle(infectionCardsDiscard);
            infectionCardsDeck.push(infectionCardsDiscard);
            infectionCardsDiscard = [];
        }
}

    const playerOneHand = [];
    const playerTwoHand = [];

    const startGame = () => {
        shuffle(playerCards);
        shuffle(infectionCardsDeck);
        for (let i=0; i<4; i++){ //deals 4 cards to player 1, removes them from player deck
            playerOneHand.push(playerCards[i]);
            playerCards.splice(i, 1);
        }
        for (let i=0; i<4; i++){ //deals 4 cards to player 2, removes them from player deck
            playerTwoHand.push(playerCards[i]);
            playerCards.splice(i, 1);
        }
        for (let i=0; i<4; i++){ //adds epidemic event cards to player deck
            playerCards.push(epidemic)
        }
        shuffle(playerCards);
        console.log(playerOneHand);
        console.log(playerTwoHand);
        console.log(playerCards);
    }

    const drawCards = () => {

    }

    const infectPhase = () => {
        for(let i=0; i<currentInfectionRate; i++){
            
        }
    }

    const playerTurn = () => {
        drawCards();
        infectPhase();
    }

    startGame();
});


/*
QUESTIONS:



FUTURE GOALS:
-have epidemic cards assigned evenly into player deck
-adjust game difficulty (start with 4, 5, or 6 epidemic cards)
-add event cards
-ability to choose 2-4 players
-adding in player roles (special abilities)
*/