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
    let blueUnitsRemaining = 24;
    let blackUnitsRemaining = 24;
    let yellowUnitsRemaining = 24;
    let redUnitsRemaining = 24;
    
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
    const algiers = {color: 'black', researchStation: false, moveOptions: ['madrid', 'paris', 'istanbul', 'cairo']};
    const chennai = {color: 'black', researchStation: false, moveOptions: ['mumbai', 'dehli', 'kolkata', 'bangkok', 'jakarta']};
    const mumbai = {color: 'black', researchStation: false, moveOptions: ['karachi', 'delhi', 'chennai']};
    const karachi = {color: 'black', researchStation: false, moveOptions: ['riyadh', 'baghdad', 'tehran', 'delhi', 'mumbai']};
    const baghdad = {color: 'black', researchStation: false, moveOptions: ['istanbul', 'cairo', 'reyadh', 'karachi', 'tehran']};
    const delhi = {color: 'black', researchStation: false, moveOptions: ['kolkata', 'chennai', 'mumbai', 'karachi', 'tehran']};
    const cairo = {color: 'black', researchStation: false, moveOptions: ['algiers', 'istanbul', 'baghdad', 'riyadh', 'khartoum']};
    const moscow = {color: 'black', researchStation: false, moveOptions: ['stPetersburg', 'istanbul', 'tehran']};
    const kolkata = {color: 'black', researchStation: false, moveOptions: ['dehli', 'chennai', 'bangkok', 'hongKong']};
    const riyadh = {color: 'black', researchStation: false, moveOptions: ['cairo', 'baghdad', 'karachi']};
    const istanbul = {color: 'black', researchStation: false, moveOptions: ['milan', 'stPetersburg', 'moscow', 'baghdad', 'cairo', 'algiers']};
    const tehran = {color: 'black', researchStation: false, moveOptions: ['moscow', 'baghdad', 'karachi', 'delhi']};
    const lima = {color: 'yellow', researchStation: false, moveOptions: ['mexicoCity', 'bogota', 'santiago']};
    const santiago = {color: 'yellow', researchStation: false, moveOptions: ['lima']};
    const buenosAires = {color: 'yellow', researchStation: false, moveOptions: ['bogota', 'saoPaulo']};
    const khartoum = {color: 'yellow', researchStation: false, moveOptions: ['lagos', 'kinshasa', 'johannesburg', 'cairo']};
    const saoPaulo = {color: 'yellow', researchStation: false, moveOptions: ['buenosAires', 'bogota', 'madrid', 'lagos']};
    const johannesburg = {color: 'yellow', researchStation: false, moveOptions: ['kinshasa', 'khartoum']};
    const miami = {color: 'yellow', researchStation: false, moveOptions: ['washington', 'atlanta', 'mexicoCity', 'bogota']};
    const lagos = {color: 'yellow', researchStation: false, moveOptions: ['khartoum', 'kinshasa', 'saoPaulo']};
    const kinshasa = {color: 'yellow', researchStation: false, moveOptions: ['lagos', 'khartoum', 'johannesburg']};
    const mexicoCity = {color: 'yellow', researchStation: false, moveOptions: ['losAngeles', 'chicago', 'miami', 'bogota', 'lima']};
    const bogota = {color: 'yellow', researchStation: false, moveOptions: ['miami', 'mexicoCity', 'lima', 'buenosAires', 'saoPaulo']};
    const losAngeles = {color: 'yellow', researchStation: false, moveOptions: ['sanFrancisco', 'chicago', 'mexicoCity', 'sydney']};
    const manila = {color: 'red', researchStation: false, moveOptions: ['sydney', 'sanFrancisco', 'taipei', 'hongKong', 'hoChiMinhCity']};
    const jakarta = {color: 'red', researchStation: false, moveOptions: ['chennai', 'bangkok', 'hoChiMinhCity', 'sydney']};
    const bangkok = {color: 'red', researchStation: false, moveOptions: ['hongKong', 'hoChiMinhCity', 'jakarta', 'chennai', 'kolkata']};
    const hoChiMinhCity = {color: 'red', researchStation: false, moveOptions: ['jakarta', 'bangkok', 'hongKong', 'manila']};
    const osaka = {color: 'red', researchStation: false, moveOptions: ['tokyo', 'taipei']};
    const sydney = {color: 'red', researchStation: false, moveOptions: ['losAngeles', 'manila', 'jakarta']};
    const tokyo = {color: 'red', researchStation: false, moveOptions: ['osaka', 'sanFrancisco', 'seoul', 'shanghai']};
    const shanghai = {color: 'red', researchStation: false, moveOptions: ['beijing', 'seoul', 'tokyo', 'taipei', 'hongKong']};
    const taipei = {color: 'red', researchStation: false, moveOptions: ['osaka', 'manila', 'hongKong', 'shanghai']};
    const beijing = {color: 'red', researchStation: false, moveOptions: ['seoul', 'shanghai']};
    const hongKong = {color: 'red', researchStation: false, moveOptions: ['shanghai', 'taipei', 'manila', 'hoChiMinhCity', 'bangkok', 'kolkata']};
    const seoul = {color: 'red', researchStation: false, moveOptions: ['tokyo', 'shanghai', 'beijing']};

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
        {  
        type: 'city',
        name: 'algiers',
        color: 'black'
        },
        {  
        type: 'city',
        name: 'chennai',
        color: 'black'
        },        
        {  
        type: 'city',
        name: 'mumbai',
        color: 'black'
        },
        {  
        type: 'city',
        name: 'karachi',
        color: 'black'
        },
        {  
        type: 'city',
        name: 'baghdad',
        color: 'black'
        },
        {  
        type: 'city',
        name: 'delhi',
        color: 'black'
        },
        {  
        type: 'city',
        name: 'cairo',
        color: 'black'
        },
        {  
        type: 'city',
        name: 'moscow',
        color: 'black'
        },
        {  
        type: 'city',
        name: 'kolkata',
        color: 'black'
        },
        {  
        type: 'city',
        name: 'riyadh',
        color: 'black'
        },
        {  
        type: 'city',
        name: 'istanbul',
        color: 'black'
        },
        {  
        type: 'city',
        name: 'tehran',
        color: 'black'
        },
        {  
        type: 'city',
        name: 'losAngeles',
        color: 'yellow'
        },
        {  
        type: 'city',
        name: 'bogota',
        color: 'yellow'
        },
        {  
        type: 'city',
        name: 'mexicoCity',
        color: 'yellow'
        },
        {  
        type: 'city',
        name: 'kinshasa',
        color: 'yellow'
        },
        {  
        type: 'city',
        name: 'lagos',
        color: 'yellow'
        },
        {  
        type: 'city',
        name: 'miami',
        color: 'yellow'
        },
        {  
        type: 'city',
        name: 'johannesburg',
        color: 'yellow'
        },
        {  
        type: 'city',
        name: 'saoPaulo',
        color: 'yellow'
        },
        {  
        type: 'city',
        name: 'khartoum',
        color: 'yellow'
        },
        {  
        type: 'city',
        name: 'buenosAires',
        color: 'yellow'
        },
        {  
        type: 'city',
        name: 'santiago',
        color: 'yellow'
        },
        {  
        type: 'city',
        name: 'lima',
        color: 'yellow'
        },
        {  
        type: 'city',
        name: 'seoul',
        color: 'red'
        },
        {  
        type: 'city',
        name: 'hongKong',
        color: 'red'
        },
        {  
        type: 'city',
        name: 'beijing',
        color: 'red'
        },
        {  
        type: 'city',
        name: 'taipei',
        color: 'red'
        },
        {  
        type: 'city',
        name: 'shanghai',
        color: 'red'
        },
        {  
        type: 'city',
        name: 'tokyo',
        color: 'red'
        },
        {  
        type: 'city',
        name: 'sydney',
        color: 'red'
        },
        {  
        type: 'city',
        name: 'osaka',
        color: 'red'
        },
        {  
        type: 'city',
        name: 'hoChiMinhCity',
        color: 'red'
        },
        {  
        type: 'city',
        name: 'bangkok',
        color: 'red'
        },
        {  
        type: 'city',
        name: 'jakarta',
        color: 'red'
        },
        {  
        type: 'city',
        name: 'manila',
        color: 'red'
        },
    ];
    const infectionCardsDeck = [
       atlanta, essen, sanFrancisco, paris, stPetersburg, madrid, milan, london, montreal, newYork, chicago, washington, tehran, istanbul, riyadh, kolkata, moscow, cairo, delhi, baghdad, karachi, mumbai, chennai, algiers, lima, santiago, buenosAires, khartoum, saoPaulo, johannesburg, miami, lagos, kinshasa, mexicoCity, bogota, losAngeles, manila, jakarta, bangkok, hoChiMinhCity, osaka, sydney, tokyo, shanghai, taipei, beijing, hongKong, seoul
    ];

    let infectionCardsDiscard = [];

    // const infect = () => {
    //     infectionCardsDeck[0].
    // }

    const epidemic = {
        type: 'epidemic', 
        epidemic:()=>{
            infectionRate.shift(); //removes first value in infectionRate so that infectionRate[0] changes to  the next number
            const bottomInfectionCardIndex  = (infectionCardsDeck.length);
            const bottomInfectionCard = infectionCardsDeck[bottomInfectionCardIndex];
            // infect(bottomInfectionCard)
            // infect(bottomInfectionCard)
            // infect(bottomInfectionCard)
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
        // console.log(playerOneHand);
        // console.log(playerTwoHand);
        // console.log(playerCards);
        // playerTurn()
    }

    const drawCards = (player) => {
        if(playerCards[0].type === 'epidemic'){
            console.log('epidemic!');
            epidemic.epidemic();
            
        } else{
            player.push(playerCards[0]);
            playerCards.shift();
        }

    }

    const infectPhase = () => {
        for(let i=0; i<currentInfectionRate; i++){
            
        }
    }

    // const playerTurn = () => {
    //     if (turnCount%2 === 0){
    //         //four actions
    //         drawCards(playerOneHand);
    //         infectPhase();
    //     } else{
                //four actions
    //         drawCards(playerTwoHand);
    //         infectPhase();
    //     }
        
    // }

    startGame();
});


/*
QUESTIONS:



FUTURE GOALS:
-have epidemic cards assigned evenly into player deck
-adjust game difficulty (start with 4, 5, or 6 epidemic cards)
-add event cards
-ability to choose 2-4 players
-player with largest city in hand goes first
-adding in player roles (special abilities)
*/