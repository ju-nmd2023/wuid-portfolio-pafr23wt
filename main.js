/** @format */

let x = 200;
let y = 200;
let cloudX = 200;
let cloudY = 200;
let sunX = 200;
let sunY = 200;
let cactusX = 200;
let cactusY = 200;
let bubbles = [];
let waterDrops = [];
let waterTankX = 100;
let waterTankY = 100;
let cactuses = [];
let gameIsRunning = false;
let gameEnd = false;
let velocity = 0.5;
const acceleration = 0.1;
let speed = 1;
let xDirection = 0;
let enterPressed = false;
let collectedWaterDrops = 0;
let elapsedTime = 0;
let speedIncrement = 5.0;
const GameState = {
  MENU: "menu",
  PLAYING: "playing",
  PAUSED: "paused",
  GAME_OVER: "game_over",
};

let currentState = GameState.MENU;

function setup() {
  createCanvas(600, 750);
  generateWaterDrops();
}

class WaterDrop {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.isVisible = true;
  }

  draw() {
    if (this.isVisible) {
      // Water drop
      noStroke();
      fill(121, 205, 244);
      ellipse(this.x, this.y, 20, 40);

      // Reflection
      fill(255, 255, 255);
      ellipse(this.x - 2, this.y, 10, 30);
      fill(121, 205, 244);
      ellipse(this.x, this.y, 10, 30);
    }
  }

  checkCollision(camelX, camelY) {
    if (this.isVisible && dist(camelX, camelY, this.x, this.y) < 50) {
      this.isVisible = false;
      camel.scale += 0.1; //the camel gets bigger while catching drops
      collectedWaterDrops++;
      speedIncrement += 5; // You can adjust this value as needed
      speedIncrement += 7; // You can adjust this value as needed
      speedIncrement += 10; // You can adjust this value as needed
      speedIncrement += 15; // You can adjust this value as needed
    }
  }
}

function generateWaterDrops() {
  for (let i = 0; i < 4; i++) {
    let waterDropX = random(100, width - 50);
    let waterDropY = random(0, 300);
    waterDrops.push(new WaterDrop(waterDropX, waterDropY));
  }
}

function drawWaterDrops() {
  waterDrops.forEach((drop) => {
    drop.draw();
    drop.y += 0.3; // Move the water drops downwards
    drop.x -= 0.5;
  });
}

function checkWaterDropCollision(camelX, camelY) {
  waterDrops.forEach((drop) => {
    drop.checkCollision(camelX, camelY);
  });
}

//watertank
function waterTank(waterTankX, waterTankY) {
  noStroke();
  fill(121, 205, 244);
  ellipse(waterTankX + 50, waterTankY + 27.5, 35, 40);
  ellipse(waterTankX + 50, waterTankY + 40, 35, 10);
  ellipse(waterTankX + 50, waterTankY + 45, 35, 10);
  ellipse(waterTankX + 50, waterTankY + 50, 35, 10);
  ellipse(waterTankX + 50, waterTankY + 55, 35, 10);
  ellipse(waterTankX + 50, waterTankY + 60, 35, 10);
  ellipse(waterTankX + 50, waterTankY + 65, 35, 10);
  ellipse(waterTankX + 50, waterTankY + 70, 35, 10);
  rect(waterTankX + 32.5, waterTankY + 71, 35, 10, 10);

  // Lid
  fill(187, 189, 191);
  rect(waterTankX + 42.5, waterTankY, 15, 10);

  // Lid stripes
  fill(0, 0, 0);
  rect(waterTankX + 44, waterTankY, 0.5, 10);
  rect(waterTankX + 45.5, waterTankY, 0.5, 10);
  rect(waterTankX + 47, waterTankY, 0.5, 10);
  rect(waterTankX + 48.5, waterTankY, 0.5, 10);

  // White reflection
  fill(255, 255, 255);
  ellipse(waterTankX + 47.5, waterTankY + 27.5, 25, 30);
  fill(121, 205, 244);
  ellipse(waterTankX + 49, waterTankY + 27.5, 25, 35);
}

