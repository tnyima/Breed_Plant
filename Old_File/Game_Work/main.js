
function preload() {
    flower = loadImage("flower-transparent1.png")
}
function setup() {
    createCanvas(600, 600);
    background(174, 217, 165);
    strokeWeight(3);

    draw(280, 580, 40, Math.PI * 1.5, 1, 5)
}

let currAngle = 0;

function draw(x, y, size, theta, branchDirection, levels) {
    if (levels <= 0 || size < 2)  {
        return;
    }

    currAngle += theta;
    currAngle = currAngle % PI;

    let x2 = x + (size * Math.cos(theta));
    let y2 = y + (size * Math.sin(theta));

    if (1 <= levels < 2) {
        let d = Math.random();
        if (d < 0.15) {
        }
        // let deltaY = (y2 - y);
        // let deltaX = (x - x2);
        // let branchAngle = Math.atan2(deltaY, deltaX);
        translate(x2 - 4, y2 - 6);
        // rotate(-currAngle);
        image(flower, 0, 0, 8, 12);
        // rotate((currAngle));
        translate(-(x2 - 4), -(y2 - 6))
    }

    strokeWeight(Math.pow(1.15, levels))
    // strokeWeight(levels*.5)

    line(x, y, x2, y2)

    draw(x2, y2, size * 0.5, theta + branchDirection * (Math.PI / 6), branchDirection, levels - 1);
    draw(x2, y2, size * 0.34, theta - branchDirection * (Math.PI / 7), branchDirection, levels - 1);
    draw(x2, y2, size * 0.95, theta, -branchDirection, levels - 1);
}

// let p1 = new Plant(20, 20, 5)
// p1.draw()

// function createPlant(size, levelsRemaining) {
//     stack.push();
//     if (levelsRemaining === 0) {
//         stack.pop();
//         return;
//     }
//     // let coords = stack.pop()
//     // let x = coords[0]
//     // let y = coords[1]
//     // let newX = size * Math.cos(x);
//     // let newY = size * Math.sin(y);
//
//
//     createPlant(size/2, levelsRemaining - 1)
//     stack.pop();
// }