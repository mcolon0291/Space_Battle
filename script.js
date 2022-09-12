// grabbing playerStats and enemyStats from index to use for changing their stats as game progresses
let playerStats = document.querySelector(".playerStats")
let enemyStats = document.querySelector(".enemyStats")

let roundWon = "Congratulations! You defeated the alien ship!"
let gameWon = "You have destroyed all of the alien ships! YOU WON!"
let gameOver = "GAME OVER!"
let gameLost = "GAME OVER. You have lost the game."

let gameMessages = [roundWon, gameWon, gameOver, gameLost]


// player ship class
class spaceShip {
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }}


let helloWorld = new spaceShip("USS Schwarzeneggar", 20, 5, .7)



// setting random values for alien properties
setAliens = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// alien ship class, calling setAliens function to set those random values
class alienShips {
    constructor(hull, firepower, accuracy) {
        this.hull = setAliens(3, 6);
        this.firepower = setAliens(2, 4);
        this.accuracy = setAliens(.6, .8);
    }}

const alienFleet = []
for (let i = 1; i < 6; i++) {
    alienFleet.push(new alienShips())
}



// functions to change stats for both the player and aliens
function updatePlayer() {
    playerStats.innerHTML = `Hull: ${helloWorld.hull} <br> Firepower: ${helloWorld.firepower} <br> Accuracy: ${helloWorld.accuracy}`
}
function updateAlien() {
    enemyStats.innerHTML = `Hull: ${alienFleet[0].hull} <br> Firepower: ${alienFleet[0].firepower} <br> Accuracy: ${alienFleet[0].accuracy}`
}


// starting message, set delay for page to load
setTimeout(() => {
    let startPrompt = alert("Your ship is surrounded by a fleet of alien ships! Get ready to fight!");
    newFight();
}, '3000')

// starts attacks
function newFight() {
    // if alien array is empty, player wins
    if (alienFleet.length != 0) {
    
        setTimeout(() => {
            let playerResp = confirm("Do you want to attack the alien ship?")
            
            if (helloWorld.hull > 0 && alienFleet[0].hull > 0) {
                
                    if (playerResp == true){
                        console.log("You are about to attack...")
                        alert("You are about to attack...");
                        attackAlien(alienFleet[0]);
                    }
                    if (playerResp == false){
                        console.log("You are about to exit the game.")
                        alert("You are about to exit the game.");
                        alert(gameMessages[2]);
                        console.log(gameMessages[2]);
                    }
            }
        }, '1000')
    }
}



function attackAlien() {
    if (Math.random() <= helloWorld.accuracy) {
        alienFleet[0].hull -= helloWorld.firepower;
        
        updateAlien();

		setTimeout(() => {
           alert("You have hit the alien ship! Alien hull sustained " + helloWorld.firepower + " damage.");
           console.log("You have hit the alien ship! Alien hull sustained " + helloWorld.firepower + " damage.");
		}, '1000')
        
 
 		setTimeout(() => {
        // if alien ship survives, it attacks player. if hull is 0, alien ship removed
            if (alienFleet[0].hull > 0) {
                attackPlayer();
            } else if (alienFleet[0].hull <= 0) {
                alienFleet.shift();
                alert(gameMessages[0])
                console.log(gameMessages[0])
                    
                if (alienFleet.length === 0) {
                    setTimeout(() => {
                        alert(gameMessages[1])
                    }, '1000')
                } else {
                    setTimeout(() => {
                        alert("A new alien ship approaches...")
                        console.log("A new alien ship approaches...")
                    }, '1000')
                            
                    setTimeout(() => {
                        updateAlien();
                    }, '1000')

                    setTimeout(() => {
                        newFight()
                    }, '1000')  
                }
		    }
        }, '1000')
    } else {
        setTimeout(() => {
            alert("You missed!")
            console.log("You missed!");
            attackPlayer();
	    }, '1000')
    }
}



function attackPlayer() {
    if (Math.random() <= alienFleet[0].accuracy) {
        helloWorld.hull -= alienFleet[0].firepower;

        updatePlayer();
        
        setTimeout(() => {
            alert("The alien ship attacked! You have been hit!")
            console.log("The alien ship attacked! You have been hit!");
		}, '1000')
// if player ship survives, attacks. if player hull at zero, game over  
        setTimeout(() => {
            if (helloWorld.hull > 0) {
                newFight();
            } else if (helloWorld.hull <= 0) {
                alert("You hull has been destroyed...");
                console.log("You hull has been destroyed...");
                alert(gameMessages[3]);
                console.log(gameMessages[3])
                    
                setTimeout(() => {
                    newFight();
				}, '1000')
            }
		}, '1000')
              
    } else {
    	setTimeout(() => {
           alert("The alien ship attacked and missed!")
            console.log("The alien ship attacked and missed!");
            newFight();
		}, '1000')
    }
}