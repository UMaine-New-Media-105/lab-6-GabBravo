let ratX;
let ratY;
let cheeseX;
let cheeseY;

function setup() {
  createCanvas(400, 400);

  ratX = 5;
  ratY = 5;

  cheeseX = random(350);
  cheeseY = random(350);
}

function draw() {
  background(220);

  addCheese(cheeseX, cheeseY, 1);
  labRat(ratX, ratY, 1);

  if (dist(ratX, ratY, cheeseX, cheeseY) > 10) {
    addCheese(cheeseX, cheeseY, 0);
  }
}

function labRat(ratX, ratY, size) {
  push();
  translate(ratX, ratY);
  scale(size);

  fill("lightgrey");
  triangle(20, 70, 60, 70, 40, 20);
  fill("pink");
  ellipse(27, 20, 22);
  ellipse(53, 20, 22);
  pop();
}

function addCheese(cheeseX, cheeseY, size) {
  push();
  translate(cheeseX, cheeseY);
  scale(size);

  fill("gold");
  triangle(10, 10, 45, 25, 10, 40);
  pop();
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    ratX = ratX + 5;
  } else if (keyCode === LEFT_ARROW) {
    ratX = ratX - 5;
  }

  if (keyCode === UP_ARROW) {
    ratY = ratY - 5;
  } else if (keyCode === DOWN_ARROW) {
    ratY = ratY + 5;
  }
}
