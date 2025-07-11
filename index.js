//When clicked one of the options
//Hands are moving up and down
//H2 text changes to Wait...

//When it stops ->
//Computer randomly choose the choise
//Left side User
//Right side Computer
//The images changes to the made choises
//Text changed according to winner -> User Won!! or Cpu Won!! or Match Draw

//When clicked again, it starts again

//---Random number
//---Need to detected which option is clicked
//---Implement game logic

const options = document.querySelectorAll("#options > div");
const gameMessage = document.getElementById("game-message");
const gamePlay = document.getElementById("game-play");
const rockLeft = document.getElementById("rock-left");
const rockRight = document.getElementById("rock-right");

let degrees = 90;

function determinTheWinner() {}
function gameLogic() {}

//Display the message of the winner - computer or user
function displayWinnerMessage() {
  gameMessage.innerHTML = `<h1>Cpu Won!!</h1>`; // This is hardcoded for now
}

//Display the choice of the user and computer on the screen
function displayChoice(option) {
  gamePlay.innerHTML = `
        <img
          src="images/${option}.png"
          alt="${option}-left"
          class="rock-left"
          id="rock-left"
        />
        
         <img
          src="images/${option}.png"
          alt="${option}-right"
          class="rock-right"
          id="rock-right"
        />`;
}

//Move hands up & down
function moveHands() {
  if (degrees === 90) {
    degrees += 5;
  } else {
    degrees -= 5;
  }

  rockLeft.style.transform = `rotate(${degrees}deg)`;
  rockRight.style.transform = `rotate(-${degrees}deg) scaleX(-1)`;
}

//Handles the movement of hands + displays the message
function handleAnimation() {
  const handsInterval = setInterval(moveHands, 1000);
  setTimeout(function () {
    clearInterval(handsInterval);
  }, 4000);
  setTimeout(displayWinnerMessage, 4000);
}

//Handles clicks and determines which option was clicked
options.forEach((option) => {
  option.addEventListener("click", (e) => {
    const optionId = e.currentTarget.id;

    if (
      optionId === "rock" ||
      optionId === "paper" ||
      optionId === "scissors"
    ) {
      gameMessage.innerHTML = `<h1>Wait...</h1>`;
    }

    handleAnimation();
    displayChoice(optionId); // To check how to updated this
  });
});
