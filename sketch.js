let particles = [];
const num = 5000;
let canvas

const noiseScale = Math.floor(Math.random()* 500) * 0.0001;

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvasForHTML');

  for(let i = 0; i < num; i ++){
    particles.push(createVector(random(width), random(height)));
  }
  stroke(75);
  
}

function draw() {
  background(0, 5);
  for(let i = 0; i < num; i++){
    let p = particles[i];
    point(p.x, p.y);
    let n = noise(p.x * noiseScale, p.y * noiseScale);
    let a = TAU * n;
    p.x += cos(a) * 0.4;
    p.y += sin(a) * 0.3;
    if(!onScreen(p)) {
      p.x = random(width);
      p.y = random(height);
    }
  }
}
function mouseReleased(){
  noiseSeed(millis());
}

function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}