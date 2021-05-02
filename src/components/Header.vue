<template>
  <h1>{{ title }}</h1>
<!--  <Button text = "Plant1" color = "green"/>-->
<!--  <Button text = "Plant2" color = "green"/>-->
  <Button @toggle-return="$emit('toggle-return')"
          text = "Breed" color = "green"/>

</template>

<script>
import Button from "./Button"
  export default {
  name: "Header",
    props: {
    title: String,
      tReturn: Boolean,
    },
    components:{
    Button
    }
}
</script>

<style scoped>
header{
  display:flex;
  justify-content: space-between;
   align-items: center;
   margin-bottom: 20px;
}
</style>