function dunes(x, y) {
  //sky

  background(239, 227, 210);

  //dunes
  fill(192, 120, 50);
  noStroke();
  ellipse(x - 100, y + 400, 300);
  ellipse(x + 100, y + 420, 200, 200);
  ellipse(x + 350, y + 400, 250, 300);
  ellipse(x + 600, y + 400, 300);
  ellipse(x + 450, y + 500, 250, 300);
  ellipse(x + 700, y + 500, 250, 200);

  //sand
  fill(202, 143, 66);
  noStroke();
  rect(x - 200, y + 400, 1000, 300);

  //mud
  fill(101, 70, 33);
  noStroke();
  ellipse(x + 500, y + 590, 300);
  ellipse(x + 700, y + 620, 500, 300);
  ellipse(x - 100, y + 640, 300);
  ellipse(x + 200, y + 620, 500, 300);
  fill(88, 57, 39);
  noStroke();
  ellipse(x - 100, y + 520, 20);
  ellipse(x - 140, y + 560, 20);
  ellipse(x - 80, y + 570, 30, 20);
  ellipse(x, y + 570, 40, 30);
  ellipse(x, y + 570, 30);
  ellipse(x + 100, y + 570, 30);
  ellipse(x + 70, y + 520, 20);
  ellipse(x + 140, y + 520, 20);
  ellipse(x + 200, y + 550, 30);
  ellipse(x + 300, y + 550, 30);
  ellipse(x + 250, y + 520, 20, 15);
  ellipse(x + 350, y + 570, 35);
  ellipse(x + 100, y + 570, 30);
  ellipse(x + 400, y + 500, 20);
  ellipse(x + 540, y + 520, 20);
  ellipse(x + 600, y + 550, 30);
  ellipse(x + 700, y + 550, 30);
  ellipse(x + 650, y + 520, 20, 15);
  ellipse(x + 550, y + 570, 35);
  ellipse(x + 470, y + 570, 35);
}

class Cactus {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw() {
    fill(102, 124, 40);
    rect(this.x + 25, this.y, this.width / 2, this.height, 10);
    rect(
      this.x + this.width * 0.2,
      this.y - this.height * 0.4,
      this.width * 0.6,
      this.height * 0.4,
      100
    );
    rect(
      this.x + this.width * 0.4,
      this.y - this.height * 0.6,
      this.width * 0.2,
      this.height * 0.2,
      100
    );
    rect(
      this.x - this.width / 25,
      this.y + 20 - this.height * 0.2,
      this.width * 0.3,
      this.height * 0.4,
      5
    );
  }

  //

  hitTest(x, y, width, height) {
    return (
      x < this.x + this.width &&
      x + width > this.x &&
      y < this.y + this.height &&
      y + height > this.y - this.height
    );
  }
}

let cactus = new Cactus(200, 500, 100, 100);
let anotherCactus = new Cactus(500, 500, 100, 100);
let anotherCactus1 = new Cactus(200, 500, 100, 100);

function sun() {
  //cloud
  fill(255, 255, 255, 200);
  stroke(255, 255, 255, 10);
  ellipse(cloudX + 100, cloudY + 10, 70, 60);
  ellipse(cloudX + 70, cloudY + 10, 60, 40);
  ellipse(cloudX + 140, cloudY + 15, 50, 40);

  fill(255, 255, 255, 200);
  stroke(255, 255, 255, 10);
  ellipse(cloudX + 250, cloudY + 70, 70, 60);
  ellipse(cloudX + 220, cloudY + 70, 60, 40);
  ellipse(cloudX + 290, cloudY + 75, 50, 40);

  fill(255, 255, 255, 200);
  stroke(255, 255, 255, 10);
  ellipse(cloudX + 250, cloudY - 70, 70, 60);
  ellipse(cloudX + 220, cloudY - 70, 60, 40);
  ellipse(cloudX + 290, cloudY - 65, 50, 40);
  cloudX = cloudX + 0.7;
  if (cloudX > 750) {
    cloudX = -250;
  }

  //sun
  push();
  fill(250, 210, 160);
  ellipse(sunX - 90, sunY - 50, 140);
  fill(251, 140, 26);
  ellipse(sunX - 90, sunY - 50, 100);
  pop();
}
let camelX = 100;
let camelY = 100;

let camelA = 100;
let camelB = 100;

let rotationAngle = 0;

