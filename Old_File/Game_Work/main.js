
function preload() {
    sunflower = loadImage("sunflower.png");
    raspberry = loadImage("raspberry.png");
    corpseFlower = loadImage("flower-transparent1.png");
    basicLeaf = loadImage("leaf.png");
    pear = loadImage("pear.png");
    blueberry = loadImage("blueberry.png")
}
function setup() {
    createCanvas(screen.width, screen.height*0.75);
    // background(174, 217, 165);
    background(154, 193, 208);
    strokeWeight(3);

    let testPlant1 = {
        initialSize : 80,
        strokeSizeSensitivity : 1.2,
        leftBranchSize : .51,
        leftBranchAngle : Math.PI/7,
        rightBranchSize : .42,
        rightBranchAngle : Math.PI/9,
        midBranchSize : .8,
        flowerProb : 0.01,
        flower : sunflower,
        berryProb: 0.1,
        berry : blueberry,
        leafProb : 0.2,
        leaf: basicLeaf
    }

    let testPlant2 = {
        initialSize : 250,
        strokeSizeSensitivity : 1.5,
        leftBranchSize : .42,
        leftBranchAngle : Math.PI/4,
        rightBranchSize : .65,
        rightBranchAngle : Math.PI/7,
        midBranchSize : .6,
        flowerProb : 0.01,
        flower : corpseFlower,
        berryProb : 0.2,
        berry : raspberry,
        leafProb : 0,
        leaf: null
    }

    childPlant = breedPlant(testPlant1, testPlant2);
    //draw(testPlant1,(screen.width)/2, screen.height, testPlant1.initialSize, Math.PI * 1.5, 1, 8)
    draw(childPlant,(screen.width)/2, screen.height*.75, childPlant.initialSize, Math.PI * 1.5, 1, 8)
    //draw(testPlant2,(screen.width)/2, screen.height, testPlant2.initialSize, Math.PI * 1.5, 1, 8)

    //draw(testPlant1, 280, 580, testPlant1.initialSize, Math.PI * 1.5, 1, 8)
    //draw(testPlant2, 280, 580, testPlant2.initialSize, Math.PI * 1.5, 1, 8)

    // draw(280, 580, 40, Math.PI * 1.5, 1, 2)
}

function draw(plant, x, y, size, theta, branchDirection, levels) {
    if (levels <= 0)  {
        return;
    }

    let x2 = x + (size * Math.cos(theta));
    let y2 = y + (size * Math.sin(theta));

    let centerX = x2 - 30;
    let centerY = y2 - 30;

    if (1 <= levels < 2) { //&& !(279 < centerX < 281)
        let r = Math.random();
        if (r < 0.1) {
            if (r < plant.flowerProb && plant.flower != null) {
                push();
                translate(centerX, centerY);
                rotate(theta + PI / 2);
                image(plant.flower, 0, 0, 60, 60);
                pop();
            }
        }
        else{
            if (r < plant.berryProb && plant.berry != null) {
                push();
                translate(centerX, centerY);
                rotate(theta + PI / 2);
                image(plant.berry, 0, 0, 20, 20);
                pop();
                //drawElement(plant, centerX, centerY, plant.berry);
            }
        }
    }
    strokeWeight(Math.pow(plant.strokeSizeSensitivity, levels))
    // strokeWeight(levels*.5)

    line(x, y, x2, y2)

    draw(plant, x2, y2, size * plant.leftBranchSize, theta + branchDirection * plant.rightBranchAngle, branchDirection, levels - 1);
    draw(plant, x2, y2, size * plant.rightBranchSize, theta - branchDirection * plant.leftBranchAngle, branchDirection, levels - 1);
    draw(plant, x2, y2, size * plant.midBranchSize, theta, -branchDirection, levels - 1);
}

function drawElement (plant, x, y, theta, element){
    push();
    translate(centerX, centerY);
    rotate(theta + PI / 2);
    image(element, 0, 0, 20, 20);
    pop();
}

function breedPlant(plant1, plant2){
    return {
        initialSize : randomInRange(plant1.initialSize, plant2.initialSize),
        strokeSizeSensitivity : randomInRange(plant1.strokeSizeSensitivity, plant2.strokeSizeSensitivity),
        leftBranchSize : randomInRange(plant1.leftBranchSize, plant2.leftBranchSize),
        leftBranchAngle : randomInRange(plant1.leftBranchAngle, plant2.leftBranchAngle),
        rightBranchSize : randomInRange(plant1.rightBranchSize, plant2.rightBranchSize),
        rightBranchAngle : randomInRange(plant1.rightBranchAngle, plant2.rightBranchAngle),
        midBranchSize : randomInRange(plant1.midBranchSize, plant2.midBranchSize),
        flowerProb : randomInRange(plant1.flowerProb, plant2.flowerProb),
        flower : randomChoice(plant1.flower, plant2.flower),
        berryProb : randomInRange(plant1.berryProb, plant2.berryProb),
        berry : randomChoice(plant1.berry, plant2.berry),
        leafProb : randomInRange(plant1.leafProb, plant2.leafProb),
        leaf: randomChoice(plant1.leaf, plant2.leaf)
    }
}

function randomInRange(value1, value2){
    return Math.random() * Math.abs(value1 - value2) + Math.min(value1, value2);
}

function randomChoice(value1, value2){
    return Math.random() < 0.5 ? value1 : value2;
}
