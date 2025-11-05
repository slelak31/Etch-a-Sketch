let GridSize = 16;

let drawingActive = false;

let rainbowActive = false;

let eraserActive = false;

let currentColor = 'black';


const container = document.querySelector(".container");

container.style.setProperty('--size', GridSize);

function fillColor (cell) {
    cell.style.backgroundColor = currentColor;
};

container.addEventListener('mousedown', (e) => {
    drawingActive = true;
    if (e.target.matches('.grid-square')) {
        fillColor(e.target);
    }
    e.preventDefault();
});

let gridDiv = [];

for (let i = 0; i < (GridSize * GridSize); i++) {
    gridDiv[i] = document.createElement("div")
    gridDiv[i].classList.add("grid-square")
    container.appendChild(gridDiv[i]);
}



