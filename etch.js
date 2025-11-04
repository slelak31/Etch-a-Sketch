const defaultGridSize = 16;

const container = document.querySelector(".container");

let gridDiv = [];

for (let i = 0; i < (defaultGridSize * defaultGridSize); i++) {
    gridDiv[i] = document.createElement("div")
    gridDiv[i].classList.add("grid-square")
}

for(let j = 0; j < defaultGridSize * defaultGridSize; j++) {
container.appendChild(gridDiv[j]);
}



