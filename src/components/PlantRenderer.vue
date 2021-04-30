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
              graphics.createCanvas(300, 300);
              graphics.background(174, 217, 165)
              console.log("Here are our plant parameters:", this.plant);
              // Replace this with call to plant rendering code
              // Something like drawPlant(this.plant, graphics)
              graphics.strokeWeight(3);
              // graphics.circle(60, 30, this.plant.radius);
              // graphics.line(0,0,20,40);









            }
            graphics.draw(this.plant, 280, 580, this.plant.initialSize, Math.PI * 1.5, 1, 8);
          },
          this.$el
      );
    },
    methods:{
      draw(plant, x, y, size, theta, branchDirection, levels) {
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
</style>

