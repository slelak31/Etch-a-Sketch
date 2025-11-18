let GridSize = 16;

let drawingActive = false;

let rainbowActive = false;

let eraserActive = false;

let colorActive = false;

let defaultColor = 'black';

let eraserColor = 'white';


const container = document.querySelector(".container");
const body = document.querySelector("body");

function generateRandomHexColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  // Pad with leading zeros if the hex code is less than 6 digits
  return "#" + randomColor.padStart(6, '0'); 
}

function fillColor (cell) {
    if(rainbowActive){
    cell.style.backgroundColor = generateRandomHexColor();
    }
    else if(eraserActive){
    cell.style.backgroundColor = eraserColor;
    }
    else if(colorActive){
    cell.style.backgroundColor = defaultColor;
    }
    else {
    cell.style.backgroundColor = defaultColor;
    }
};

var color = document.getElementById("color");
color.addEventListener('click', () => {
    if(!colorActive){
    colorActive = true;
    eraserActive = false;
    rainbowActive = false;
    color.style.backgroundColor = 'gray';
    rainbow.style.backgroundColor = 'white';
    erase.style.backgroundColor = 'white';
    }
});

var rainbow = document.getElementById("rainbow");
rainbow.addEventListener('click', () => {
    if(!rainbowActive){
    rainbowActive = true;
    eraserActive = false;
    colorActive = false;
    rainbow.style.backgroundColor = 'gray';
    color.style.backgroundColor = 'white';
    erase.style.backgroundColor = 'white';
    }
});


var erase = document.getElementById("erase");
erase.addEventListener('click', () => {
    if(!eraserActive){
    eraserActive = true;
    rainbowActive = false;
    colorActive = false;
    erase.style.backgroundColor = 'gray';
    color.style.backgroundColor = 'white';
    rainbow.style.backgroundColor = 'white';
    }
});

var clear = document.getElementById("clear");
clear.addEventListener('click', () => {
    createGrid(GridSize);
});

var slider = document.getElementById("myRange");
var output = document.getElementById("gridSize1");
var output2 = document.getElementById("gridSize2");
output.innerHTML = slider.value; // Display the default slider value
output2.innerHTML = slider.value;

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    GridSize = Number(this.value);
    output.innerHTML = this.value;
    output2.innerHTML = this.value;
    createGrid(this.value);
}


body.addEventListener('mousedown', (e) => {
    drawingActive = true;
    if (e.target.matches('.grid-square')) {
        fillColor(e.target);
        e.preventDefault();
    }
});

body.addEventListener('mouseup', (e) => {
    drawingActive = false;
    e.preventDefault();
});

body.addEventListener('mouseover', (e) => {
    if (drawingActive === true) {
    if (e.target.matches('.grid-square')) {
        fillColor(e.target);
        e.preventDefault();
    }
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