class Camel {
  constructor(x, y, width, height, scale) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.scale = scale;
  }

  draw() {
    const scale = this.scale;
    fill(0, 0, 0);
    ellipse(this.x + 10, this.y + 40, 45);
    // camel head
    push();
    translate(0, -160 * this.scale);
    fill(219, 165, 119);
    ellipse(
      this.x + 150 * scale,
      this.y + 150 * scale,
      (this.width - 20) * scale,
      (this.height - 20) * scale
    );

    // camel nose
    noStroke();
    fill(219, 165, 119);
    ellipse(
      this.x + 175 * scale,
      this.y + 162 * scale,
      (this.width - 40) * scale,
      (this.height - 40) * scale
    );

    // camel ears
    push();
    rotate(radians(sin(rotationAngle) * 0.2));
    fill(219, 165, 119);
    ellipse(
      this.x + 155 * scale,
      this.y + 110 * scale,
      (this.width - 90) * scale,
      (this.height - 30) * scale
    );
    ellipse(
      this.x + 128 * scale,
      this.y + 120 * scale,
      (this.width - 90) * scale,
      (this.height - 30) * scale
    );
    pop();

    // camel neck
    ellipse(
      this.x + 123 * scale,
      this.y + 200 * scale,
      (this.width - 60) * scale,
      (this.height + 50) * scale
    );

    // neck dots
    push();
    fill(223, 204, 183);
    ellipse(
      this.x + 120 * scale,
      this.y + 152 * scale,
      (this.width - 96) * scale,
      (this.height - 92) * scale
    );
    ellipse(
      this.x + 112 * scale,
      this.y + 162 * scale,
      (this.width - 96) * scale,
      (this.height - 92) * scale
    );
    ellipse(
      this.x + 120 * scale,
      this.y + 172 * scale,
      (this.width - 96) * scale,
      (this.height - 92) * scale
    );
    ellipse(
      this.x + 112 * scale,
      this.y + 182 * scale,
      (this.width - 96) * scale,
      (this.height - 92) * scale
    );
    pop();

    // camel body
    ellipse(
      this.x + 35 * scale,
      this.y + 255 * scale,
      (this.width + 100) * scale,
      this.height * scale
    );

    // camel legs
    push();
    rotate(radians(sin(rotationAngle) * 0.5));
    ellipse(
      this.x + 100 * scale,
      this.y + 320 * scale,
      (this.width - 90) * scale,
      this.height * scale
    );
    ellipse(
      this.x + 80 * scale,
      this.y + 320 * scale,
      (this.width - 90) * scale,
      this.height * scale
    );
    ellipse(
      this.x - 10 * scale,
      this.y + 320 * scale,
      (this.width - 90) * scale,
      this.height * scale
    );
    ellipse(
      this.x - 30 * scale,
      this.y + 320 * scale,
      (this.width - 90) * scale,
      this.height * scale
    );

    // feet
    fill(129, 88, 67);
    ellipse(
      this.x + 100 * scale,
      this.y + 360 * scale,
      (this.width - 92) * scale,
      (this.height - 80) * scale
    );
    ellipse(
      this.x + 80 * scale,
      this.y + 360 * scale,
      (this.width - 92) * scale,
      (this.height - 80) * scale
    );
    ellipse(
      this.x - 10 * scale,
      this.y + 360 * scale,
      (this.width - 92) * scale,
      (this.height - 80) * scale
    );
    ellipse(
      this.x - 30 * scale,
      this.y + 360 * scale,
      (this.width - 92) * scale,
      (this.height - 80) * scale
    );
    rotationAngle += 0.2;
    pop();

    // camel tail
    ellipse(
      this.x - 65 * scale,
      this.y + 255 * scale,
      (this.width - 50) * scale,
      (this.height - 90) * scale
    );

    // camel blanket
    fill(211, 117, 100);
    ellipse(
      this.x + 30 * scale,
      this.y + 210 * scale,
      (this.width - 50) * scale,
      (this.height + 10) * scale
    );
    ellipse(
      this.x,
      this.y + 220 * scale,
      (this.width - 50) * scale,
      (this.height - 10) * scale
    );
    ellipse(
      this.x + 55 * scale,
      this.y + 220 * scale,
      (this.width - 50) * scale,
      (this.height - 10) * scale
    );

    // stripes on blanket
    ellipse(
      this.x + 70 * scale,
      this.y + 265 * scale,
      (this.width - 96) * scale,
      (this.height - 75) * scale
    );
    ellipse(
      this.x + 60 * scale,
      this.y + 260 * scale,
      (this.width - 96) * scale,
      (this.height - 75) * scale
    );
    ellipse(
      this.x + 50 * scale,
      this.y + 265 * scale,
      (this.width - 96) * scale,
      (this.height - 75) * scale
    );
    ellipse(
      this.x + 40 * scale,
      this.y + 260 * scale,
      (this.width - 96) * scale,
      (this.height - 75) * scale
    );
    ellipse(
      this.x + 30 * scale,
      this.y + 265 * scale,
      (this.width - 96) * scale,
      (this.height - 75) * scale
    );
    ellipse(
      this.x + 20 * scale,
      this.y + 260 * scale,
      (this.width - 96) * scale,
      (this.height - 75) * scale
    );
    ellipse(
      this.x + 10 * scale,
      this.y + 265 * scale,
      (this.width - 96) * scale,
      (this.height - 75) * scale
    );
    ellipse(
      this.x,
      this.y + 260 * scale,
      (this.width - 96) * scale,
      (this.height - 75) * scale
    );
    ellipse(
      this.x - 10 * scale,
      this.y + 265 * scale,
      (this.width - 96) * scale,
      (this.height - 75) * scale
    );

    // dots on blanket
    fill(151, 153, 171);
    ellipse(
      this.x + 70 * scale,
      this.y + 276 * scale,
      (this.width - 93) * scale,
      (this.height - 93) * scale
    );
    ellipse(
      this.x + 60 * scale,
      this.y + 273 * scale,
      (this.width - 93) * scale,
      (this.height - 93) * scale
    );
    ellipse(
      this.x + 50 * scale,
      this.y + 276 * scale,
      (this.width - 93) * scale,
      (this.height - 93) * scale
    );
    ellipse(
      this.x + 40 * scale,
      this.y + 273 * scale,
      (this.width - 93) * scale,
      (this.height - 93) * scale
    );
    ellipse(
      this.x + 30 * scale,
      this.y + 276 * scale,
      (this.width - 93) * scale,
      (this.height - 93) * scale
    );
    ellipse(
      this.x + 20 * scale,
      this.y + 273 * scale,
      (this.width - 93) * scale,
      (this.height - 93) * scale
    );
    ellipse(
      this.x + 10 * scale,
      this.y + 276 * scale,
      (this.width - 93) * scale,
      (this.height - 93) * scale
    );
    ellipse(
      this.x,
      this.y + 273 * scale,
      (this.width - 93) * scale,
      (this.height - 93) * scale
    );
    ellipse(
      this.x - 10 * scale,
      this.y + 276 * scale,
      (this.width - 93) * scale,
      (this.height - 93) * scale
    );

    // eyes
    fill(0, 0, 0);
    ellipse(
      this.x + 172 * scale,
      this.y + 150 * scale,
      (this.width - 80) * scale,
      (this.height - 80) * scale
    );
    fill(219, 165, 119);
    ellipse(
      this.x + 173 * scale,
      this.y + 153 * scale,
      (this.width - 75) * scale,
      (this.height - 80) * scale
    );

    // nose dot
    fill(0, 0, 0);
    ellipse(
      this.x + 196 * scale,
      this.y + 163 * scale,
      (this.width - 96) * scale,
      (this.height - 92) * scale
    );
    pop();
  }
}

