let startColor = { r: 89, g: 132, b: 225 }
let stopColor = { r: 187, g: 39, b: 26 }
let colorSwapping = false
let intervalID

function setup() {
    createCanvas(700, 500)
}


function draw() {

    background("white")

    button(100, 100, 100, 40, startColor, "start")
    button(300, 100, 100, 40, stopColor, "stop")
}



function button(x, y, w, h, color, textContent) {

    fill(color.r, color.g, color.b)
    rect(x, y, w, h, 7)
    fill("black")
    textSize(24)
    text(textContent, x + 27, y + 27)
}

function mouseClicked() {
    if (mouseX > 100 && mouseX < 200 && mouseY > 100 && mouseY < 140) {
        console.log("start")
        if (!colorSwapping)
            intervalID = setInterval(changeButtonColor, 1000)
        colorSwapping = true;
    }
    if (mouseX > 300 && mouseX < 400 && mouseY > 100 && mouseY < 140) {
        console.log("stop")
        clearInterval(intervalID)
        colorSwapping = false;
    }
}

function changeButtonColor() {
    let aux = startColor
    startColor = stopColor
    stopColor = aux
}