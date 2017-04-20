function setup() {
  createCanvas(640, 480);
}

function draw() {
    if (mouseIsPressed) {
      fill((mouseX / width) * 255, (mouseY / height) * 255, 0, 100);
      stroke(255, 255, 255, 25);
  } else {
      fill(0)
  }
  rect(mouseX,mouseY,50,50);
}
