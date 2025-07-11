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

function determinTheWinner() {}
function gameLogic() {}
function displayGameMessage() {
  //if any clicked change to Wait
  //Afterwards determins which one was clicked and display the image
}

//Handles clicks and determines which option was clicked
options.forEach((option) => {
  option.addEventListener("click", (e) => {
    const optionId = e.currentTarget.id;

    if (optionId === "rock" || optionId === "paper" || optionId === "scissor") {
      gameMessage.innerHTML = `<h1>Wait...</h1>`;
    }
  });
});
