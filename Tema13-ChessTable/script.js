const chessBoxes = []

function setup() {

    createCanvas(1000, 1000);

    initBoxes()
}

function draw() {

    background("gray")

    drawTable()
}

function drawTable() {
    for (let rows of chessBoxes)
        for (let box of rows)
            createBox(box)
}

function createBox(obj) {
    fill(obj.color)
    square(obj.x, obj.y, obj.size)

}

function initBoxes() {
    let x = 100
    let y = 100


    for (let i = 0; i < 8; i++) {

        let color = (i % 2 == 0) ? "white" : "black"

        const lines = []
        chessBoxes.push(lines)
        for (let j = 0; j < 8; j++) {
            const box = {
                x: x,
                y: y,
                size: 80,
                color: color
            }
            lines.push(box)
            x += 80

            color = (color === "white") ? "black" : "white"
        }
        x = 100
        y += 80
    }
}

