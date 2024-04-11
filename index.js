const gridDiv = document.querySelector(".grid-div");
let rows = [];

for (let j = 0; j < 16; j++) {
  rows[j] = document.createElement("div");
  rows[j].classList.add("row-style");
  gridDiv.appendChild(rows[j]);
  for (let i = 0; i < 16; i++) {
    const div = document.createElement("div");
    div.style.cssText = "background-color: red; height: 50px;";
    // div.classList.add("")
    rows[j].appendChild(div);
  }
}

const gridRows = document.querySelectorAll(".row-style div");

gridRows.forEach((div) => {
  div.addEventListener("mouseover", () => {
    div.style.cssText = "background-color: white; height: 50px; width: 50px";
  });
});

const btn = document.querySelector(".square-settings");

btn.addEventListener("click", () => {
  const userInput = prompt("choose how many squares you want");
  let divSize = 200 / parseInt(userInput) 
  const body = document.getElementsByTagName("body")[0];
  const dynamicGridDiv = document.querySelector(".grid-div")
  body.removeChild(dynamicGridDiv);
  let newGridDiv = document.createElement("div");
  newGridDiv.classList.add("grid-div");
  body.appendChild(newGridDiv)
  for (let j = 0; j < userInput; j++) {
    rows[j] = document.createElement("div");
    rows[j].classList.add("row-style");
    newGridDiv.appendChild(rows[j]);
    for (let i = 0; i < userInput; i++) {
      const div = document.createElement("div");
      div.style.cssText = `background-color: red; height: ${divSize}px; width: ${100}px`;
      rows[j].appendChild(div);
    }
  }
});
