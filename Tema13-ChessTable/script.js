const chessBoxes = []
const pawns = []

function setup() {

    createCanvas(1000, 1000);

    initBoxes()
    initPawns()
}

function draw() {

    background("gray")

    drawTable()
    drawPawns()
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

function initPawns() {
    pawns.length = 0
    const used = new Set()
    const colCount = Array(8).fill(0) // Track pawns per column

    while (pawns.length < 16) {
        const row = Math.floor(Math.random() * 8)
        const col = Math.floor(Math.random() * 8)
        const key = row + ',' + col

        // Only add if not used and column has less than 2 pawns
        if (!used.has(key) && colCount[col] < 2) {
            used.add(key)
            // Assign color based on row
            const color = row < 4 ? "black" : "white"
            pawns.push({ row, col, color })
            colCount[col]++
        }
    }
}

function drawPawns() {
    for (const pawn of pawns) {
        fill(pawn.color)
        const box = chessBoxes[pawn.row][pawn.col]
        ellipse(box.x + box.size / 2, box.y + box.size / 2, box.size * 0.6)
    }
}