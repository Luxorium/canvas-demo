const canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.display = "block";
const context = canvas.getContext("2d");
document.body.appendChild(canvas);
document.body.style.margin = 0;
