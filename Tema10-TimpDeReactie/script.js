let state = 'start'; // start, wait, ready, result, tooSoon
let waitTime;
let startTime;
let reactionTime;

function setup() {
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER, CENTER);
    textSize(32);
    reset();
}

function draw() {
    background(255);
    if (state === 'start') {
        background(255);
        fill("black");
        text("Testează viteza de reacție\n(apasa SPACE sau CLICK)", width / 2, height / 2);
    } else if (state === 'wait') {
        background(180);
        fill("black");
        text("Așteaptă culoarea verde...", width / 2, height / 2);
        if (millis() > waitTime) {
            state = 'ready';
            startTime = millis();
        }
    } else if (state === 'ready') {
        background(0, 180, 0);
        fill("white");
        text("Click acum!", width / 2, height / 2);
    } else if (state === 'result') {
        background(0, 180, 0);
        fill("white");
        text(`Bravo!\n${reactionTime} ms (${nf(reactionTime / 1000, 1, 1)} s)`, width / 2, height / 2);
    } else if (state === 'tooSoon') {
        background(255, 0, 0);
        fill("white");
        text("Prea devreme! Încearcă din nou.", width / 2, height / 2);
    }
}

function mousePressed() {
    handleInput();
}

function keyPressed() {
    if (key === ' ' || key === 'Spacebar') {
        handleInput();
    } else if (key === 'r' || key === 'R') {
        reset();
    }
}

function handleInput() {
    if (state === 'start') {
        state = 'wait';
        waitTime = millis() + random(2000, 5000); // 2-5 seconds
    } else if (state === 'wait') {
        state = 'tooSoon';
    } else if (state === 'ready') {
        reactionTime = int(millis() - startTime);
        state = 'result';
    } else if (state === 'result' || state === 'tooSoon') {
        reset();
    }
}

function reset() {
    state = 'start';
}
