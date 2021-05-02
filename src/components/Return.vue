<template>
  <div class = "container">
    <Header title = "Dr'L's Garden"/>
    <button @click = "BreedPlant()" :style = " {
  background: color} " class="btn"> {{ "Breed" }}
    </button>
    <button @click = "Plant1()" :style = " {
  background: color} " class="btn"> {{ "Plant 1" }}
    </button>
    <button @click = "Plant2()" :style = " {
  background: color} " class="btn"> {{ "Plant 2" }}
    </button>
    <button @click = "Reselect()" :style = " {
  background: color} " class="btn"> {{ "Reselect" }}
    </button>
  </div>
</template>

<script>
import PlantRenderer from "./PlantRenderer"

let plant1 = {
  initialSize : 80,
  strokeSizeSensitivity : 1.2,
  leftBranchSize : .51,
  leftBranchAngle : Math.PI/7,
  rightBranchSize : .42,
  rightBranchAngle : Math.PI/9,
  midBranchSize : .8,
  flowerProb : 0.06,
  flower : null,
  berryProb: 0,
  berry : null,
  chosen : false
}
let plant2 = {
  initialSize : 250,
  strokeSizeSensitivity : 1.5,
  leftBranchSize : .42,
  leftBranchAngle : Math.PI/4,
  rightBranchSize : .65,
  rightBranchAngle : Math.PI/7,
  midBranchSize : .6,
  flowerProb : 0.2,
  flower : null,
  berryProb : 0.2,
  berry : null,
  chosen: false
}
let plant3 = {
  initialSize : 200,
  strokeSizeSensitivity : 1.4,
  leftBranchSize : .41,
  leftBranchAngle : Math.PI/4,
  rightBranchSize : .05,
  rightBranchAngle : Math.PI/7,
  midBranchSize : .6,
  flowerProb : 0.2,
  flower : null,
  berryProb : 0.2,
  berry : null,
  chosen: false
}
let plantInventory = [plant1,plant2,plant3]
export default {
  name: "Return",
  props: {
    text:String,
    color:String
  },
  methods:{
    BreedPlant(){
      let chosenPlants = plantInventory.filter(plant => plant.chosen === true);
      let childPlant = this.breedPlant(chosenPlants[0], chosenPlants[1]);
      console.log(chosenPlants)
      console.log(childPlant)
      PlantRenderer.drawPlant(graphics, this.plant, graphics.height / 2, graphics.width*.9, this.plant.initialSize, Math.PI * 1.5, 1, 8)
      return childPlant;
    },
    Plant1(){
      console.log("get Plant 1 parameters");
      plant1.chosen = true;
    },
    Plant2(){
      console.log("get Plant 2 parameters");
      plant2.chosen = true;
    },
    Reselect(){
      plantInventory.forEach(plant => plant.chosen = false);
    },
    breedPlant(plant1, plant2) {
      return {
        initialSize: this.randomInRange(plant1.initialSize, plant2.initialSize),
        strokeSizeSensitivity: this.randomInRange(plant1.strokeSizeSensitivity, plant2.strokeSizeSensitivity),
        leftBranchSize: this.randomInRange(plant1.leftBranchSize, plant2.leftBranchSize),
        leftBranchAngle: this.randomInRange(plant1.leftBranchAngle, plant2.leftBranchAngle),
        rightBranchSize: this.randomInRange(plant1.rightBranchSize, plant2.rightBranchSize),
        rightBranchAngle: this.randomInRange(plant1.rightBranchAngle, plant2.rightBranchAngle),
        midBranchSize: this.randomInRange(plant1.midBranchSize, plant2.midBranchSize),
        flowerProb: this.randomInRange(plant1.flowerProb, plant2.flowerProb),
        flower: this.randomChoice(plant1.flower, plant2.flower),
        berryProb: this.randomInRange(plant1.berryProb, plant2.berryProb),
        berry: this.randomChoice(plant1.berry, plant2.berry)
      }
    },
    randomInRange(value1, value2){
      if (value1 > value2){
        return Math.random() * (value1 - value2) + value2;
      } else{
        return Math.random() * (value2 - value1) + value1;
      }
    },
    randomChoice(value1, value2){
      return Math.random() < 0.5 ? value1 : value2;
    }
  }
}
</script>

<style scoped>
</style>