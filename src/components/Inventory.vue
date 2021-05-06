<template>
<!--  <audio loop autoplay>-->
<!--    <source src="@/assets/audio/rainforest.mp3">-->
<!--  </audio>-->
  <div class="big-plant" v-if="bigPlant" @click="bigPlant = null">
    <PlantRenderer :plant="bigPlant" size="400"/>
  </div>
  <div class="inventory">
    <div class="controls">
      <button @click="viewSelected()" :disabled="this.getSelectedPlants().length !== 1"  class="btn">
        View
      </button>
      <button @click="breedSelected()" :disabled="this.getSelectedPlants().length !== 2"  class="btn">
        Breed
      </button>
      <span v-if="this.getSelectedPlants().length > 2">Select only two plants to breed</span>
    </div>
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
          berryProb: this.randomInRange(plant1.berryProb, plant2.berryProb),
          berry: this.randomChoice(plant1.berry, plant2.berry),
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


    emits: ['delete-plant'],
}
</script>

<style>

.inventory{
  background: #4CAF50;
  height: 100%;
}

.plants {
  overflow-y: scroll;
  height: 100%;
}

.inventory-grid{
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 50px;
}

.plant {
  margin: 5px;
  cursor: pointer;
  display: inline-block;
  background: rgb(120, 223, 225);
}

.plant.selected {
  outline: 5px solid green;
  height: 190px;
  width: 190px;
  background: #fffc35;
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
  box-shadow: 0 10px 30px #00000055;
}

.plant h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.btn {
  display: inline-block;
  background: #186519;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:disabled{
  background: #888;
  color: #444;
}
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #5bbd5b;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #0e5816;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #9fffa2;
}
</style>
