function displayAdditionQuestion() {}

function displaySubtractQuestion() {}

function displayMultiplyQuestion() {}

function incrementScore() {}

function incrementWrongAnswer() {}

function calculateCorrectAnswer() {}

function checkAnswer() {}

function runGame() {
  let num1 = Math.floor(Math.random() * 25) + 1;
  let num2 = Math.floor(Math.random() * 25) + 1;
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
        alert(`You clicked ${buttonType}`);
      }
    });
  }
});
