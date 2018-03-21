/* 
My blackjack App
coded by Jacob Stockwell

project from pluralsight
credit: by Mark Zamoyta

*/

//card values
let suits = ['Hearts','Clubs','Diamonds','Spades']

let values = ['Ace','King','Queen','Jack','Ten', 'Nine','Eight',
'Seven', 'Six','Five','Four','Three','Two',];


//Dom Variables
let textArea = document.getElementById('text-area'),
    newGameButton = document.getElementById('new-game-button'),
    hitButton = document.getElementById('hit-button'),
    stayButton = document.getElementById('stay-button');

//Game Variables
let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = [];

hitButton.style.display = 'none';
stayButton.style.display = 'none';
showStatus();


//starts new game 
newGameButton.addEventListener('click',function() {
    gameStarted = true;
    gameOver = false;
    playerWon = false;
    
    //creates new deck of cards 
    deck = createDeck();
    shuffleDeck(deck);
    dealerCards = [ getNextCard(), getNextCard() ];
    playerCards = [ getNextCard(), getNextCard() ];
    
    newGameButton.style.display = 'none';
    hitButton.style.display= 'inline';
    stayButton.style.display= 'inline';
    showStatus();
});

//hit and stay Button Event handlers 
hitButton.addEventListener('click', function(){
    playerCards.push(getNextCard());
    checkForEndOfGame();
    showStatus();
});

stayButton.addEventListener('click', function(){
    gameOver = true;
    checkForEndOfGame();
    showStatus();
});

//creates The Deck with both Arrays
function createDeck() {
    
    let deck = [];

for (let suitIdx = 0; suitIdx < suits.length; suitIdx++){

    for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
        let card = {
            suit: suits[suitIdx],
            value: values[valueIdx]
        };
        deck.push(card); //matches each card with face and suit then moves on to next
        
        }
    }
    return deck;
}

//shuffles cards 
function shuffleDeck(deck) {
    for (let i = 0; i < deck.length; i++) {
        let swapIdx = Math.trunc(Math.random() * deck.length); //picks card out of the 52 at random 
        let tmp = deck [swapIdx];
        deck [swapIdx] = deck [i];
        deck[i] = tmp;
        
    }
}

function getCardString(card){
    return card.value + ' of ' + card.suit; //puts card face and suit together
}

function getNextCard() {
    return deck.shift(); //takes the first card down and move all cards down to the left
}

//checks array of card values and matches them 
function getCardNumaricalValue(card) {
    switch (card.value) {
        case 'Ace':
            return 1;
        case 'Two':
            return 2;
        case 'Three':
            return 3; 
        case 'Four':
            return 4;
        case 'Five':
            return 5;
        case 'Six':
            return 6;
        case 'Seven':
            return 7;
        case 'Eight':
            return 8;
        case 'Nine':
            return 9;           
        default:
            return 10;
    }
}

//checks for Ace defualt Ace = 1
function getScore(cardArray) {
    let score = 0,
        hasAce = false;
    for (let i = 0; i < cardArray.length; i++) {
        let card = cardArray[i];
        score += getCardNumaricalValue(card);
        if (card.value === 'Ace') {
            hasAce = true;
        }
    }
    if (hasAce && score + 10 <= 21) {
        return score + 10;
    }
    return score;
}
//updates score after deal
function updateScores() {
    dealerScore = getScore(dealerCards);
    playerScore = getScore(playerCards);
}

function checkForEndOfGame() {
    //Code goes here

    updateScores();

    if (gameOver) {
        
        while (dealerScore < playerScore 
            && playerScore <= 21
            && dealerScore <= 21 ) {
                dealerCards.push(getNextCard());
        updateScores();
        }
    }
    if (playerScore > 21) {
        playerWon = false;
        dealerWon = true;
    }
    else if (dealerScore > 21 ) {
        playerWon = true;
        dealerWon = false;
    } else if (gameOver) {
        if (playerScore > dealerScore) {
            playerWon = true;
        }
        else{
            playerWon = false;
        }
    }

}

function showStatus () {
    if (!gameStarted) {
        textArea.innerText = 'Welcome to BlackJack!';
        return;
    }

    //gives 2 cards to the dealer
    let dealerCardString = '';
    for (let i = 0; i < dealerCards.length; i++) {
        dealerCardString += getCardString(dealerCards[i]) + '\n';
        
    }
    
    // gives 2 cards to the player 
    let playerCardString = '';
    for (let i = 0; i < playerCards.length; i++) {
        playerCardString += getCardString(playerCards[i]) + '\n';
        
    }
    
    updateScores();

    //shows score
    textArea.innerText = 
    'Dealer has:\n' + 
    dealerCardString + 
    '(score: ' + dealerScore + ')\n\n' + 

    'player has:\n' + 
    playerCardString + 
    '(score: ' + playerScore + ')\n\n';

    if (gameOver) {
        if (playerWon) {
            textArea.innerText += "You Win!!"
        }
        else{
            textArea.innerText += ' Dealer Wins!!'
        }
        newGameButton.style.display = 'inline';
        hitButton.style.display = 'none';
        stayButton.style.display = 'none';
    }
/*
    //displays all cards 
    for (var i = 0; i < deck.length; i++) {
   textArea.innerText += '\n' + getCardString(deck[i]);
    }
   */
}