let camel = new Camel(100, 200, 100, 100, 0.5); // Example scale factor of 0.5

function sadCamel(camelA, camelB) {
  //camel head
  push();
  rotate(radians(sin(rotationAngle) * 0.5)); // Rotate up and down
  fill(219, 165, 119);
  ellipse(camelA + 125, camelB + 130, 80, 80);

  //camel nose
  noStroke();
  fill(219, 165, 119);
  ellipse(camelA + 125, camelB + 162, 60, 60);

  //camel ears
  fill(219, 165, 119);
  ellipse(camelA + 140, camelB + 100, 10, 70);

  ellipse(camelA + 108, camelB + 100, 10, 70);

  //camel neck
  ellipse(camelA + 123, camelB + 200, 40, 150);
  pop();

  //camel body
  fill(219, 165, 119);
  ellipse(camelA + 35, camelB + 255, 200, 100);

  //camel legs
  ellipse(camelA + 100, camelB + 320, 10, 100);
  ellipse(camelA + 80, camelB + 320, 10, 100);

  ellipse(camelA - 10, camelB + 320, 10, 100);
  ellipse(camelA - 30, camelB + 320, 10, 100);

  //camel tail
  ellipse(camelA - 65, camelB + 255, 50, 10);

  //camel blanket
  fill(211, 117, 100);
  ellipse(camelA + 30, camelB + 210, 50, 110);

  ellipse(camelA + 0, camelB + 220, 50, 90);
  ellipse(camelA + 55, camelB + 220, 50, 90);

  //blanket accessories stripes
  ellipse(camelA + 70, camelB + 265, 4, 25);
  ellipse(camelA + 60, camelB + 260, 4, 25);
  ellipse(camelA + 50, camelB + 265, 4, 25);
  ellipse(camelA + 40, camelB + 260, 4, 25);
  ellipse(camelA + 30, camelB + 265, 4, 25);
  ellipse(camelA + 20, camelB + 260, 4, 25);
  ellipse(camelA + 10, camelB + 265, 4, 25);
  ellipse(camelA + 0, camelB + 260, 4, 25);
  ellipse(camelA - 10, camelB + 265, 4, 25);

  //blanket accessories dots
  fill(151, 153, 171);
  ellipse(camelA + 70, camelB + 276, 7, 7);
  ellipse(camelA + 60, camelB + 273, 7, 7);
  ellipse(camelA + 50, camelB + 276, 7, 7);
  ellipse(camelA + 40, camelB + 273, 7, 7);
  ellipse(camelA + 30, camelB + 276, 7, 7);
  ellipse(camelA + 20, camelB + 273, 7, 7);
  ellipse(camelA + 10, camelB + 276, 7, 7);
  ellipse(camelA + 0, camelB + 273, 7, 7);
  ellipse(camelA - 10, camelB + 276, 7, 7);

  //dead eyes
  push();
  rotate(radians(sin(rotationAngle) * 0.5)); // Rotate up and down
  fill(0, 0, 0);
  stroke(0);
  strokeWeight(3);
  //left eye
  line(camelA + 125 - 15, camelB + 130 + 5, camelA + 125 - 5, camelB + 130 + 5);

  //right eye
  line(
    camelA + 125 + 10,
    camelB + 130 + 5,
    camelA + 125 + 20,
    camelB + 130 + 5
  );

  pop();

  //nose dot
  push();
  rotate(radians(sin(rotationAngle) * 0.5)); // Rotate up and down
  fill(0, 0, 0);
  ellipse(camelA + 116, camelB + 163, 4, 8);
  fill(0, 0, 0);
  ellipse(camelA + 134, camelB + 163, 4, 8);
  pop();
  //feets
  fill(129, 88, 67);
  ellipse(camelA + 100, camelB + 360, 8, 20);
  ellipse(camelA + 80, camelB + 360, 8, 20);

  ellipse(camelA - 10, camelB + 360, 8, 20);
  ellipse(camelA - 30, camelB + 360, 8, 20);
}

