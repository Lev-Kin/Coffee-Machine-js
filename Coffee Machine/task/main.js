const input = require('sync-input');

const coffeeMachine = {water: 400, milk: 540, beans: 120, cups: 9, money: 550};

const ingredients = [{water: -250, milk: 0, beans: -16, cups: -1, money: 4},
    {water: -350, milk: -75, beans: -20, cups: -1, money: 7},
    {water: -200, milk: -100, beans: -12, cups: -1, money: 6}];

const coffeeMachineBuy = () => {
    const inputBuy = input(`\nWhat do you want to buy?\n1 - espresso, 2 - latte, 3 - cappuccino, back - back to menu:\n`);

    const coffees = [1, 2, 3];
    if (inputBuy === "back") {
        return;
    }

    if (coffees.indexOf(inputBuy) === -1) {
        return console.log(`Error input, please try again\n`);
    }

    for (let i in coffeeMachine) {
        if (coffeeMachine[i] >= Math.abs(ingredients[inputBuy - 1][i])) {
            coffeeMachine[i] += ingredients[inputBuy - 1][i];
        } else {
            return console.log(`\nSorry, not enough ${coffeeMachine[i]}`);
        }
    }

    console.log(`I have enough resources, making you a coffee!`);
};

const coffeeMachineFill = () => {
    coffeeMachine["water"] += checkInputNum("\nWrite how many ml of water you want to add:\n");
    coffeeMachine["milk"] += checkInputNum("\nWrite how many ml of milk you want to add:\n");
    coffeeMachine["beans"] += checkInputNum("\nWrite how many grams of coffee beans you want to add:\n");
    coffeeMachine["cups"] += checkInputNum("\nWrite how many disposable coffee cups you want to add:\n");
};

const coffeeMachineTake = () => {
    console.log(`I gave you $${coffeeMachine["money"]}`);
    coffeeMachine["money"] = 0;
};

const coffeeMachineRemaining = () => {
    console.log(`\nThe coffee machine has:
========================
= ${coffeeMachine["water"]} ml of water
= ${coffeeMachine["milk"]} ml of milk
= ${coffeeMachine["beans"]} g of coffee beans
= ${coffeeMachine["cups"]} disposable cups
= $${coffeeMachine["money"]} of money
========================\n`);
};

//------------------------------------
const checkInputNum = (text) => {
    let inputted;
    do {
        inputted = Number(input(text))
    } while (isNaN(inputted));
    return inputted;
}
//------------------------------------

const choice = () => {

    let work = true;
    while (work) {

        let select = input(`\nWrite action (buy, fill, take, remaining, exit):\n`);
        switch (select) {
            case "buy":
                coffeeMachineBuy();
                break;

            case "fil":
                coffeeMachineFill();
                break;

            case "take":
                coffeeMachineTake();
                break;

            case "remaining":
                coffeeMachineRemaining();
                break;

            case "exit":
                work = false;
                console.log(`\t=====================\n\t=  Have a nice day  =\n\t=       (^-^)/      =\n\t=====================\n`)
                break;

            default:
                console.log(`Incorrect choice! Re-enter.\n`)
        }
    }
};

choice();
