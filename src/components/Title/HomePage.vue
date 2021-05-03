<template>
  <div class="container">
    <img :src="image"/>
    <button  class="inventory" >Inventory</button>


  </div>







</template>

<script>
import image from "../../assets/images/nobuttons.png";
import InventoryButton from "./InventoryButton";


export default {
name: "HomePage",
  components: {InventoryButton},
  data(){
    return{
      image: image,

    }
  },
  method:{

      }


}
</script>

<style scoped>

.container{
  position: relative;
  width: 100%;
}

.container img{
  width: 100%;
  height: 100%;
}

.container .inventory{
  position: absolute;
  bottom: 20%;
  right: 40%;
  transform: translate(-30%, -30%);
  background-color: olivedrab;
  color: white;
  font-size: 16px;
  padding: 16px 60px;
  border: none;
  cursor: pointer;
  text-align: center;

}

.container .inventory:hover{
  background-color: darkolivegreen;
  color: white;
}




</style>