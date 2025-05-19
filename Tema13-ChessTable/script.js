const chessBoxes = []

function setup() {

    createCanvas(1000, 1000);
}

function draw() {

    background("gray")
}

function drawTable() {
    for (let rows of 8)
        for (let cols of 8)
            createBox
}

function createBox(obj) {
    fill(obj.color)
    square(obj.x, obj.y, obj.size)

}

function initBoxes() {
    let x = 25
    let y = 25
    for (let i of 8) {
        const lines = []
        chessBoxes.push(lines)
        for (let j of 8) {
            const box = {
                x: x,
                y: y,
                size: 80,
                color: {}
            }
        }
    }
}