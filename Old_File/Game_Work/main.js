
function preload() {
    flower = loadImage("flower-transparent1.png")
}
function setup() {
    createCanvas(600, 600);
    background(174, 217, 165);
    strokeWeight(3);

    let testPlant = {
        initialSize : 50,
        strokeSizeSensitivity : 1.2,
        leftBranchSize : .51,
        leftBranchAngle : Math.PI/7,
        rightBranchSize : .42,
        rightBranchAngle : Math.PI/9,
        midBranchSize : .8,
        flowerProb : 0.1
    }

    draw(testPlant, 280, 580, testPlant.initialSize, Math.PI * 1.5, 1, 10)
        // draw(280, 580, 40, Math.PI * 1.5, 1, 2)
}

function draw(plant, x, y, size, theta, branchDirection, levels) {
    if (levels <= 0 || size < 2)  {
        return;
    }

    let x2 = x + (size * Math.cos(theta));
    let y2 = y + (size * Math.sin(theta));

    let centerX = x2 - 4;
    let centerY = y2 - 6;

    if (1 <= levels < 2) { //&& !(279 < centerX < 281)
        if (Math.random() < plant.flowerProb) {
            push();
            translate(centerX, centerY);
            rotate(theta + PI / 2);
            image(flower, 0, 0, 8, 12);
            pop();
        }
    }
    strokeWeight(Math.pow(plant.strokeSizeSensitivity, levels))
    // strokeWeight(levels*.5)

    line(x, y, x2, y2)

    draw(plant, x2, y2, size * plant.leftBranchSize, theta + branchDirection * plant.rightBranchAngle, branchDirection, levels - 1);
    draw(plant, x2, y2, size * plant.rightBranchSize, theta - branchDirection * plant.leftBranchAngle, branchDirection, levels - 1);
    draw(plant, x2, y2, size * plant.midBranchSize, theta, -branchDirection, levels - 1);
}

// function draw(x, y, size, theta, branchDirection, levels) {
//     if (levels <= 0 || size < 2)  {
//         return;
//     }
//
//     let x2 = x + (size * Math.cos(theta));
//     let y2 = y + (size * Math.sin(theta));
//
//     let centerX = x2 - 4;
//     let centerY = y2 - 6;
//
//     if (1 <= levels < 2) { //&& !(279 < centerX < 281)
//         push();
//         translate(centerX, centerY);
//         rotate(theta + PI/2);
//         image(flower, 0, 0, 8, 12);
//         pop();
//     }
//
//     strokeWeight(Math.pow(1.15, levels))
//     // strokeWeight(levels*.5)
//
//     line(x, y, x2, y2)
//
//     draw(x2, y2, size * 0.5, theta + branchDirection * (Math.PI / 6), branchDirection, levels - 1);
//     draw(x2, y2, size * 0.34, theta - branchDirection * (Math.PI / 7), branchDirection, levels - 1);
//     draw(x2, y2, size * 0.95, theta, -branchDirection, levels - 1);
// }
