// Colors 
let colors = ['#F8B195', '#F67280', '#C06C84', '#6C5B7B', '#355C7D', '#99B898', '#FECEAB'];

// Variable 
let button = document.getElementById('button');
let canvas = document.getElementById('canvas');

// Event listener
button.addEventListener('click', changeColor);

// Function
function changeColor(){
    // Select random value from array index
    let index = parseInt((Math.random()*colors.length)+1);

    // Change canvas div
    canvas.style.background = `${colors[index]}`;
}
