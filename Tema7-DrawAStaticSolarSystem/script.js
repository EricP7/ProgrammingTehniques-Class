function setup() {

    createCanvas(1900, 1000)

    let x = 900
    let y = 500

    drawSun(x, y)

    ellipse(x, y, 500, 300)
    fill(211, 225, 242)
    circle(715, 400, 25)
    noFill()

    ellipse(x, y, 700, 350)
    fill(238, 205, 205)
    circle(565, 455, 38)
    noFill()

    ellipse(x, y, 900, 400)
    fill(216, 210, 231)
    circle(475, 435, 50)
    noFill()

    ellipse(x, y, 1150, 450)
    fill(211, 223, 226)
    circle(1435, 420, 75)
    fill("black")
    textSize(22)
    text("P4", 1422, 428)
    noFill()

    ellipse(x, y, 1500, 530)
    fill(189, 214, 172)
    circle(1550, 630, 120)
    fill("black")
    textSize(26)
    text("P5", 1535, 640)
    noFill()
}

function drawSun(x, y) {

    fill(250, 250, 82)
    circle(x, y, 100)

    //N
    triangle(x + 0, y - 95, x - 10, y - 65, x + 10, y - 65)
    //NE
    triangle(x + 70, y - 70, x + 40, y - 55, x + 55, y - 40)
    //E
    triangle(x + 95, y + 0, x + 65, y - 10, x + 65, y + 10)
    //SE
    triangle(x + 70, y + 70, x + 40, y + 55, x + 55, y + 40)
    //S
    triangle(x + 0, y + 95, x - 10, y + 65, x + 10, y + 65)
    //SW
    triangle(x - 70, y + 70, x - 40, y + 55, x - 55, y + 40)
    //W
    triangle(x - 95, y + 0, x - 65, y + 10, x - 65, y - 10)
    //NW
    triangle(x - 70, y - 70, x - 40, y - 55, x - 55, y - 40)
    noFill()
}