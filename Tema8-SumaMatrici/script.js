let boardWidth = 0;
let boardHeight = 0;

const colorfulBoxesCols = 3;
const colorfulBoxesRows = 3;

let matrixA = [];
let matrixB = [];
let matrixSum = [];

function setup() {
    boardWidth = windowWidth;
    boardHeight = windowHeight;

    createCanvas(boardWidth, boardHeight);

    // Inițializare cele 2 matrici cu offseturi diferite
    matrixA = initBoxes(colorfulBoxesCols, colorfulBoxesRows, 25, 25, 1);
    matrixB = initBoxes(colorfulBoxesCols, colorfulBoxesRows, 410, 25, 5);

    // Matricea sumă generată din A + B
    matrixSum = addMatrices(matrixA, matrixB, 790, 25);
}

function draw() {
    background("#eeeeee");

    drawColorfulBoxes(matrixA);
    plusSymbol()
    drawColorfulBoxes(matrixB);
    equalSymbol()
    drawColorfulBoxes(matrixSum);
}

function initBoxes(cols, rows, x, y, n) {
    const boxes = [];
    let startX = x;

    for (let i = 0; i < rows; i++) {
        const line = [];
        boxes.push(line);
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
                text: n,
            };
            line.push(box);
            x += 90;
            n++;
        }
        x = startX;
        y += 90;
    }

    return boxes;
}

function addMatrices(matA, matB, xOffset, yOffset) {
    const result = [];
    for (let i = 0; i < matA.length; i++) {
        const row = [];
        result.push(row);
        for (let j = 0; j < matA[i].length; j++) {
            const a = matA[i][j];
            const b = matB[i][j];
            const sumBox = {
                x: xOffset + j * 90,
                y: yOffset + i * 90,
                s: 80,
                color: {
                    r: Math.floor(Math.random() * 255),
                    g: Math.floor(Math.random() * 255),
                    b: Math.floor(Math.random() * 255),
                },
                text: a.text + b.text,
            };
            row.push(sumBox);
        }
    }
    return result;
}

function drawBox(obj) {
    fill(obj.color.r, obj.color.g, obj.color.b);
    square(obj.x, obj.y, obj.s);
    fill("black");
    textSize(20);
    text(obj.text, obj.x + 30, obj.y + 50);
}

function drawColorfulBoxes(matrix) {
    for (let row of matrix) {
        for (let box of row) {
            drawBox(box);
        }
    }
}

function plusSymbol() {
    beginShape()

    fill(217, 217, 217)

    vertex(300, 140)
    vertex(300, 170)
    vertex(330, 170)
    vertex(330, 200)
    vertex(360, 200)
    vertex(360, 170)
    vertex(390, 170)
    vertex(390, 140)
    vertex(360, 140)
    vertex(360, 110)
    vertex(330, 110)
    vertex(330, 140)


    endShape(CLOSE);
}

function equalSymbol() {

    fill(217, 217, 217)

    beginShape(QUADS);

    vertex(690, 115);
    vertex(690, 145);
    vertex(770, 145);
    vertex(770, 115);

    vertex(690, 160);
    vertex(690, 190);
    vertex(770, 190);
    vertex(770, 160);

    endShape();

}