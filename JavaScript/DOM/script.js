const redSquare = document.querySelector(".red-square");
redSquare.style.backgroundColor = "blue";

const elementsToChange = document.querySelectorAll(".js-target");
for (let i = 0; i < elementsToChange.length; i++) {
  const elementText = elementsToChange[i];
  elementText.innerText = "Modified by JavaScript!!";
}

const input = document.querySelector(".input-to-copy");
const paragraph = document.querySelector(".p-to-copy-to");

input.addEventListener("keyup", function () {
  paragraph.innerText = input.value;
});

const button = document.querySelector(".event-button");
button.addEventListener("click", function () {
  alert("Button was clicked!");
});

const colorInput = document.querySelector(".color-to-change");
colorInput.addEventListener("input", function () {
  redSquare.style.backgroundColor = colorInput.value;
});

document
  .querySelector(".button-container")
  .addEventListener("click", function (event) {
    alert("You clicked button " + event.target.innerText);
  });
