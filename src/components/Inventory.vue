<template>
<!--  https://soundbible.com/1818-Rainforest-Ambience.html-->
  <audio loop autoplay>
    <source src="@/assets/audio/rainforest.mp3">
  </audio>
  <div class="inventory">
    <div class="plants">
      <div class="inventory-grid">
        <div :key="plant.id" v-for="plant in plants"
             @click="toggleSelection(plant)"
             @dblclick="bigPlant = plant"
             :class="[plant.selected ? 'selected' : '', 'plant']">
            <PlantRenderer :plant="plant" />
        </div>
      </div>
    </div>
    <div class="controls">
      <span class="title">Dr. L's Garden</span>
      <button @click="viewSelected()" :disabled="this.getSelectedPlants().length !== 1"  class="btn">
        View
      </button>
      <button @click="breedSelected()" :disabled="this.getSelectedPlants().length !== 2"  class="btn">
        Breed
      </button>
      <span v-if="this.getSelectedPlants().length > 2">Select only two plants to breed</span>
    </div>
  </div>
  <div class="big-plant" v-if="bigPlant" @click="bigPlant = null">
    <PlantRenderer :plant="bigPlant" :size=400 />
  </div>
</template>

<script>
import PlantRenderer from "./PlantRenderer"
import Button from "../../Rendering-prototype/Vue/Component/Button";

export default {
  name: 'Inventory',
  props: {
      plants: Array
  },
  components: {
    Button,
      PlantRenderer,
  },
  data () {
    return {
      bigPlant: null
    }
  },
  methods: {
    toggleSelection(plant) {
      plant.selected = !plant.selected;
      if (plant.selected === true){
        this.selectedId = plant.id;
        console.log(this.selectedId);
      }
    },

    getSelectedPlants() {
      return this.plants.filter(plant => plant.selected);
    },

    viewSelected() {
      this.bigPlant = this.getSelectedPlants()[0];
    },

    breedSelected() {
      let selectedPlants = this.getSelectedPlants();
      this.plants.unshift({
        ...this.breedPlant(selectedPlants[0], selectedPlants[1]),
        id: Math.max(...this.plants.map(p => p.id)) + 1  // new plant ID = largest existing ID + 1
      });
      for(const plant of this.plants) {
        plant.selected = false;
      }
    },

    breedPlant(plant1, plant2) {
      return {
        initialSize: this.randomInRange(plant1.initialSize, plant2.initialSize),
        strokeWeightSensitivity: this.randomInRange(plant1.strokeWeightSensitivity, plant2.strokeWeightSensitivity),
        leftBranchSize: this.randomInRange(plant1.leftBranchSize, plant2.leftBranchSize),
        leftBranchAngle: this.randomInRange(plant1.leftBranchAngle, plant2.leftBranchAngle),
        rightBranchSize: this.randomInRange(plant1.rightBranchSize, plant2.rightBranchSize),
        rightBranchAngle: this.randomInRange(plant1.rightBranchAngle, plant2.rightBranchAngle),
        midBranchSize: this.randomInRange(plant1.midBranchSize, plant2.midBranchSize),
        flowerProb: this.randomInRange(plant1.flowerProb, plant2.flowerProb),
        flower: this.randomChoice(plant1.flower, plant2.flower),
        fruitProb: this.randomInRange(plant1.fruitProb, plant2.fruitProb),
        fruit: this.randomChoice(plant1.fruit, plant2.fruit),
        leafProb: this.randomInRange(plant1.leafProb, plant2.leafProb),
        leaf: this.randomChoice(plant1.leaf, plant2.leaf)
      }
    },

    randomInRange(value1, value2) {
      return Math.random() * Math.abs(value1 - value2) + Math.min(value1, value2)
    },

    randomChoice(value1, value2) {
      return Math.random() < 0.5 ? value1 : value2;
    },
  },
}
</script>

<style>

.inventory {
  background: #599259;
  height: 100%;
}

.plants {
  overflow-y: auto;
  height: 100%;
  position: absolute;
  top: 0;
  padding-top: 30px;
}

.controls {
  position: absolute;
  top: 0;
  text-align: center;
  width: 100%;
  background: #599259ee;
  border-bottom: 1px solid #186519;
}

.btn {
  display: inline-block;
  background: #552907ee;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}

.btn:disabled{
  background: #5bbd5b66;
  color: #ffffff66;
}

.title{
  position: fixed;
  left: 10px;
  font-size: xx-large;
}

span {
  color: white;
}

.inventory-grid {
  padding: 50px;
}

.plant {
  margin: 5px;
  cursor: pointer;
  display: inline-block;
  background-image: linear-gradient(#85c3fc, rgb(157, 250, 252));
  /*https://codepen.io/Jtwa/pen/dYvLpN*/
  animation: plant 0.3s linear 1;
}

@keyframes plant{
  /*https://codepen.io/Jtwa/pen/dYvLpN*/
  50%  {transform: scale(1.2);}
}

.big-plant {
  background: #4CAF50cc;
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.big-plant canvas {
  background: rgb(120, 223, 225);
  box-shadow: 0 10px 30px #00000055;
}

.plant h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.plant.selected {
  outline: 2px solid #fffdc9;
  background-image: linear-gradient(#e2abc6, rgb(248, 246, 146));
}

/* https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp */
/* width */
::-webkit-scrollbar {
  width: 15px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #5bbd5b00;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #9fffa2;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #552907ee;
}
</style>
