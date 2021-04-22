
function preload() {
    flower = loadImage("flower-transparent1.png")
}
function setup() {
    createCanvas(600, 600);
    background(174, 217, 165);
    strokeWeight(3);

    draw(280, 580, 40, Math.PI * 1.5, 1, 2)
}

function draw(x, y, size, theta, branchDirection, levels) {
    if (levels <= 0 || size < 2)  {
        return;
    }

    let x2 = x + (size * Math.cos(theta));
    let y2 = y + (size * Math.sin(theta));

    let centerX = x2 - 4;
    let centerY = y2 - 6;

    if (1 <= levels < 2) { //&& !(279 < centerX < 281)
        push();
        translate(centerX, centerY);
        rotate(theta + PI/2);
        image(flower, 0, 0, 8, 12);
        pop();
    }

    strokeWeight(Math.pow(1.15, levels))
    // strokeWeight(levels*.5)

    line(x, y, x2, y2)

    draw(x2, y2, size * 0.5, theta + branchDirection * (Math.PI / 6), branchDirection, levels - 1);
    draw(x2, y2, size * 0.34, theta - branchDirection * (Math.PI / 7), branchDirection, levels - 1);
    draw(x2, y2, size * 0.95, theta, -branchDirection, levels - 1);
}
