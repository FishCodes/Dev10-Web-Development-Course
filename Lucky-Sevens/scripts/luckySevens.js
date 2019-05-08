/*
Name: Stephen Fishbune
Date Created: 5/5/2019
Most recent revision: 5/7/2019

Description: Clear error, validation, and calculation scripts for Lucky Sevens game.
*/

function clearErrors() {    
    if (document.forms["betSevens"]["startBet"].className.indexOf("has-") != -1) {
            
        document.forms["betSevens"]["startBet"].className = "form-control";
    }   
}

function validateItems() {
    clearErrors();
    var bet = document.forms["betSevens"]["startBet"].value;
    if (bet <= 0) {
        alert("Starting bets must be above $0");
        document.forms["betSevens"]["startBet"].className = "form-control has-error";
        document.forms["betSevens"]["startBet"].value = "";
        document.forms["betSevens"]["startBet"].focus();
        return false;
    }

    var result = calcRolls(bet);

    document.getElementById("results").style.display = "block";
    document.getElementById("submitButton").innerText = "Play Again";
    document.getElementById("bet").innerText = bet;
    document.getElementById("brokeRoll").innerText = result[0];
    document.getElementById("maxWon").innerText = result[1];
    document.getElementById("highRoll").innerText = result[2];

    return false;
}

function calcRolls(bet) {
    var money = Number(bet);
    var rollCount = 0;
    var maxWon = money;
    var highRoll = 0;

    while (money > 0) {
        rollCount++;
        var die1 = rollDice();
        var die2 = rollDice();

        if (die1 + die2 == 7) {
            money += 4;
            if (money > maxWon) {
                maxWon = money;
                highRoll = rollCount;
            }
        } else {
            money -= 1;
        }
    }
    var result = [rollCount, maxWon, highRoll];
    return result;
}

function rollDice() {
    return Math.floor(Math.random()*6) +1;
}