function happyCamel(camelA, camelB) {
  //camel head
  push();
  rotate(radians(sin(rotationAngle) * 0.5)); // Rotate up and down
  fill(219, 165, 119);
  ellipse(camelA + 125, camelB + 130, 80, 80);

  //camel nose
  noStroke();
  fill(219, 165, 119);
  ellipse(camelA + 125, camelB + 162, 60, 60);

  //camel ears
  fill(219, 165, 119);
  ellipse(camelA + 140, camelB + 100, 10, 70);

  ellipse(camelA + 108, camelB + 100, 10, 70);

  //camel neck
  ellipse(camelA + 123, camelB + 200, 40, 150);
  pop();

  //camel body
  fill(219, 165, 119);
  ellipse(camelA + 35, camelB + 255, 200, 100);

  //camel legs
  ellipse(camelA + 100, camelB + 320, 10, 100);
  ellipse(camelA + 80, camelB + 320, 10, 100);

  ellipse(camelA - 10, camelB + 320, 10, 100);
  ellipse(camelA - 30, camelB + 320, 10, 100);

  //camel tail
  ellipse(camelA - 65, camelB + 255, 50, 10);

  //camel blanket
  fill(211, 117, 100);
  ellipse(camelA + 30, camelB + 210, 50, 110);

  ellipse(camelA + 0, camelB + 220, 50, 90);
  ellipse(camelA + 55, camelB + 220, 50, 90);

  //blanket accessories stripes
  ellipse(camelA + 70, camelB + 265, 4, 25);
  ellipse(camelA + 60, camelB + 260, 4, 25);
  ellipse(camelA + 50, camelB + 265, 4, 25);
  ellipse(camelA + 40, camelB + 260, 4, 25);
  ellipse(camelA + 30, camelB + 265, 4, 25);
  ellipse(camelA + 20, camelB + 260, 4, 25);
  ellipse(camelA + 10, camelB + 265, 4, 25);
  ellipse(camelA + 0, camelB + 260, 4, 25);
  ellipse(camelA - 10, camelB + 265, 4, 25);

  //blanket accessories dots
  fill(151, 153, 171);
  ellipse(camelA + 70, camelB + 276, 7, 7);
  ellipse(camelA + 60, camelB + 273, 7, 7);
  ellipse(camelA + 50, camelB + 276, 7, 7);
  ellipse(camelA + 40, camelB + 273, 7, 7);
  ellipse(camelA + 30, camelB + 276, 7, 7);
  ellipse(camelA + 20, camelB + 273, 7, 7);
  ellipse(camelA + 10, camelB + 276, 7, 7);
  ellipse(camelA + 0, camelB + 273, 7, 7);
  ellipse(camelA - 10, camelB + 276, 7, 7);

  //happy eyes
  push();
  rotate(radians(sin(rotationAngle) * 0.5)); // Rotate up and down
  fill(255);
  ellipse(camelA + 125 - 15, camelB + 130 + 5, 10, 20);
  ellipse(camelA + 125 + 10, camelB + 130 + 5, 10, 20);
  fill(0);
  ellipse(camelA + 125 - 15, camelB + 130 + 5, 7, 7);
  ellipse(camelA + 125 + 10, camelB + 130 + 5, 7, 7);
  pop();

  //right eye
  line(
    camelA + 125 + 10,
    camelB + 130 + 5,
    camelA + 125 + 20,
    camelB + 130 + 5
  );

  //nose dot
  push();
  rotate(radians(sin(rotationAngle) * 0.5)); // Rotate up and down
  fill(0, 0, 0);
  ellipse(camelA + 116, camelB + 163, 4, 8);
  fill(0, 0, 0);
  ellipse(camelA + 134, camelB + 163, 4, 8);
  pop();
  //feets
  fill(129, 88, 67);
  ellipse(camelA + 100, camelB + 360, 8, 20);
  ellipse(camelA + 80, camelB + 360, 8, 20);

  ellipse(camelA - 10, camelB + 360, 8, 20);
  ellipse(camelA - 30, camelB + 360, 8, 20);
}

