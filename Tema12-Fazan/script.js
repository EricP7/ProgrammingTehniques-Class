let startColor = { r: 120, g: 166, b: 90 }
let stopColor = { r: 187, g: 39, b: 26 }
let letterSwapping = false
let intervalID
let asciiCodeStart = 65
let asciiCode = asciiCodeStart

function setup() {
    createCanvas(700, 500)

}


function draw() {

    background("white")

    button(300, 100, 100, 40, startColor, "start")
    button(500, 100, 100, 40, stopColor, "stop")
}


function button(x, y, w, h, color, textContent) {

    fill(color.r, color.g, color.b)
    rect(x, y, w, h, 7)
    fill("black")
    textSize(24)
    text(textContent, x + 27, y + 27)
}

function mouseClicked() {
    if (mouseX > 300 && mouseX < 400 && mouseY > 100 && mouseY < 140) {
        console.log("start")
        if (!colorSwapping)
            intervalID = setInterval(changeButtonColor, 1000)
        letterSwapping = true;
    }
    if (mouseX > 500 && mouseX < 600 && mouseY > 100 && mouseY < 140) {
        console.log("stop")
        clearInterval(intervalID)
        letterSwapping = false;
    }
}


function changeLetter() {
    asciiCode++
    console.log(String.fromCharCode(65, 66, 67))
}

function showLetter(letter) {
    fill("black")
    textSize(30)
    text(letter, 100, 100)
}