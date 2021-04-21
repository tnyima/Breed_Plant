<template>
  <div class = "container">
    <Header title = "Plant Inventory"/>
    <Plants @delete-plant="deletePlant" :plants="plants"/>
  </div>
</template>

<script>
import Header from './components/Header'
import Plants from './components/Plants'
export default {
  name: 'App',
  components: {
    Header,
    Plants
  },
  data(){
    return{
      plants:[]
    }
  },
  methods: {
    deletePlant(id){
      if (confirm('Are you sure about deleting this plant?')) {
        this.plants = this.plants.filter((plant) => 
        plant.id !== id)
      } 
    },
  },
  created() {
      this.plants = [
      {
        id: 1,
        text:'Plant Tenzin',
        description:'Place holder of plant 1',
        reminder: true,
      },

      {
        id: 2,
        text:'Plant Leen',
        description:'Place holder of plant 2',
        reminder: true,
      },

      {
        id: 3,
        text: 'Plant Cameron',
        description:'Place holder of plant 3',
        reminder: false ,
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
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
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