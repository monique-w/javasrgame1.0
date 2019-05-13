let user = "";
function startGame() {
let answer = prompt("Do you want to play a game?"); //also use while loop

// if they say yes
if (answer.toLowerCase() === "yes")  { // answer is "yes"
    
  user = prompt("What is your name?");
  startCombat();
}
}
startGame();

function startCombat() {
    

  // define variables
  let userHealth = 40;
  let grantHealth = 10;
  let winCount = 0;
  
  
  

  while (winCount < 3) { // they fight
    let newAnswer = prompt("Would you like to attack or quit?");
    if (newAnswer === "attack") {
        grantHealth = grantHealth - getDamage();
        userHealth = userHealth - getDamage();

        
    } else {
      break;
    }
    grantHealth = grantHealth - getDamage();
    userHealth = userHealth - getDamage();

    console.log(`${user} has ${userHealth} health remaining. Grant the Mighty Chicken has ${grantHealth} health remaining.`);
    if (grantHealth < 1) {
          console.log(`Grant is defeated ${winCount + 1} time/s.`);
      
          // win count goes to user
          winCount = winCount + 1;  
          if (winCount === 3){
            
            console.log(`Grant gives up! ${user} wins!`);
            
              // the game ends
              break;
          }
        // grant's health resets
        grantHealth = 10;
        console.log("Then Grant gets back up!")
        }
    
      if (userHealth < 1){
        console.log("You are defeated.");
      }
      
        
        // the game ends
    
          
          
    
  }

}

function getDamage() {
    return Math.ceil(Math.random() * 5);   
 }