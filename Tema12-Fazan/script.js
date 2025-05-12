let startColor = { r: 120, g: 166, b: 90 };
let stopColor = { r: 187, g: 39, b: 26 };
let letterSwapping = false;
let intervalID;
let asciiCodeStart = 65;
let asciiCode = asciiCodeStart;
let currentLetter = 'A';

function setup() {
    createCanvas(700, 300);
    textAlign(CENTER, CENTER);
}

function draw() {
    background("white");

    // Draw buttons
    button(300, 200, 100, 40, startColor, "START");
    button(500, 200, 100, 40, stopColor, "STOP");

    // Display current letter in black
    fill(0);
    textSize(80);
    text(currentLetter, width / 2, height / 2 - 50);
}

function button(x, y, w, h, color, textContent) {
    fill(color.r, color.g, color.b);
    rect(x, y, w, h, 7);
    fill("white");
    textSize(20);
    text(textContent, x + w / 2, y + h / 2);
}

function mouseClicked() {
    // START button
    if (mouseX > 300 && mouseX < 400 && mouseY > 200 && mouseY < 240) {
        if (!letterSwapping) {
            intervalID = setInterval(changeLetter, 500);
            letterSwapping = true;
        }
    }

    // STOP button
    if (mouseX > 500 && mouseX < 600 && mouseY > 200 && mouseY < 240) {
        clearInterval(intervalID);
        letterSwapping = false;
    }
}

function changeLetter() {
    asciiCode++;
    if (asciiCode > 90) asciiCode = asciiCodeStart;
    currentLetter = String.fromCharCode(asciiCode);
}