function resetGame() {
  camel.draw();
  cloudflyY = 240;
  gameIsRunning = true;
  gameEnd = false;
  elapsedTime = 0;
}

function mouseClicked() {
  if (!gameIsRunning) {
    resetGame();
  }
}

let stars = [];

//CONFETTI FUNCTION
for (let i = 0; i < 1000; i++) {
  const star = {
    x: Math.floor(Math.random() * 570),
    y: Math.floor(Math.random() * 700),
    snow: Math.random() * 1,
    alpha: Math.random(),
  };
  stars.push(star);
}

function startScreen() {
  dunes(camelX, y);
  sun();
  textSize(50);
  fill(255);
  push();
  rotate(radians(sin(rotationAngle) * 0.5));
  text("CAMEL RUN", 130, 300);
  textSize(30);
  fill(255);
  text("Click to start", 195, 340);
  pop();
}

function loseScreen() {
  dunes(camelX, y);
  sun();
  textSize(50);
  fill(231, 56, 56);
  text("YOU LOSE", 150, 300);
  textSize(30);
  fill(231, 56, 56);
  text("Click to restart", 180, 340);

  //Generate Bubbles
  for (let i = 0; i < 0.5; i++) {
    const bubble = {
      x: Math.floor(Math.random() * 700),
      y: Math.floor(Math.random() * 900),
      circle: Math.random() * 10,
      alpha: Math.random(),
    };
    bubbles.push(bubble);
    text("Your Time " + elapsedTime.toFixed(2), 170, 250);
  }
}

