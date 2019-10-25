//============================================
//APPLICATION LOGIC AND GAMEPLAY VARIABLES
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

//KEEP COUNT OF TURNS FOR ALTERNATING GAMEPLAY  
    let turnCount = 0;

//CURE STATUSES
    let blueCure = false;
    let blackCure = false;
    let yellowCure = false;
    let redCure = false;