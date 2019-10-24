//============================================
//UI ELEMENTS: CREATING THE USER INTERFACE
//============================================

$(()=> {
//========================================
//APPENDING GAMEPLAY ELEMENTS TO DOM
//========================================
    //CREATING PLAYER HANDS
        const playerOneHand = []; //creates empty array for player one's cards
        const playerTwoHand = []; //creates empty array for player two's cards
        const $handOne = $('.handOne'); //creates jquery element linked to the location of player one's hand of cards
        const $handTwo = $('.handTwo'); //creates jquery element linked to the location of player two's hand of cards

    //creating jquery elements linked to UI page elements, previously created with classes in index.html
        const $cityDivsLocation = $('.cityDivsLocation');
        const $bottomLeft = $('.bottomLeft');
        const $bottomRight = $('.bottomRight');
        const $playerOneHeading = $('.playerOneHeading');
        const $playerTwoHeading = $('.playerTwoHeading');
        const $playerOneConsole = $('.playerOneConsole');
        const $playerTwoConsole = $('.playerTwoConsole');

    //creating divs to give current status of each city (whether player is located there, current disease burden)  
        const $cityDivs = [];//array to store city divs to access them for DOM manipulation  
        for (let i=0; i<cityList.length; i++){
            const $cityDiv = $('<div>').addClass('cityDiv').addClass(cityList[i].color).addClass(`${cityList[i].color}City`).text(`${cityList[i].name}: ${cityList[i].diseaseUnits}`);
            $cityDivs.push($cityDiv);
            $cityDivsLocation.append($cityDiv);
        }
        console.log($cityDivs);


    //creating buttons in play consoles for gameplay
        const $drawCardsOneButton = $('<button>').attr('class', 'drawCardsButton').text('Draw Cards');
        const $drawCardsTwoButton = $('<button>').attr('class', 'drawCardsButton').text('Draw Cards');
        $playerOneConsole.append($drawCardsOneButton);
        $playerTwoConsole.append($drawCardsTwoButton);

        const $infectOneButton = $('<button>').attr('class', 'infectOneButton').text('Infect');
        const $infectTwoButton = $('<button>').attr('class', 'infectTwoButton').text('Infect');
        $playerOneConsole.append($infectOneButton);
        $playerTwoConsole.append($infectTwoButton);

    //appending current gameplay data to DOM
        const $infectionRate = $('<div>').addClass('infectionRate').text(`Current Infection Rate: ${currentInfectionRate}`);
        const $outbreakNumber = $('<div>').addClass('outbreakNumber').text(`Number of Outbreaks: ${outbreakCount}/8`);
        $bottomLeft.append($infectionRate);
        $bottomLeft.append($outbreakNumber);

    //cure statuses
        const $yellowCure = $('<div>').addClass('yellowCure').text('Yellow Not Cured');
        const $blueCure = $('<div>').addClass('blueCure').text('Blue Not Cured');
        const $blackCure = $('<div>').addClass('blackCure').text('Black Not Cured');
        const $redCure = $('<div>').addClass('redCure').text('Red Not Cured');
        $bottomLeft.append($yellowCure);
        $bottomLeft.append($blueCure);
        $bottomLeft.append($blackCure);
        $bottomLeft.append($redCure);

    //disease units remaining
        const $yellowUnitsRemaining = $('<div>').addClass('unitsRemaining').text(`${yellowUnitsRemaining} Yellow Units Remain`);   
        const $blueUnitsRemaining = $('<div>').addClass('unitsRemaining').text(`${blueUnitsRemaining} Blue Units Remain`);
        const $blackUnitsRemaining = $('<div>').addClass('unitsRemaining').text(`${blackUnitsRemaining} Black Units Remain`);
        const $redUnitsRemaining = $('<div>').addClass('unitsRemaining').text(`${redUnitsRemaining} Red Units Remain`);
        $bottomRight.append($yellowUnitsRemaining);
        $bottomRight.append($blueUnitsRemaining);
        $bottomRight.append($blackUnitsRemaining);
        $bottomRight.append($redUnitsRemaining);

//================================
//CITY CARDS DECK
//================================
    //CREATE DECK OF CITY CARDS (empty array)
        const $cityCards = [];

    //ADD EACH CITY CARD TO THE DECK (importing card data from data.js)
        for (let i=0; i<playerCards.length; i++){
            const $cityCard = $('<div>').addClass('card').addClass(playerCards[i].color).text(playerCards[i].name);
            $cityCards.push($cityCard);
        }
//========================================
//INFECTION CARDS DECK
//========================================
    //CREATE DECK OF INFECTION CARDS (empty array)
        const $infectionCards = [];

    //ADD EACH INFECTION CARD TO THE DECK   
        for (let i=0; i<infectionCards.length; i++){
            const $infectionCard = $('<div>').addClass('card').addClass(infectionCards[i].color).text(infectionCards[i].name);
            $infectionCards.push($infectionCard);
        }

    //CREATE INFECTION CARD DISCARD
        const $infectionCardsDiscard = [];

//========================================
//GAMEPLAY GENERAL FUNCTIONS
//========================================
    //CHECK FOR OUTBREAKS
        const checkForOutbreak = (city) => {

        }

    //OUTBREAK
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


    //EPIDEMIC
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

    //DRAW CARDS
        const drawCardsPlayerOne = () => {
            if(playerCards[0].type === 'epidemic'){
                console.log('epidemic!');
                epidemic.epidemic();
                
            } else{
                playerOneHand.push($cityCards[0]);
                $cityCards.splice(0, 1);
                // playerOneHand.push($cityCards[0]);
                // $cityCards.splice(0, 1);
                $($handOne).append(playerOneHand);
            }

        }
        const drawCardsPlayerTwo = () => {
            if(playerCards[0].type === 'epidemic'){
                console.log('epidemic!');
                epidemic.epidemic();
                
            } else{
                playerTwoHand.push($cityCards[0]);
                $cityCards.splice(0, 1);
                // playerTwoHand.push($cityCards[0]);
                // $cityCards.splice(0, 1);
                $($handTwo).append(playerTwoHand);
            }

        }

    //DRAW INFECTION CARDS
        drawInfectionCard = () => {
            //create jquery variable to access infection modal
            $infectionModal = $('#infectionModal');
            $infectionModalTextbox = $('#infectionModalTextbox');
            //display infection modal when drawing infection cards, append current infection cards to the DOM
            $infectionModal.css('display', 'block');
            $infectionModalTextbox.prepend($infectionCards[0]);
            //remove current infection cards from deck, put it in discard
            $infectionCardsDiscard.push($infectionCards[0]);
            $infectionCards.splice(0, 1);
            //jquery variable for close modal button
            $closeInfection = $('#closeInfection'); 
            $closeInfection.on('click', () => {
                //remove infection cards drawn from the DOM, hide infection modal 
                $infectionModalTextbox.empty();
                const $closeInfection = $('<button>').attr('id', 'closeInfection').text('close');
                $infectionModalTextbox.append($closeInfection);
                $infectionModal.css('display', 'none');
                //trigger next player's turn
            });
        }

    //INFECT
        const infectOnePhase = () => {
            // for(let i=0; i<currentInfectionRate; i++){
                //draw cards
                $infectOneButton.on('click', drawInfectionCard);
                //make infection button text disappear after clicking
                $infectOneButton.on('click', () => {
                    $infectOneButton.css('color', 'rgb(51,51,51)');
                    turnCount ++;
                    console.log(turnCount);
                    playerTurn();
            });
        // }
    }
        const infectTwoPhase = () => {
            // for(let i=0; i<currentInfectionRate; i++){
                //draw cards
                $infectTwoButton.on('click', drawInfectionCard);
                //make infection button text disappear after click
                $infectTwoButton.on('click', () => {
                    $infectTwoButton.css('color', 'rgb(51,51,51)');
                    turnCount++;
                    console.log(turnCount);
                    playerTurn();
            });
        }
    

//============================================
//GAMEPLAY: PUTTING THE FUNCTIONS INTO ACTION
//============================================
const playerTurn = () => {
    if (turnCount%2 === 0){ //logic for alternating turns
        //toggle player turn headings to indicate whose turn it is
        $($playerOneHeading).css('display', 'block');
        $($playerTwoHeading).css('display', 'none');
        //four actions
        //text on "draw cards" button appears to cue player
        $drawCardsOneButton.css('color', 'white');
        $drawCardsOneButton.on('click', drawCardsPlayerOne);
        //text on "infect" button appears and "draw cards" disappears to cue player
        $drawCardsOneButton.on('click', () => {
            $drawCardsOneButton.css('color', 'rgb(51,51,51)');
            $infectOneButton.css('color', 'white');
        });
        infectOnePhase();

    } else{
        //toggle player turn headings
        $($playerOneHeading).css('display', 'none');
        $($playerTwoHeading).css('display', 'block');
            // four actions
        //text on "draw cards" button appears to cue player
        $drawCardsTwoButton.css('color', 'white');
        //player two draws cards, cards are drawn, buttons toggle
        $drawCardsTwoButton.on('click', drawCardsPlayerTwo); 
        $drawCardsTwoButton.on('click', () => {
            $drawCardsTwoButton.css('color', 'rgb(51,51,51)');
            $infectTwoButton.css('color', 'white');
        });
        infectTwoPhase();
    }
    
}

//========================================
//TIME TO START THE GAME!
//========================================

//function to find random city to start on
const $randomCityPlayerOne = () => {
    ($cityDivs[Math.floor(Math.random() * (49))]).prepend($playerOneIcon);
}

const $randomCityPlayerTwo = () => {
    ($cityDivs[Math.floor(Math.random() * (49))]).prepend($playerTwoIcon);
}

const startGame = () => { //first, shuffle each deck of cards
    shuffle($cityCards);
    shuffle($infectionCards);
    //assign each player a random starting location: append player icon to random city div on the dom
    $randomCityPlayerOne();
    $randomCityPlayerTwo();

    for (let i=0; i<4; i++){ //deals 4 cards to player 1, removes each of them from player deck
        playerOneHand.push($cityCards[i]);
        $cityCards.splice(i, 1);
    }
    for (let i=0; i<4; i++){ //deals 4 cards to player 2, removes each of them from player deck
        playerTwoHand.push($cityCards[i]);
        $cityCards.splice(i, 1);
    }
    for (let i=0; i<4; i++){ //adds 4 epidemic event cards to player deck to intensify gameplay (this is done after dealing player cards)
        $cityCards.push(epidemic);
    }
    shuffle($cityCards); //reshuffle the deck now that the epidemic cards have been added
    $($handOne).append(playerOneHand); //appends player hands to the DOM
    $($handTwo).append(playerTwoHand);
    playerTurn(); //initiate first player turn
}
startGame(); //starts game on page load
});