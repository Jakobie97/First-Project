let sum = 0;

let cards = []
let hasBlackJack = false; 
let isAlive = true;

let message = "";
let messageEl = document.getElementById("message-el");

let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("cards-el");

function startGame() {
    
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard

    renderGame();

    return sum;
}


function renderGame() 
{
    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;
    cardEl.textContent = "Cards: ";

    for (let index = 0; index < cards.length; index++) {
      cardEl.textContent += cards[index] + " ";
       
    }


    if (sum <= 20) 
    {
        message = ("do you want to draw another card?");

    }
    else if (sum == 21) 
    {
        message = ("you win this game!");
        hasBlackJack = true;
    }
    else
    {
        message = ("You Lose!");
        isAlive = false; 
    }

    messageEl.textContent = message;

}

function getRandomCard() 
{
    let randomNum = Math.floor(Math.random() * 9) + 1;

    if (randomNum == 1) 
    {
        return 11;
    }
    else if (randomNum > 10) 
    {
        return 10;
    }
    console.log(randomNum);
    
    return randomNum;
}

function Draw() {

    if (isAlive == true && hasBlackJack == false) {    

        let card = getRandomCard();

        sum += card;
        cards.push(card);
        
        renderGame();
    }
}


