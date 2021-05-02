<template>
  <h1>{{ title }}</h1>
<!--  <Button text = "Plant1" color = "green"/>-->
<!--  <Button text = "Plant2" color = "green"/>-->
  <Button text = "Breed" color = "green"/>
</template>

<script>
import Button from "./Button1"
  export default {
  name: "Header",
    props: {
    title: String,
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


