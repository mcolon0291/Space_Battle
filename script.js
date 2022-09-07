// prompt()
// prompt to start game

// let startPrompt = prompt("Your ship is surrounded by a fleet of alien ships! Do you want to start the game?")

    // if yes, then startgame 

// prompt to attack alien
// prompts to say how many hp/hull points your ship lost
// prompt to say alien destroyed
    // option to attack next ship OR retreat
// prompt to say game won if all aliens destroyed or lost if player is destroyed


// game start


// game over

// player ship class
class myShip {
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }

    attackAlien() {
        // if alien hull is however many points, then subtract 5 from alien hull
        if (alienShips.hull > 0 ) {
            alienShips.hull - 5;
        }
        // changes enemyStats on html
    }

    // if alien hull is 0, then remove that alien from the array

    retreat() {
        // option to retreat
        // then game over
    }
};

// create new player ship w/ specific values
const helloWorld = new myShip("USS Schwarzenegger", 20, 5, .7)


// setting random values for alien properties
setAliens = function(min, max) {
    return Math.random() * (max - min) + min;
}

// alien ship class, calling setAliens function to sent those random values
class alienShips {
    constructor(hull, firepower, accuracy) {
        this.hull = setAliens(3, 6);
        this.firepower = setAliens(2, 4);
        this.accuracy = setAliens(.6, .8);
    }

    attackPlayer() {
        if (myShip.hull > 0) {
            myShip.hull - this.firepower;
        }
        // changes playerStats on html
    }
}

// alien fleet array, loops over and pushes to create new alien ship
const alienFleet = []
for (let i = 1; i < 6; i++) {
    alienFleet.push(new alienShips())
}

// if alien array is empty, game is over, player wins
if (alienFleet.length === 0) {
    // gameover
    // player wins
}
// 