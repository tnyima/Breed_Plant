<template>
<!--  <vue-load-image>-->
<!--    <img src="./assets/images/pear.png">-->
<!--  </vue-load-image>-->
  <div class = "container">
    <Header @toggle-return="toggleReturn"
            title = "Plant Inventory"
            :tReturn="tReturn"/>
    <div v-show="tReturn"><Return/></div>
    <Inventory @toggle-reminder="toggleReminder"
               @delete-plant="deletePlant"
               :plants="plants"/>
  </div>
</template>

<script>
import Header from './components/Header'
import Inventory from './components/Inventory'
import Return from './components/Return'
import p5 from 'p5';
// import preloadImage from 'vue-preload-image'

export default {
  name: 'App',
  components: {
    Header,
    Inventory,
    Return
  },
  data(){
    return{
      plants:[],
      tReturn: false
    }
  },
  methods: {
    toggleReturn(){
      this.tReturn = !this.tReturn
    },
    deletePlant(id){
      if (confirm('Are you sure about deleting this plant?')) {
        this.plants = this.plants.filter((plant) => 
        plant.id !== id)
      } 
    },
    toggleReminder(id){
      this.plants = this.plants.map
      ((plant) => plant.id === id ? {...plant, reminder: !plant.reminder } : plant)
    }
  },
  created() {
    this.plants = [
      {
        id: 1,
        text:'Plant Tenzin',
        description:'Place holder of plant 1',
        reminder: true,
        radius: 20, // Replace this with real plant parameters
        initialSize : 20,
        strokeWeight : this.initialSize * 0.05,
        strokeWeightSensitivity : 1.2,
        leftBranchSize : .51,
        leftBranchAngle : Math.PI/7,
        rightBranchSize : .42,
        rightBranchAngle : Math.PI/9,
        midBranchSize : .8,
        flowerProb : 0.06,
        flower : "sunflower",
        berryProb: 0,
        berry : null
      },

      {
        id: 2,
        text:'Plant Leen',
        description:'Place holder of plant 2',
        reminder: true,
        radius: 50,  // Replace this with real plant parameters
        initialSize : 20,
        strokeWeight : this.initialSize * 0.02,
        strokeWeightSensitivity : 1.5,
        leftBranchSize : .42,
        leftBranchAngle : Math.PI/4,
        rightBranchSize : .65,
        rightBranchAngle : Math.PI/7,
        midBranchSize : .6,
        flowerProb : 0.2,
        flower : "corpseFlower",
        berryProb : 0.2,
        berry : this.raspberry
      },

      {
        id: 3,
        text: 'Plant Cameron',
        description:'Place holder of plant 3',
        reminder: false,
        radius: 120,  // Replace this with real plant parameters
      },
      {
        id: 4,
        text: 'Plant 4',
        description:'Place holder of plant 4',
        reminder: false,
        radius: 120,  // Replace this with real plant parameters
      },
      {
        id: 5,
        text: 'Plant 5',
        description:'Place holder of plant 5',
        reminder: false,
        radius: 120,  // Replace this with real plant parameters
      },
      {
        id: 6,
        text: 'Plant 6',
        description:'Place holder of plant 6',
        reminder: false,
        radius: 120,  // Replace this with real plant parameters
      },
      {
        id: 7,
        text: 'Plant 7',
        description:'Place holder of plant 7',
        reminder: false,
        radius: 120,  // Replace this with real plant parameters
      },
      {
        id: 8,
        text: 'Plant 8',
        description:'Place holder of plant 8',
        reminder: false,
        radius: 120,  // Replace this with real plant parameters
      },
      {
        id: 9,
        text: 'Plant 9',
        description:'Place holder of plant 9',
        reminder: false,
        radius: 120,  // Replace this with real plant parameters
      },
      {
        id: 10,
        text: 'Plant 10',
        description:'Place holder of plant 10',
        reminder: false,
        radius: 120,  // Replace this with real plant parameters
      }
    ]
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}
.container {
  width: 50%;
  margin: 30px auto;
  overflow: auto;
  height: 70%;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
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
</style>