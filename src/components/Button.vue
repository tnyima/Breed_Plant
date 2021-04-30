<template>
  <button: @click = "Breed()" :style = " {
  background: color} " class="btn"> {{ text }}
  </button:>
</template>

<script>
export default {
  name: "Button",
  props: {
      text:String,
      color:String
  },
  methods:{
      Breed(){
          console.log("Breed");
      },
  }
}
</script>

<style scoped>
</style>