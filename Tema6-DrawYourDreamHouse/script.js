function setup() {

    createCanvas(1900, 1000)

}

function draw() {

    //rect(500, 600, 400, 280)
    drawHouse(500, 600)
}

function drawHouse(x, y) {

    //body
    rect(x, y, 400, 280)

    //roof
    triangle(700, 350, 450, 600, 950, 600)

    //door
    rect(550, 730, 70, 150)

    //window1
    rect(700, 680, 60, 80)
    //window2
    rect(765, 680, 60, 80)

    //round window
    circle(700, 420, 35);
}