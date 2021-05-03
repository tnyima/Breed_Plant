<template>
  <div class="plantContainer" />
</template>

<script>
import p5 from 'p5';

export default{
    props: {
      plant: {},

    },
    mounted() {

      new p5(
          (graphics) => {
            graphics.setup = () => {
              graphics.createCanvas(150, 150);
              graphics.background(174, 217, 165)

              // let pear
              // pear = require(".@/assets/images/pear.png")
              // pear = graphics.loadImage(require("@/assets/images/pear.png"));
              // image(pear, 20, 20)

              this.drawPlant(graphics, this.plant, graphics.height / 2, graphics.width*.9, this.plant.initialSize, Math.PI * 1.5, 1, 8);
            }
          },
          this.$el
      );
    },
    methods: {
      drawPlant(g, plant, x, y, size, theta, branchDirection, levels) {
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
            if (r < plant.flowerProb) {
              g.push();
              g.translate(centerX, centerY);
              g.rotate(theta + Math.PI / 2);
              //g.image(g.loadImage("/Users/tenzinnyima/Documents/GitHub/Breed_Plant/src/assets/images/sunflower.png"), 0, 0, 60, 60);
              g.pop();
            }
          } else {
            if (r < plant.berryProb && plant.berry != null) {
              g.push();
              g.translate(centerX, centerY);
              g.rotate(theta + Math.PI / 2);
              //g.image(plant.berry, 0, 0, 20, 20);
              g.pop();
            }
          }
        }
        g.strokeWeight(Math.pow(plant.strokeSizeSensitivity, levels))
        // strokeWeight(levels*.5)

        g.line(x, y, x2, y2)

        this.drawPlant(g, plant, x2, y2, size * plant.leftBranchSize, theta + branchDirection * plant.rightBranchAngle, branchDirection, levels - 1);
        this.drawPlant(g, plant, x2, y2, size * plant.rightBranchSize, theta - branchDirection * plant.leftBranchAngle, branchDirection, levels - 1);
        this.drawPlant(g, plant, x2, y2, size * plant.midBranchSize, theta, -branchDirection, levels - 1);
      }
    },
      randomChoice(value1, value2){
        return Math.random() < 0.5 ? value1 : value2;
      },
      randomInRange(value1, value2){
        if (value1 > value2){
          return Math.random() * (value1 - value2) + value2;
        }
        else{
          return Math.random() * (value2 - value1) + value1;
        }
    }
};
</script>

<style scoped>

.plantContainer{
  display: grid;
  grid-template-columns: 150px 150px 150px;
}
</style>

