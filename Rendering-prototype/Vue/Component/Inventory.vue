<template>

  <h1>List of Plants</h1>
  <div class="plant">
    <button @click = "onClick()"><img class="snake" src="https://livingfresh.ca/wp-content/uploads/2019/08/IMG_8708-600x600.jpg" alt="Snake Plant">
    </button>
    <button @click = "onClick()"><img class="aloe" src="https://www.indoor-plants.co.uk/wp-content/uploads/aloe-vera.jpg" alt="Aloe Vera">
    </button>
    <button @click = "onClick()"><img class="spider" src="https://www.plants.com/images/177069L_20201119-1605815853802.jpg" alt="Spider Plant"></button>
  </div>

<!--  <ul>-->
<!--    <li v-for="item in images" :key="item.plant" :src="item.plant">-->
<!--      {{item.plant}}-->

<!--    </li>-->
<!--  </ul>-->

  <div >

  </div>


</template>

<script>

import InventoryButton from "@/components/Inventory/InventoryButton";
export default {
  name: "Inventory",
  data(){
    return {
      images: [
        {
          plant: 'https://livingfresh.ca/wp-content/uploads/2019/08/IMG_8708-600x600.jpg',
          name: 'Snake Plant'
        },
        {
          plant: 'https://www.indoor-plants.co.uk/wp-content/uploads/aloe-vera.jpg',
          name: 'Aloe Vera'
        },
        {
          plant: '/Users/tenzinnyima/breed_plant2/src/components/beautiful.png',
          name:'Beautiful Plant'
        }
      ]
    }
  }
}
</script>

<style>
.plant{
  width: 200px;
  height: 150px;
}
.spider{
  width: 450px;
  height: 450px;
}
.snake{
  width: 450px;
}

/*nav{*/
/*  display: flex;*/
/*  align-content: center;*/
/*  justify-content: center;*/
/*}*/

/*nav .menu-item{*/
/*  color: #FFF;*/
/*  padding: 10px 20px;*/
/*  position: relative;*/
/*  text-align: center;*/
/*  border-bottom: 3px solid transparent;*/
/*  display: flex;*/
/*  transition: 0.4s;*/
/*}*/

/*nav .menu-item.active, nav .menu-item:hover{*/
/*  background-color: #444;*/
/*  border-bottom-color: #FF5858;*/
/*}*/


/*nav .menu-item a{*/
/*  color: inherit;*/
/*  text-decoration: none;*/
/*}*/


</style>