<template>
  <div>
    <button @click="breedSelected()" class="btn">
      Breed
    </button>
    <div :key="plant.id" v-for="plant in plants">
      <div @click="toggleSelection(plant.id)"
           :class="[plant.selected ? 'selected' : '', 'plant']">
        <h3>{{ plant.text }}
          <i @click="$emit('delete-plant',plant.id)" class="fas fa-times"></i>
        </h3>
        <p>{{ plant.description }}</p>
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
      toggleSelection(id) {
        for (const plant of this.plants) {
          if (plant.id === id) {
            plant.selected = !plant.selected;
          }
        }
      }
    },
    emits: ['delete-plant'],
}
</script>

<style>
.fas {
  color: red;
}

.plant {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.plant.selected {
  border-left: 5px solid green;
}

.plant h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
