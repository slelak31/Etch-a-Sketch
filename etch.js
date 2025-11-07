let GridSize = 16;

let drawingActive = false;

let rainbowActive = false;

let eraserActive = false;

let currentColor = 'black';


const container = document.querySelector(".container");
const body = document.querySelector("body");

function fillColor (cell) {
    cell.style.backgroundColor = currentColor;
};

body.addEventListener('mousedown', (e) => {
    drawingActive = true;
    if (e.target.matches('.grid-square')) {
        fillColor(e.target);
    }
    e.preventDefault();
});

body.addEventListener('mouseup', (e) => {
    drawingActive = false;
    e.preventDefault();
});

body.addEventListener('mouseover', (e) => {
    if (drawingActive === true) {
    if (e.target.matches('.grid-square')) {
        fillColor(e.target);
    }
    e.preventDefault();
    }
});

body.addEventListener('mouseleave', (e) => {
    drawingActive = false;
    e.preventDefault();
});


function createGrid (GridSize) {

container.replaceChildren();
container.style.setProperty('--size', GridSize);

for (let i = 0; i < (GridSize * GridSize); i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-square");
    container.appendChild(cell);
}
}

createGrid(GridSize);



