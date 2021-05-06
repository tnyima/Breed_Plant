<template>
  <Inventory @delete-plant="deletePlant"
             :plants="plants"/>
  <router-view :tReturn="tReturn"></router-view>
  <Footer/>
</template>

<script>
import Inventory from './components/Inventory'
import Footer from "@/components/Footer"

export default {
  name: 'App',
  components: {
    Inventory
  },
  data(){
    return{
      plants:[],
      tReturn: false
    }
  },

  methods: {
    //audio code from:https://codepen.io/CSWApps/pen/PJevMN
    // playSound (sound) {
    //   if (sound) {
    //     let audio = new Audio(sound);
    //     audio.play();
    //   }
    // },
    toggleReturn(){
      this.tReturn = !this.tReturn
    },
    deletePlant(id){
      if (confirm('Are you sure about deleting this plant?')) {
        this.plants = this.plants.filter((plant) => 
        plant.id !== id)
      } 
    }
  },
  created() {
    this.plants = [
      {
        id: 1,
        initialSize : 0.12,
        strokeWeightSensitivity : 0.1,
        leftBranchSize : .51,
        leftBranchAngle : Math.PI/7,
        rightBranchSize : .42,
        rightBranchAngle : Math.PI/9,
        midBranchSize : .8,
        flowerProb : 0.04,
        flower : "sunflower",
        fruitProb: 0.2,
        fruit : "apple",
        leafProb: 0.21,
        leaf : "basicleaf"
      },
      {
        id: 2,
        initialSize : 0.24,
        strokeWeightSensitivity : 0.02,
        leftBranchSize : .41,
        leftBranchAngle : Math.PI/2.5,
        rightBranchSize : .05,
        rightBranchAngle : Math.PI/3.1,
        midBranchSize : .6,
        flowerProb : 0.2,
        flower : null,
        fruitProb : 0.34,
        fruit : "raspberry",
        leafProb: 0.4,
        leaf : "trileaf"
      },
      {
        id: 3,
        initialSize : 0.24,
        strokeWeightSensitivity : 0.42,
        leftBranchSize : .51,
        leftBranchAngle : Math.PI/9,
        rightBranchSize : .42,
        rightBranchAngle : Math.PI/5,
        midBranchSize : .8,
        flowerProb : 0.06,
        flower : null,
        fruitProb: 0.17,
        fruit : "orange",
        leafProb: 0.4,
        leaf : "fallleaf"
      },
      {
        id: 4,
        initialSize: 0.2,
        strokeWeightSensitivity : 0.08,
        leftBranchSize: .42,
        leftBranchAngle: Math.PI / 4.5,
        rightBranchSize: .65,
        rightBranchAngle: Math.PI / 7.5,
        midBranchSize: .6,
        flowerProb: 0.2,
        flower: "cherryblossom",
        fruitProb: 0.2,
        fruit: "pear",
        leafProb: 0.3,
        leaf : "basicleaf"
      },
      {
        id: 5,
        initialSize : 0.34,
        strokeWeightSensitivity : 0.4,
        leftBranchSize : .7,
        leftBranchAngle : Math.PI/3,
        rightBranchSize : .6,
        rightBranchAngle : Math.PI/4,
        midBranchSize : .7,
        flowerProb : 0.09,
        flower : "cherryblossom",
        fruitProb: 0.12,
        fruit : "blueberry",
        leafProb: 0.32,
        leaf : "basicleaf"
      },
      {
        id: 6,
        initialSize : 0.17,
        strokeWeightSensitivity : 0.19,
        leftBranchSize : .41,
        leftBranchAngle : Math.PI/2.5,
        rightBranchSize : .05,
        rightBranchAngle : Math.PI/3.1,
        midBranchSize : .6,
        flowerProb : 0.1,
        flower : "sunflower",
        fruitProb : 0.12,
        fruit : "strawberry",
        leafProb: 0.4,
        leaf : null
      },
      {
        id: 7,
        initialSize : 0.34,
        strokeWeightSensitivity : 0.23,
        leftBranchSize : .41,
        leftBranchAngle : Math.PI/2.5,
        rightBranchSize : .05,
        rightBranchAngle : Math.PI/3.1,
        midBranchSize : .6,
        flowerProb : 0.5,
        flower : null,
        fruitProb : 0.2,
        fruit : null,
        leafProb: 0.4,
        leaf : null
      }
    ]
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: content-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
  height: 100vh;
  overflow-y: hidden;
}
#app {
  height: 100%;
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