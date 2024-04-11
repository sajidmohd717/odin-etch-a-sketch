initGrid();
mouseOverListFunction();

const btn = document.querySelector(".square-settings");

btn.addEventListener("click", () => {
  const userInput = prompt("choose how many squares you want");
  let divSize = parseInt(userInput);
  const body = document.getElementsByTagName("body")[0];
  const gridDiv = document.querySelector(".grid-div");
  body.removeChild(gridDiv);
  let newGridDiv = document.createElement("div");
  newGridDiv.classList.add("grid-div");
  body.appendChild(newGridDiv);
  let rows = [];
  for (let j = 0; j < divSize; j++) {
    rows[j] = document.createElement("div");
    rows[j].classList.add("row-style");
    newGridDiv.appendChild(rows[j]);
    for (let i = 0; i < divSize; i++) {
      const div = document.createElement("div");
      div.classList.add("div-init");
      rows[j].appendChild(div);
    }
  }
  mouseOverListFunction()
});

function initGrid() {
  const gridDiv = document.querySelector(".grid-div");
  let rows = [];

  for (let j = 0; j < 16; j++) {
    rows[j] = document.createElement("div");
    rows[j].classList.add("row-style");
    gridDiv.appendChild(rows[j]);
    for (let i = 0; i < 16; i++) {
      const div = document.createElement("div");
      div.classList.add("div-init");
      rows[j].appendChild(div);
    }
  }
}

function mouseOverListFunction() {
  const gridRows = document.querySelectorAll(".row-style div");

  gridRows.forEach((div) => {
    div.addEventListener("mouseover", () => {
      div.style.cssText = "background-color: white";
    });
  });
}
