let boardWidth = 0;
let boardHeight = 0;

const colorfulBoxesCols = 3;
const colorfulBoxesRows = 3;

const colorfulBoxes = []

function setup() {
    boardWidth = windowWidth
    boardHeight = windowHeight

    createCanvas(boardWidth, boardHeight)
    initBoxes(colorfulBoxesCols, colorfulBoxesRows)
}

function draw() {
    background("#eeeeee")

    drawColorfulBoxes()

}



function initBoxes(cols, rows) {
    let x = 25;
    let y = 25;
    for (let i = 0; i < rows; i++) {
        const lines = [];
        colorfulBoxes.push(lines);
        for (let j = 0; j < cols; j++) {
            const box = {
                x: x,
                y: y,
                s: 80,
                color: {
                    r: Math.floor(Math.random() * 255),
                    g: Math.floor(Math.random() * 255),
                    b: Math.floor(Math.random() * 255),
                },
                text: Math.floor(Math.random() * 10),

            };

            lines.push(box);
            x += 90;
        }
        x = 25;
        y += 90;
    }
    console.log(colorfulBoxes);
}

function drawBox(obj) {
    fill(obj.color.r, obj.color.g, obj.color.b);
    square(obj.x, obj.y, obj.s);
    fill("black");
    textSize(20);
    text(obj.text, obj.x + 35, obj.y + 45);
}

function drawColorfulBoxes() {
    for (let rows of colorfulBoxes) {
        for (let box of rows) drawBox(box);
    }
}
