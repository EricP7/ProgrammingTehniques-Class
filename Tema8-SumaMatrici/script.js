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
    matrixB = initBoxes(colorfulBoxesCols, colorfulBoxesRows, 320, 25, 5);

    // Matricea sumă generată din A + B
    matrixSum = addMatrices(matrixA, matrixB, 620, 25);
}

function draw() {
    background("#eeeeee");

    drawColorfulBoxes(matrixA);
    plusSymbol()
    drawColorfulBoxes(matrixB);
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
    text(obj.text, obj.x + 25, obj.y + 50);
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

    // vertex(50, 40);
    // vertex(50, 95);
    // vertex(70, 95);
    // vertex(70, 40);

    // vertex(40, 50);
    // vertex(40, 70);
    // vertex(95, 70);
    // vertex(95, 125)
    // vertex(115, 125);
    // vertex(115, 70);
    // vertex(165, 70);
    // vertex(165, 50);
    // vertex(115, 50);
    // vertex(115, 30);
    // vertex()

    // vertex(100, 100)
    // vertex(100, 130)
    // vertex(130, 130)
    // vertex(130, 160)
    // vertex(160, 160)
    // vertex(160, 130)
    // vertex(190, 130)
    // vertex(190, 100)
    // vertex(160, 100)
    // vertex(160, 70)
    // vertex(130, 70)
    // vertex(130, 100)




    endShape(CLOSE);
}