<template>
  <button @click = "Breed()" :style = " {
  background: color} " class="btn"> {{ text }}
  </button>
  <button @click = "Return()" :style = " {
  background: color} " class="btn"> {{ "Open Lab"}}
  </button>
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
    Return(){
      this.$emit('toggle-return')
    },
  }
}
</script>

<style scoped>
</style>