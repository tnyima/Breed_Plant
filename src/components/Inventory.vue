<template>
  <div>
    <button @click="breedSelected()" class="btn">
      Breed
    </button>
  </div>
  <div style="box-sizing: content-box; width: 90%; display: grid; grid-template-columns: repeat(7, 1fr);">
    <div :key="plant.id" v-for="plant in plants" style="width: 155px; display: grid">
      <div @click="toggleSelection(plant)"
           :class="[plant.selected ? 'selected' : '', 'plant']">
        <h3>
          <i @click="$emit('delete-plant',plant.id)" class="fas fa-times"></i>
        </h3>
        <PlantRenderer :plant="plant" />
      </div>
    </div>
  </div>
</template>

<script>
import PlantRenderer from "./PlantRenderer"

export default {
    name: 'Inventory',
    props: {
        plants: Array
    },
    components: {
        PlantRenderer,
    },
    methods: {
      toggleSelection(plant) {
        plant.selected = !plant.selected;
        let count = 0
        for(const plant of this.plants) {
          if (plant.selected === true ){
            count += 1
          }
        }
        if (count > 2){
          //alert("You may not select more than two plant, " +
              //"please reselect your parent plants")
          for(const plant of this.plants) {
            plant.selected = false;
          }
        }
      },

      breedSelected() {
        let selectedPlants = this.plants.filter(plant => plant.selected);
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

      randomInRange(value1, value2) {
        if (value1 > value2){
          return Math.random() * (value1 - value2) + value2;
        } else{
          return Math.random() * (value2 - value1) + value1;
        }
      },

      randomChoice(value1, value2) {
        return Math.random() < 0.5 ? value1 : value2;
      }
    },

    emits: ['delete-plant'],
}
</script>

<style>
.fas {
  color: #2757a0;
}

.plant {
  /*background: #ffc4c4;*/
  /*width: 155px;*/
  /*height: 155px;*/
  margin: 5px;
  /*padding: 0px 0px;*/
  cursor: pointer;
}

.plant.selected {
  border-left: 5px solid green;
  height: 150px;
}

.plant h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
