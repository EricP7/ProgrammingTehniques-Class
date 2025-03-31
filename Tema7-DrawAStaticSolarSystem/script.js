function setup() {

    createCanvas(1900, 1000)

    let x = 900
    let y = 500

    drawSun(x, y)

    ellipse(x, y, 500, 300)

    ellipse(x, y, 700, 350)
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