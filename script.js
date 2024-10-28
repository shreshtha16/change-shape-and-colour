const colors = ["#d32f2f", "#1976d2", "#388e3c", "#fbc02d", "#8e24aa", "#f57c00", "#5d4037", "#0288d1", "#c2185b", "#7b1fa2"];
const shapes = [
    "polygon(50% 0%, 0% 100%, 100% 100%)", // triangle
    "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // square
    "circle(50% at 50% 50%)", // circle
    "polygon(0% 25%, 100% 25%, 100% 75%, 0% 75%)", // rectangle
    "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" // diamond
];

function changeColor() {
    const circle = document.getElementById("circle");
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    circle.style.backgroundColor = randomColor;
}

function changeShape() {
    const shape = document.getElementById("shape");
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    shape.style.clipPath = randomShape;
}
