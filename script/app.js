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
    const infectionRate = [2, 2, 2, 3, 3, 4, 4];
    const currentInfectionRate = infectionRate[0];
    let outbreakCount = 0;
    let blueUnitsRemaining = 24;
    let blackUnitsRemaining = 24;
    let yellowUnitsRemaining = 24;
    let redUnitsRemaining = 24;
    
    const atlanta = {name: 'Atlanta', class: 'atlanta', color: 'blue', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: true, moveOptions: ['chicago', 'washington', 'miami']};
    const essen = {name: 'Essen', class: 'essen', color: 'blue', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: false, moveOptions: ['london', 'milan', 'paris', 'stPetersburg']};
    const paris = {name: 'Paris', class: 'paris', color: 'blue', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: false, moveOptions: ['algiers', 'madrid', 'london', 'essen', 'milan']};
    const sanFrancisco = {name: 'San Francisco', class: 'sanFrancisco', color: 'blue', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: false, moveOptions: ['losAngeles', 'chicago', 'tokyo', 'manila']};
    const stPetersburg = {name: 'St Petersburg', class: 'stPetersburg', color: 'blue', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: false, moveOptions: ['essen', 'istanbul', 'moscow']};
    const milan = {name: 'Milan', class: 'milan', color: 'blue', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: false, moveOptions: ['essen', 'paris', 'istanbul']};
    const madrid = {name: 'Madrid', class: 'madrid', color: 'blue', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: false, moveOptions: ['london', 'paris', 'algiers', 'newYork', 'saoPaulo']};
    const london = {name: 'London', class: 'london', color: 'blue', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: false, moveOptions: ['essen', 'paris', 'madrid', 'newYork']};
    const montreal = {name: 'Montreal', class: 'montreal', color: 'blue', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: false, moveOptions: ['chicago', 'washington', 'newYork']};
    const newYork = {name: 'New York', class: 'newYork', color: 'blue', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: false, moveOptions: ['london', 'madrid', 'washington', 'montreal']};
    const chicago = {name: 'Chicago', class: 'chicago', color: 'blue', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: false, moveOptions: ['montreal', 'atlanta', 'mexicoCity', 'losAngeles', 'sanFrancisco']};
    const washington = {name: 'Washington', class: 'washington', color: 'blue', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: false, moveOptions: ['newYork', 'montreal', 'atlanta', 'miami']};
    const algiers = {name: 'Algiers', class: 'algiers', color: 'black', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: false, moveOptions: ['madrid', 'paris', 'istanbul', 'cairo']};
    const chennai = {name: 'Chennai', class: 'chennai', color: 'black', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: false, moveOptions: ['mumbai', 'dehli', 'kolkata', 'bangkok', 'jakarta']};
    const mumbai = {name: 'Mumbai', class: 'mumbai', color: 'black', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: false, moveOptions: ['karachi', 'delhi', 'chennai']};
    const karachi = {name: 'Karachi', class: 'karachi', color: 'black', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: false, moveOptions: ['riyadh', 'baghdad', 'tehran', 'delhi', 'mumbai']};
    const baghdad = {name: 'Baghdad', class: 'baghdad', color: 'black', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: false, moveOptions: ['istanbul', 'cairo', 'reyadh', 'karachi', 'tehran']};
    const delhi = {name: 'Delhi', class: 'delhi', color: 'black', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: false, moveOptions: ['kolkata', 'chennai', 'mumbai', 'karachi', 'tehran']};
    const cairo = {name: 'Cairo', class: 'cairo', color: 'black', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: false, moveOptions: ['algiers', 'istanbul', 'baghdad', 'riyadh', 'khartoum']};
    const moscow = {name: 'Moscow', class: 'moscow', color: 'black', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: false, moveOptions: ['stPetersburg', 'istanbul', 'tehran']};
    const kolkata = {name: 'Kolkata', class: 'kolkata', color: 'black', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: false, moveOptions: ['dehli', 'chennai', 'bangkok', 'hongKong']};
    const riyadh = {name: 'Riyadh', class: 'riyadh', color: 'black', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: false, moveOptions: ['cairo', 'baghdad', 'karachi']};
    const istanbul = {name: 'Istanbul', class: 'istanbul', color: 'black', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: false, moveOptions: ['milan', 'stPetersburg', 'moscow', 'baghdad', 'cairo', 'algiers']};
    const tehran = {name: 'Tehran', class: 'tehran', color: 'black', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: false, moveOptions: ['moscow', 'baghdad', 'karachi', 'delhi']};
    const lima = {name: 'Lima', class: 'lima', color: 'yellow', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: false, moveOptions: ['mexicoCity', 'bogota', 'santiago']};
    const santiago = {name: 'Santiago', class: 'santiago', color: 'yellow', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: false, moveOptions: ['lima']};
    const buenosAires = {name: 'Buenos Aires', class: 'buenosAires', color: 'yellow', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: false, moveOptions: ['bogota', 'saoPaulo']};
    const khartoum = {name: 'Khartoum', class: 'khartoum', color: 'yellow', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: false, moveOptions: ['lagos', 'kinshasa', 'johannesburg', 'cairo']};
    const saoPaulo = {name: 'Sao Paulo', class: 'saoPaulo', color: 'yellow', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: false, moveOptions: ['buenosAires', 'bogota', 'madrid', 'lagos']};
    const johannesburg = {name: 'Johannesburg', class: 'johannesburg', color: 'yellow', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: false, moveOptions: ['kinshasa', 'khartoum']};
    const miami = {name: 'Miami', class: 'miami', color: 'yellow', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: false, moveOptions: ['washington', 'atlanta', 'mexicoCity', 'bogota']};
    const lagos = {name: 'Lagos', class: 'lagos', color: 'yellow', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: false, moveOptions: ['khartoum', 'kinshasa', 'saoPaulo']};
    const kinshasa = {name: 'Kinshasa', class: 'kinshasa', color: 'yellow', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: false, moveOptions: ['lagos', 'khartoum', 'johannesburg']};
    const mexicoCity = {name: 'Mexico City', class: 'mexicoCity', color: 'yellow', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: false, moveOptions: ['losAngeles', 'chicago', 'miami', 'bogota', 'lima']};
    const bogota = {name: 'Bogota', class: 'bogota', color: 'yellow', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: false, moveOptions: ['miami', 'mexicoCity', 'lima', 'buenosAires', 'saoPaulo']};
    const losAngeles = {name: 'Los Angeles', class: 'losAngeles', color: 'yellow', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: false, moveOptions: ['sanFrancisco', 'chicago', 'mexicoCity', 'sydney']};
    const manila = {name: 'Manila', class: 'manila', color: 'red', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: false, moveOptions: ['sydney', 'sanFrancisco', 'taipei', 'hongKong', 'hoChiMinhCity']};
    const jakarta = {name: 'Jakarta', class: 'jakarta', color: 'red', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: false, moveOptions: ['chennai', 'bangkok', 'hoChiMinhCity', 'sydney']};
    const bangkok = {name: 'Bangkok', class: 'bangkok', color: 'red', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: false, moveOptions: ['hongKong', 'hoChiMinhCity', 'jakarta', 'chennai', 'kolkata']};
    const hoChiMinhCity = {name: 'Ho Chi Minh City', class: 'hoChiMinhCity', color: 'red', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: false, moveOptions: ['jakarta', 'bangkok', 'hongKong', 'manila']};
    const osaka = {name: 'Osaka', class: 'osaka', color: 'red', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: false, moveOptions: ['tokyo', 'taipei']};
    const sydney = {name: 'Sydney', class: 'sydney', color: 'red', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: false, moveOptions: ['losAngeles', 'manila', 'jakarta']};
    const tokyo = {name: 'Tokyo', class: 'tokyo', color: 'red', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: false, moveOptions: ['osaka', 'sanFrancisco', 'seoul', 'shanghai']};
    const shanghai = {name: 'Shanghai', class: 'shanghai', color: 'red', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: false, moveOptions: ['beijing', 'seoul', 'tokyo', 'taipei', 'hongKong']};
    const taipei = {name: 'Taipei', class: 'taipei', color: 'red', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: false, moveOptions: ['osaka', 'manila', 'hongKong', 'shanghai']};
    const beijing = {name: 'Beijing', class: 'beijing', color: 'red', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: false, moveOptions: ['seoul', 'shanghai']};
    const hongKong = {name: 'Hong Kong', class: 'hongKong', color: 'red', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: false, moveOptions: ['shanghai', 'taipei', 'manila', 'hoChiMinhCity', 'bangkok', 'kolkata']};
    const seoul = {name: 'Seoul', class: 'seoul', color: 'red', blueUnits: 0, blackUnits: 0, yellowUnits: 0, redUnits: 0, researchStation: false, moveOptions: ['tokyo', 'shanghai', 'beijing']};

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

    const cityList = [
        atlanta, essen, sanFrancisco, paris, stPetersburg, madrid, milan, london, montreal, newYork, chicago, washington, tehran, istanbul, riyadh, kolkata, moscow, cairo, delhi, baghdad, karachi, mumbai, chennai, algiers, lima, santiago, buenosAires, khartoum, saoPaulo, johannesburg, miami, lagos, kinshasa, mexicoCity, bogota, losAngeles, manila, jakarta, bangkok, hoChiMinhCity, osaka, sydney, tokyo, shanghai, taipei, beijing, hongKong, seoul
     ];

    const infectionCardsDeck = [
       atlanta, essen, sanFrancisco, paris, stPetersburg, madrid, milan, london, montreal, newYork, chicago, washington, tehran, istanbul, riyadh, kolkata, moscow, cairo, delhi, baghdad, karachi, mumbai, chennai, algiers, lima, santiago, buenosAires, khartoum, saoPaulo, johannesburg, miami, lagos, kinshasa, mexicoCity, bogota, losAngeles, manila, jakarta, bangkok, hoChiMinhCity, osaka, sydney, tokyo, shanghai, taipei, beijing, hongKong, seoul
    ];

    let infectionCardsDiscard = [];

    const $map = $('<div>').attr('id', 'map');
    $('body').append($map);

    for(let i=0; i<cityList.length; i++){
        const $addCity = () => {
            const $cityName = cityList[i].name;
            const $cityClass = cityList[i].class;
            const $cityColor = cityList[i].color;
            console.log($cityClass);
            const $eachCity = $('<div>').addClass($cityClass).addClass($cityColor).addClass('city').text($cityName);
            $map.append($eachCity);
        }
        $addCity();
    }




    const outbreak = (country) => {
        outbreakCount ++;
        if (outbreakCount >= 8) {
            alert('the world has lost! too many outbreaks!')
        } else {
            for(let i=0; i<country.moveOptions.length; i++){
                const outbreakCountry = country.moveOptions[i].valueOf(); //use function?
                const outbreakDiseaseTargeted = `${country.color.valueOf()}+Units`;
                const outbreakEffect = outbreakCountry.outbreakDiseaseTargeted;
                outbreakEffect ++;
            }
        }
    }

    const checkForOutbreak = (city) => {

    }

    const infect = () => {
        // infectionCardsDeck[0].
    }


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