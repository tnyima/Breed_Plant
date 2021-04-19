function setup() {

    // Set the canvas size
    createCanvas(400, 400);
    // Set the background color
    background(220);
    // Set the stroke weight
    strokeWeight(3);

    draw(200, 300, 50, Math.PI * 1.5, 1, 12)
    // 200, 300, 200, 200

    // let stack = [];
    // let size = 50
    // let levels = 5
    // let oldX = 200
    // let oldY = 300
    // createPlant(size, levels)
}

function draw(x, y, size, theta, branchDirection, levels) {
    if (levels <= 0 || size < 2)  {
        return;
    }

    let x2 = x + (size * Math.cos(theta));
    let y2 = y + (size * Math.sin(theta));

    strokeWeight(Math.pow(1.1, levels))
    // strokeWeight(levels*.5)

    line(x, y, x2, y2)

    draw(x2, y2, size * 0.6, theta + branchDirection * (Math.PI / 6), branchDirection, levels - 1);
    draw(x2, y2, size * 0.42, theta - branchDirection * (Math.PI / 4), branchDirection, levels - 1);
    draw(x2, y2, size * 0.9, theta, -branchDirection, levels - 1);
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