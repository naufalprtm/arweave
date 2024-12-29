const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;
const fontSize = 18;
const columns = Math.floor(width / fontSize);
const drops = [];
for (let i = 0; i < columns; i++) {
  drops.push(0);
}

const matrix = "שדי01היו";

function draw() {
  context.fillStyle = "rgba(0,0,0,0.05)";
  context.fillRect(0, 0, width, height);
  context.fontSize = "700 " + fontSize + "px";
  context.fillStyle = "#00ffff";
  for (let i = 0; i < columns; i++) {
    const index = Math.floor(Math.random() * matrix.length);
    const x = i * fontSize;
    const y = drops[i] * fontSize;
    context.fillText(matrix[index], x, y);
    if (y >= canvas.height && Math.random() > 0.99) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

draw();

setInterval(draw, 43);
