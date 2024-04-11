const gridDiv = document.querySelector(".grid-div");
let rows = [];

for (let j = 0; j < 16; j++) {
  rows[j] = document.createElement("div");
  rows[j].classList.add("row-style");
  gridDiv.appendChild(rows[j]);
  for (let i = 0; i < 16; i++) {
    const div = document.createElement("div");
    div.style.cssText = "background-color: red; height: 50px; width: 50px";
    rows[j].appendChild(div);
  }
}

const gridRows = document.querySelectorAll(".row-style div");

gridRows.forEach((div) => {
  div.addEventListener("mouseover", () => {
    div.style.cssText = "background-color: white; height: 50px; width: 50px";
  });
});
