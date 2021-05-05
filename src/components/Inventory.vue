<template>
<!--  <var h = window.innerHeight;></var>-->
<!--  <var w = window.innerWidth;></var>-->
<!--  <div :class="plant.enlarged">-->
<!--    <PlantRenderer :plant="plant" />-->
<!--  </div>-->
<!--  music: https://www.bensound.com-->
  <audio autoplay><source src="@/assets/audio/bensound-sweet.mp3"></audio>
  <div style="display: inline-block;background: #8bf18b; width: 100%; height: 600px;">
    <div style="height: 30px; alignment: right">
      <button @click="toggleInventory" style="height: 20px; width: 60px; padding: 0; background: #3e8e41">
        Inventory
      </button>
<!--      <button class="btn" @click="playSound('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3')"></button>-->
<!--      <div style="background: #9fffa2; width: 600px; height: 590px">-->
<!--      </div>-->
      <div v-if="active">
        <div style="background: #4CAF50; box-sizing: content-box; width: 45%; height: 500px">
          <div>
            <button @click="breedSelected()" class="btn" style="margin: 10px">
              Breed
            </button>

          </div>
          <div style="height: 80%; overflow-y: scroll">
            <div style="box-sizing: content-box; width: 95%; display: grid; grid-template-columns: repeat(4, 1fr); padding: 8px;">
              <div :key="plant.id" v-for="plant in plants" style="width: 130px">
                <div @click="toggleSelection(plant)"
                     :class="[plant.selected ? 'selected' : '', 'plant']">
                  <h3>
                    <i @click="$emit('delete-plant',plant.id)" class="fas fa-times"></i>
                  </h3>
                  <PlantRenderer :plant="plant" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
<!--      <button @click="breedSelected()" class="btn" style="float: right; height: 20px; width: 20px; padding: 0; background: #3e8e41">-->
<!--        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpikaplant.com%2Fen%2F&psig=AOvVaw1kUgeUQMW6ZnbHW2avABLW&ust=1620239024226000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjWzfDSsPACFQAAAAAdAAAAABAD">-->
<!--          <img src="./assets/images/pear.png">-->
<!--      </button>-->
    </div>
<!--    <div class="plantContainer">-->
<!--&lt;!&ndash;      <canvas id="defaultCanvas5" class="p5Canvas" width="300" height="300" style="width: 500px; height: 500px; visibility: visible; background: #702bd2"></canvas>&ndash;&gt;-->
<!--      <PlantRenderer :plant="plants[selectedId]" />-->
<!--    </div>-->
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
      return{
        // selectedId : 0
        active: false
      }
    },
    methods: {
      toggleInventory () {
        this.active = !this.active
      },
      toggleSelection(plant) {
        plant.selected = !plant.selected;
        if (plant.selected === true){
          this.selectedId = plant.id;
          console.log(this.selectedId);
        }
        let count = 0
        for(const plant of this.plants) {
          if (plant.selected === true ){
            count += 1
          }
        }
        if (count > 2){
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
  height: 120px;
}

.plant.enlarged{
  backgroud: #8bf18b;
  width: 100%;
  height: 800px;
}

.plant h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
