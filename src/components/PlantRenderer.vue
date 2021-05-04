<template>
  <div class="plantContainer" />
</template>

<script>
import p5 from 'p5';
import Inventory from "./Inventory";

export default{
  components: {Inventory},
  props: {
      plant: {},
    },
    mounted() {

      new p5(
          (graphics) => {
            graphics.setup = () => {
              graphics.createCanvas(180, 180);
              graphics.background(174, 217, 165);

              this.drawPlant(graphics, this.plant, graphics.height / 2, graphics.width*.9, graphics.width * this.plant.initialSize, Math.PI * 1.5, 1, 5);
            }
          },
          this.$el
      );
    },
    methods: {
      drawPlant(g, plant, x, y, size, theta, branchDirection, levels) {
        if (levels <= 0 || x > g.width || y > g.height || x < 0)  {
          return;
        }
        let x2 = x + (size * Math.cos(theta));
        let y2 = y + (size * Math.sin(theta));

        if (1 <= levels && levels < 2) {
          let image = null;
          if (Math.random() < plant.leafProb && plant.leaf != null) {
            image = plant.leaf;
          } else if (Math.random() < plant.flowerProb && plant.flower != null) {
            image = plant.flower;
          } else if (Math.random() < plant.berryProb && plant.berry != null) {
            image = plant.berry;
          }
          if (image) {
            g.loadImage(require("@/assets/images/" + image + ".png"), pear => {
              g.push();
              g.translate(x2, y2);
              g.rotate(theta + Math.PI / 2);
              g.image(pear, 0, 0, 6, 6);
              g.pop();
            });
          }
        }
        g.strokeWeight(Math.pow(plant.strokeWeightSensitivity, levels))
        g.line(x, y, x2, y2)

        this.drawPlant(g, plant, x2, y2, size * plant.leftBranchSize, theta + branchDirection * plant.rightBranchAngle, branchDirection, levels - 1);
        this.drawPlant(g, plant, x2, y2, size * plant.rightBranchSize, theta - branchDirection * plant.leftBranchAngle, branchDirection, levels - 1);
        this.drawPlant(g, plant, x2, y2, size * plant.midBranchSize, theta, -branchDirection, levels - 1);
      }
    }
};
</script>

<style scoped>
</style>

