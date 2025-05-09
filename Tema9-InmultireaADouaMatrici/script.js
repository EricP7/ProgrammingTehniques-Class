let boardHeight = 0;
let boardWidth = 0;
let input;


const colorfulBoxesGroups = [];

function setup() {
    boardWidth = windowWidth;
    boardHeight = windowHeight;
    createCanvas(boardWidth, boardHeight);

    const group1 = initBoxes(3, 2, 25, 70);
    colorfulBoxesGroups.push(group1);
    const group2 = initBoxes(2, 3, 470, 25);
    colorfulBoxesGroups.push(group2);
    const resultGroup = multiplyGroups(group1, group2, 820, 70);
    colorfulBoxesGroups.push(resultGroup);


}

function draw() {
    background("white");

    for (let group of colorfulBoxesGroups) {
        drawColorfulBoxes(group);
    }

    multiplicationSign(335, -175)
    equalsSign(690, 118)

}

function drawColorfulBoxes(group) {
    for (let rows of group) {
        for (let box of rows) if (!box.hide) drawBox(box);
    }
}

function drawBox(obj) {
    fill(obj.color.r, obj.color.g, obj.color.b);
    square(obj.x, obj.y, obj.s);
    fill("black");
    textSize(20);
    text(obj.text, obj.x + 15, obj.y + 25);
}

let boxNumber = 1;

function initBoxes(cols, rows, startX, startY) {
    let x = startX;
    let y = startY;
    const group = [];
    for (let i = 0; i < rows; i++) {
        const lines = [];
        group.push(lines);
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
                text: boxNumber,
                hide: false,
            };

            boxNumber++;

            lines.push(box);
            x += 90;
        }
        x = startX;
        y += 90;
    }
    return group;
}

function createSquare(x, y, s, color) {
    fill(color);
    square(x, y, s);
}

function multiplicationSign(x, y) {
    push()

    fill(217, 217, 217)

    beginShape()
    rotate(PI / 4)

    vertex(x, y)
    vertex(x, y + 30)
    vertex(x + 30, y + 30)
    vertex(x + 30, y + 60)
    vertex(x + 60, y + 60)
    vertex(x + 60, y + 30)
    vertex(x + 90, y + 30)
    vertex(x + 90, y)
    vertex(x + 60, y)
    vertex(x + 60, y - 30)
    vertex(x + 30, y - 30)
    vertex(x + 30, y)

    endShape(CLOSE);

    pop();
}

function equalsSign(x, y) {
    fill(217, 217, 217)

    beginShape(QUADS);


    vertex(x, y);
    vertex(x, y + 30);
    vertex(x + 80, y + 30);
    vertex(x + 80, y);

    vertex(x, y + 45);
    vertex(x, y + 75);
    vertex(x + 80, y + 75);
    vertex(x + 80, y + 45);

    endShape();
}

function multiplyGroups(group1, group2, startX, startY) {
    const rows = group1.length; // Rows of the first group
    const cols = group2[0].length; // Columns of the second group
    const group = [];
    let x = startX;
    let y = startY;

    for (let i = 0; i < rows; i++) {
        const line = [];
        group.push(line);
        for (let j = 0; j < cols; j++) {
            let sum = 0;
            for (let k = 0; k < group1[0].length; k++) {
                sum += group1[i][k].text * group2[k][j].text; // Multiply corresponding values
            }

            const box = {
                x: x,
                y: y,
                s: 80,
                color: {
                    r: Math.floor(Math.random() * 255),
                    g: Math.floor(Math.random() * 255),
                    b: Math.floor(Math.random() * 255),
                },
                text: sum, // Result of the multiplication
                hide: false,
            };

            line.push(box);
            x += 90;
        }
        x = startX;
        y += 90;
    }

    return group;
}