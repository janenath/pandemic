//============================================
//UI ELEMENTS: CREATING THE USER INTERFACE
//============================================

$(()=> {
//============================================
//GENERAL GAMEPLAY LOGIC
//============================================
    //SHUFFLE CARDS FUNCTION (Knuth shuffle function)
    const shuffle = (array) => { 
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
    
    //KEEP COUNT OF ALTERNATING TURNS 
        let turnCount = 0;

//========================================
//WIN AND LOSS FUNCTIONS
//========================================        
$winModal = $('#winModal');
$closeWin = $('#closeWin'); 
$loseModal = $('#loseModal');
$closeLose = $('#closeLose');

const win = () => {
    $($winModal.css('display', 'block'));
    };
$closeWin.on('click', () => {
$winModal.css('display', 'none');
    });

const lose = () => {
    $($loseModal.css('display', 'block'));
    };
$closeLose.on('click', () => {
$loseModal.css('display', 'none');
    });

//========================================
//TOGGLE INSTRUCTIONS MODAL
//========================================
$instructionsModal = $('#instructionsModal');
$closeInstructions = $('#closeInstructions'); 
$instructionsButton = $('.instructionsButton');

$instructionsButton.on('click', () => {
    $($instructionsModal.css('display', 'block'));
    });
$closeInstructions.on('click', () => {
$instructionsModal.css('display', 'none');
    });

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
        const $playerOneHeading = $('.playerOneHeading');
        const $playerTwoHeading = $('.playerTwoHeading');
        const $playerOneConsole = $('.playerOneConsole');
        const $playerTwoConsole = $('.playerTwoConsole');

    //creating divs to give visual representation of each city/its current disease status of each city   
        const $cityDivs = [];//array to store city divs to access them for DOM manipulation  
        for (let i=0; i<cityList.length; i++){
            const $cityDiv = $('<div>').addClass('cityDiv').css('color', 'black').addClass(`${cityList[i].color}Border`).addClass(`${cityList[i].color}City`).attr('id', `${cityList[i].name}`).text(`${cityList[i].name}`);
            $cityDivs.push($cityDiv);
            $cityDivsLocation.append($cityDiv);
        }

    //creating buttons in play consoles for gameplay
        const $drawCardsOneButton = $('<button>').attr('class', 'drawCardsButton').text('Draw Cards');
        const $drawCardsTwoButton = $('<button>').attr('class', 'drawCardsButton').text('Draw Cards');
        $playerOneConsole.append($drawCardsOneButton);
        $playerTwoConsole.append($drawCardsTwoButton);

        const $infectOneButton = $('<button>').attr('class', 'infectOneButton').text('Infect');
        const $infectTwoButton = $('<button>').attr('class', 'infectTwoButton').text('Infect');
        $playerOneConsole.append($infectOneButton);
        $playerTwoConsole.append($infectTwoButton);
 

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

//============================================
//CURE DISEASE
//============================================
const oneCure = (color) => {
    const curedCardClass = `('.card, .${color}')`;
    const $curedDiseaseCards = $(curedCardClass);
    const $curedDivClass = `('.${color}, city')`
    $($curedDivClass).remove();
    for (let i=0; i<playerOneHand.Length; i++){
        $($curedDiseaseCards).remove();
    }
}

const twoCure = (color) => {
    const curedCardClass = `('.card, .${color}')`;
    const $curedDiseaseCards = $(curedCardClass);
    const $curedDivClass = `('.${color}, city')`
    $($curedDivClass).remove();
    for (let i=0; i<playerTwoHand.Length; i++){
        $($curedDiseaseCards).remove();
    }
}



//EPIDEMIC
    const epidemic = {
            type: 'epidemic', 
            epidemic:()=>{
            //create jquery variable to access epidemic modal
            $epidemicModal = $('#epidemicModal');
            $epidemicModalTextbox = $('#epidemicModalTextbox');
            //display epidemic modal when epidemic card is drawn
                //creates click button to hide epidemic modal
            $closeEpidemic = $('#closeEpidemic'); 
            $closeEpidemic.on('click', () => {
            $epidemicModal.css('display', 'none');
                });
            $epidemicModal.css('display', 'block');
            drawInfectionCard();
            drawInfectionCard();
            drawInfectionCard();
            return;
            }
    }

    //DRAW CARDS
        const drawCardsPlayerOne = () => {
            if($cityCards[0].type === 'epidemic'){
                console.log('epidemic!');
                epidemic.epidemic();
                
            } else{
                // console.log(playerOneHand);
                playerOneHand.push($cityCards[0]);
                // console.log(playerOneHand);
                $cityCards.shift();
                // console.log($handOne);
                // $($handOne).empty();
                // console.log($handOne);
                // console.log(playerOneHand);
                $($handOne).append(playerOneHand);
                for (i=0; i<playerOneHand.length; i++){
                    const redCards = [];
                    const blueCards = [];
                    const yellowCards = [];
                    const blackCards = [];
                    const $redCard = $('.card, .red');
                    const $blueCard = $('.card, .blue');
                    const $yellowCard = $('.card, .yellow');
                    const $blackCard = $('.card, .black');
                    redCards.push($redCard);
                    blueCards.push($blueCard);
                    yellowCards.push($yellowCard);
                    blackCards.push($blackCard);
                    if(redCards.length>=5 ||  blueCards.length>=5 || yellowCards.length>=5 || blackCards.length>=5) {
                        oneCure();
                    } else {
                        return;
                    }
                }
            }

        }
        const drawCardsPlayerTwo = () => {
            if(playerCards[0].type === 'epidemic'){
                console.log('epidemic!');
                epidemic.epidemic();
                
            } else{
                playerTwoHand.push($cityCards[0]);
                $cityCards.shift();
                $($handTwo).append(playerTwoHand);
                for (i=0; i<playerTwoHand.length; i++){
                    const redCards = [];
                    const blueCards = [];
                    const yellowCards = [];
                    const blackCards = [];
                    const $redCard = $('.card, .red');
                    const $blueCard = $('.card, .blue');
                    const $yellowCard = $('.card, .yellow');
                    const $blackCard = $('.card, .black');
                    redCards.push($redCard);
                    blueCards.push($blueCard);
                    yellowCards.push($yellowCard);
                    blackCards.push($blackCard);
                    if(redCards.length>=5 ||  blueCards.length>=5 || yellowCards.length>=5 || blackCards.length>=5) {
                        twoCure();
                    } else {
                        return;
                    }
                }
            }

        }

    //DRAW INFECTION CARDS
        const drawInfectionCard = () => {
            //create jquery variable to access infection modal
            $infectionModal = $('#infectionModal');
            $infectionModalTextbox = $('#infectionModalTextbox');
            //display infection modal when drawing infection cards, append current infection cards to the DOM
            $infectionModal.css('display', 'block');
            //if infection deck runs out, re-shuffle from discard
            if ($infectionCards.length === 0){
                $infectionCards.push($infectionCardsDiscard);
                shuffle($infectionCards);
                $($infectionCardsDiscard).empty()
                drawInfectionCard();
            } else {
            const $currentInfectionCard = ($infectionCards[0]);
            const $infectedCity = $($currentInfectionCard).text();
            $infectionModalTextbox.prepend($currentInfectionCard);
            //infecting cities: loop through city divs to find matching one, this is where the result will go. 
            for(let i=0; i<$cityDivs.length; i++) {
                const $eachCityName = $cityDivs[i].attr('id');
                //figure out if player one has a matching card in their hand
                if ($eachCityName === $infectedCity) {
                    const findCardOne = () => {
                        const resultArray = [];
                        for(let i=0; i<playerOneHand.length; i++) {
                            let result =($(playerOneHand[i]).text() === $infectedCity);
                            resultArray.push(result);
                        }
                        const isInArray = (value, array) => {
                            return array.indexOf(value) > -1;
                          }
                        return isInArray(true, resultArray);
                        
                    }
                    //find out if player two has matching card in their hand
                    const findCardTwo = () => {
                        const resultArray = [];
                        for(let i=0; i<playerTwoHand.length; i++) {
                            let result =($(playerTwoHand[i]).text() === $infectedCity);
                            resultArray.push(result);  
                        }
                        function isInArray(value, array) {
                            return array.indexOf(value) > -1;
                          }
                        return isInArray(true, resultArray);
                        }
                //if player one OR player two has the matching card in their hand, the city is "treated"  
                if (findCardOne() === true || findCardTwo() === true) {
                    const $treatedMessage = $('.treatedMessage');
                    if (findCardOne() === true){
                        $($cityDivs[i]).css('font-weight', 'bold');
                        $($treatedMessage).empty();
                        $playerOneConsole.prepend($('<p>').addClass('treatedMessage').text(`Thanks to Player One's quick action, ${$cityDivs[i].attr('id')} has been sucessfully treated!`));
                    } else {
                        $($cityDivs[i]).css('font-weight', 'bold');
                        $($treatedMessage).empty();
                        $playerTwoConsole.prepend($('<p>').addClass('treatedMessage').text(`Thanks to Player Two's quick action, ${$cityDivs[i].attr('id')} has been sucessfully treated!`));
                    }
                //If neither player has the card in their hand,, the city is infected and removed from the gameplay.       
                } else {
                    $($cityDivs[i]).text('');
                    $($cityDivs[i]).append('<i>').addClass('fas fa-biohazard fa-lg').attr('style', 'color: white');
                    $($cityDivs[i]).removeClass(`${cityList[i].color}Border`);
                    $($cityDivs[i]).addClass(`${cityList[i].color}`);
                }
            }
             
        } 
            //remove current infection cards from deck, put it in discard
            $infectionCardsDiscard.push($infectionCards[0]);
            $infectionCards.splice(0, 1);
            //jquery variable for close modal button
            $closeInfection = $('#closeInfection'); 
            $closeInfection.on('click', () => {
                //remove infection cards drawn from the DOM, clear contents of infection modal and "reset" it for next time by re-adding generic elements, hide it from view
                $infectionModalTextbox.empty();
                const $infectionModalText = $('<p>').text('INFECTION!');
                const $closeInfection = $('<button>').attr('id', 'closeInfection').text('close');
                $infectionModalTextbox.append($infectionModalText);
                $infectionModalTextbox.append($closeInfection);
                $infectionModal.css('display', 'none');
            });
        }
        }


        const infectOnePhase = () => {
                $infectOneButton.on('click', drawInfectionCard);
                //make infection button text disappear after clicking
                $infectOneButton.on('click', () => {
                    $infectOneButton.css('color', 'rgb(51,51,51)');
                    //turn count increases so it becomes player two's turn
                    turnCount ++;
                    playerTurn();
            });
    }
        const infectTwoPhase = () => {
                //draw card
                $infectTwoButton.on('click', drawInfectionCard);
                //make infection button text disappear after click
                $infectTwoButton.on('click', () => {
                    $infectTwoButton.css('color', 'rgb(51,51,51)');
                    //turn count increases so it becomes player one's turn
                    turnCount++;
                    playerTurn();
            });
        }
    


//============================================
//GAMEPLAY: PUTTING THE FUNCTIONS INTO ACTION
//============================================


const playerTurn = () => {
    if ($($cityDivsLocation).children().length === 0) {
        win();
    }
    else if ($cityCards.length === 0) {
        lose();
    } else {
        if (turnCount%2 === 0){ //logic for alternating turns
            //toggle player turn headings to indicate whose turn it is
            $($playerOneHeading).css('display', 'block');
            $($playerTwoHeading).css('display', 'none');
            //text on "draw cards" button appears to cue player one to click it
            $drawCardsOneButton.css('color', 'white');
            $drawCardsTwoButton.css('color', 'rgb(51,51,51');
            $infectOneButton.css('color', 'rgb(51,51,51');
            $infectTwoButton.css('color', 'rgb(51,51,51');
            $drawCardsOneButton.on('click', drawCardsPlayerOne);
            // text on "infect" button appears and "draw cards" disappears to cue player
            $drawCardsOneButton.on('click', () => {
                $drawCardsOneButton.css('color', 'rgb(51,51,51)');
                $infectOneButton.css('color', 'white');
            });
            //calling infection function
            infectOnePhase();

        } else {
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
            //player two's infection phase is called
            infectTwoPhase();
        }   
    }
}
//========================================
//TIME TO START THE GAME!
//========================================
const startGame = () => { //first, shuffle each deck of cards
    shuffle($cityCards);
    shuffle($infectionCards);
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