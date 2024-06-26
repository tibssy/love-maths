function displayAdditionQuestion(operand1, operand2) {
  document.getElementById("operand1").textContent = operand1;
  document.getElementById("operand2").textContent = operand2;
  document.getElementById("operator").textContent = "+";
}

function displaySubtractQuestion() {}

function displayMultiplyQuestion() {}

function incrementScore() {}

function incrementWrongAnswer() {}

function calculateCorrectAnswer() {}

function checkAnswer() {}

function runGame(gameType) {
  let num1 = Math.floor(Math.random() * 25) + 1;
  let num2 = Math.floor(Math.random() * 25) + 1;

  switch (gameType) {
    case "addition":
      displayAdditionQuestion(num1, num2);
      break;
    default:
      alert(`Unkown game type ${gameType}`);
      throw `Unkown game type ${gameType}. Aborting!`;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByTagName("button");

  for (let button of buttons) {
    console.log(button);
    button.addEventListener("click", function () {
      let buttonType = this.getAttribute("data-type");
      if (buttonType === "submit") {
        alert("You clicked submit");
      } else {
        runGame(buttonType);
      }
    });
  }

  runGame("addition");
});