function winScreen() {
  dunes(camelX, y);
  sun();
  for (let star of stars) {
    const randomValue = Math.random();
    if (randomValue < 0.2) {
      fill(204, 204, 102); //yellow confetti
    } else if (randomValue < 0.4) {
      fill(204, 153, 204); //pink confetti
    } else if (randomValue < 0.6) {
      fill(153, 204, 153); //green confetti
    } else if (randomValue < 0.8) {
      fill(153, 204, 204); //blue confetti
    } else {
      fill(204, 153, 204); //purple confetti
    }
    ellipse(star.x, star.y, 10, 10);
    star.alpha = star.alpha + 0.05;
    star.y += star.snow;
    if (star.y > height) {
      star.y = 0;
    }
    textSize(50);
    fill(53, 180, 40);
    text("YOU WON", 150, 300);
    textSize(30);
    fill(53, 180, 40);
    text("Click to restart", 180, 340);
    text("Finished Time " + elapsedTime.toFixed(2), 150, 250);
  }
}

//function for press ENTER
function keyPressed() {
  if (keyCode === ENTER) {
    enterPressed = true;
  }
}

function draw() {
  //Make the background move
  dunes(x + 30, y);
  x = x - speed;
  speed = speed;
  if (x < -280) x = 100;
  sun();

  waterTank(waterTankX + 420, waterTankY + 420);

  cactus.draw();

  checkWaterDropCollision(camel.x, camel.y);
  cactus.x -= 1;
  anotherCactus.draw();
  anotherCactus.x -= 1;
  anotherCactus1.draw();
  anotherCactus1.x -= 1;

  if (cactus.x < 0) {
    cactus.x = 250;
  }
  if (anotherCactus.x < -200) {
    anotherCactus.x = 250;
  }
  if (anotherCactus.x < -100) {
    anotherCactus.x = 300;
  }
  if (anotherCactus1.x < 0) {
    anotherCactus1.x = 100;
  }
  camel.draw(100, 200, 50, 100, 0.1);
  fill(102, 124, 40);
  textSize(25);
  textAlign(LEFT, TOP);
  text("Collected Water Drops: " + collectedWaterDrops, 10, 10);
  if (!gameIsRunning && !gameEnd) {
    startScreen();
  } else if (gameIsRunning && enterPressed) {
    // Check if Enter-key is pressed
    drawWaterDrops();
    elapsedTime += 1; // / framerate
    camel.x += 0.5;
    camel.y += velocity;
    velocity += acceleration;
    camelY += velocity * 2; // make the camel fall down
    if (keyIsDown(32)) {
      velocity = velocity - acceleration * 2; //add jumping effect
    }
    textSize(20);
    fill(102, 124, 40);
    text("Played Time: " + elapsedTime.toFixed(2), 12, 40);
  }

  if (camel.x >= waterTankX + 380 && camel.y >= waterTankY + 320) {
    gameEnd = true;
    gameIsRunning = false;
    winScreen();
    happyCamel(camelA + 100, camelB + 200);
    waterTank(waterTankX + 250, waterTankY + 450);
  }

  //Camel die when going under ground
  if (camel.y >= 650) {
    loseScreen();
    sadCamel(camelA + 100, camelB + 200);
    for (let bubble of bubbles) {
      fill(231, 56, 56, Math.abs(Math.sin(bubble.alpha)) * 455);
      ellipse(bubble.x, bubble.y, 20);
      bubble.y += bubble.circle;
    }
  }
  //Camel die leaving screen
  if (camel.x >= 550) {
    loseScreen();
    sadCamel(camelA + 100, camelB + 200);
    for (let bubble of bubbles) {
      fill(231, 56, 56, Math.abs(Math.sin(bubble.alpha)) * 455);
      ellipse(bubble.x, bubble.y, 20);
      bubble.y += bubble.circle;
    }
  }

  if (cactus.hitTest(camel.x, camel.y, camel.width, camel.height)) {
    gameEnd = true;

    if (gameEnd) {
      loseScreen();
      sadCamel(camelA + 100, camelB + 200);
      for (let bubble of bubbles) {
        fill(231, 56, 56, Math.abs(Math.sin(bubble.alpha)) * 455);
        ellipse(bubble.x, bubble.y, 20);
        bubble.y += bubble.circle;
      }
    }
  }
}
