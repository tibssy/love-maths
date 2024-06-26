function displayAdditionQuestion(operand1, operand2) {
  document.getElementById("operand1").textContent = operand1;
  document.getElementById("operand2").textContent = operand2;
  document.getElementById("operator").textContent = "+";
}

function displaySubtractQuestion(operand1, operand2) {
  let operands =
    operand1 < operand2 ? [operand2, operand1] : [operand1, operand2];
  document.getElementById("operand1").textContent = operands[0];
  document.getElementById("operand2").textContent = operands[1];
  document.getElementById("operator").textContent = "-";
}

function displayMultiplyQuestion(operand1, operand2) {
  document.getElementById("operand1").textContent = operand1;
  document.getElementById("operand2").textContent = operand2;
  document.getElementById("operator").textContent = "x";
}

function incrementScore() {
  let score = parseInt(document.getElementById("score").textContent);
  document.getElementById("score").textContent = ++score;
}

function incrementWrongAnswer() {
  let incorrect = parseInt(document.getElementById("incorrect").textContent);
  document.getElementById("incorrect").textContent = ++incorrect;
}

function calculateCorrectAnswer() {
  let operand1 = parseInt(document.getElementById("operand1").textContent);
  let operand2 = parseInt(document.getElementById("operand2").textContent);
  let operator = document.getElementById("operator").textContent;

  switch (operator) {
    case "+":
      return [operand1 + operand2, "addition"];
    case "-":
      return [operand1 - operand2, "subtract"];
    case "x":
      return [operand1 * operand2, "multiply"];
    case "/":
      return;
    default:
      alert(`Unimplemented operator ${operator}`);
      throw `Unimplemented operator ${operator}. Aborting!`;
  }
}

function checkAnswer() {
  let userAnswer = parseInt(document.getElementById("answer-box").value);
  let calculatedAnswer = calculateCorrectAnswer();
  let isCorrect = userAnswer === calculatedAnswer[0];

  if (isCorrect) {
    incrementScore();
    alert("Hey! You got it right! :)");
  } else {
    incrementWrongAnswer();
    alert(
      `Awwww.... you answered ${userAnswer}. The correct answer is ${calculatedAnswer[0]}.`
    );
  }

  runGame(calculatedAnswer[1]);
}

function runGame(gameType) {
  let num1 = Math.floor(Math.random() * 25) + 1;
  let num2 = Math.floor(Math.random() * 25) + 1;

  switch (gameType) {
    case "addition":
      displayAdditionQuestion(num1, num2);
      break;
    case "subtract":
      displaySubtractQuestion(num1, num2);
      break;
    case "multiply":
      displayMultiplyQuestion(num1, num2);
      break;
    default:
      alert(`Unkown game type ${gameType}`);
      throw `Unkown game type ${gameType}. Aborting!`;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByTagName("button");

  for (let button of buttons) {
    button.addEventListener("click", function () {
      let buttonType = this.getAttribute("data-type");
      if (buttonType === "submit") {
        checkAnswer();
      } else {
        runGame(buttonType);
      }
    });
  }

  runGame("addition");
});
