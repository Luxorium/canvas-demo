const canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.display = "block";
const context = canvas.getContext("2d");
document.body.appendChild(canvas);
document.body.style.margin = 0;

function init() {
}

function update() {
}

function render() {
  context.fillStyle = "black";
  context.fillRect(0,0,100,100);
}





function animate() {
  requestAnimationFrame(animate);
  update();
  render();
}
init();
animate();
