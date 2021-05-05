<template>
<!--  <vue-load-image>-->
<!--    <img src="./assets/images/pear.png">-->
<!--  </vue-load-image>-->
  <div class = "container">
    <Inventory @delete-plant="deletePlant"
               :plants="plants"/>
    <router-view :tReturn="tReturn"></router-view>
    <Footer/>
  </div>
</template>

<script>
import Inventory from './components/Inventory'
import Footer from "@/components/Footer"

export default {
  name: 'App',
  components: {
    Inventory,
    // Footer
  },
  data(){
    return{
      plants:[],
      tReturn: false
    }
  },

  methods: {
    //audio code from:https://codepen.io/CSWApps/pen/PJevMN
    playSound (sound) {
      if (sound) {
        let audio = new Audio(sound);
        audio.play();
      }
    },
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
        berryProb: 0,
        berry : null,
        leafProb: 0.02,
        leaf : "leaf"
      },
      {
        id: 2,
        initialSize : 0.15,
        strokeWeightSensitivity : 0.32,
        leftBranchSize : .42,
        leftBranchAngle : Math.PI/4,
        rightBranchSize : .65,
        rightBranchAngle : Math.PI/7,
        midBranchSize : .6,
        flowerProb : 0.03,
        flower : "sunflower",
        berryProb : 0.02,
        berry : "raspberry",
        leafProb: 0.4,
        leaf : "leaf"
      },
      {
        id: 3,
        initialSize : 0.24,
        strokeWeightSensitivity : 0.4,
        leftBranchSize : .51,
        leftBranchAngle : Math.PI/7,
        rightBranchSize : .42,
        rightBranchAngle : Math.PI/9,
        midBranchSize : .8,
        flowerProb : 0.06,
        flower : null,
        berryProb: 0,
        berry : null,
        leafProb: 0,
        leaf : null

      },
      {
        id: 4,
        initialSize: 0.2,
        strokeWeightSensitivity : 0.08,
        leftBranchSize: .42,
        leftBranchAngle: Math.PI / 4,
        rightBranchSize: .65,
        rightBranchAngle: Math.PI / 7,
        midBranchSize: .6,
        flowerProb: 0.2,
        flower: null,
        berryProb: 0.2,
        berry: null,
        leafProb: 0,
        leaf : null
      },
      {
        id: 5,
        initialSize : 0.17,
        strokeWeightSensitivity : 0.02,
        leftBranchSize : .41,
        leftBranchAngle : Math.PI/2.5,
        rightBranchSize : .05,
        rightBranchAngle : Math.PI/3.1,
        midBranchSize : .6,
        flowerProb : 0.2,
        flower : "sunflower",
        berryProb : 0.2,
        berry : null,
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
}
.container {
  width: 100%;
  /*margin: 30px auto;*/
  overflow: auto;
  height: 100%;
  /*padding: 30px;*/
  /*border-radius: 5px;*/
}
.btn {
  display: inline-block;
  background: #186519;
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