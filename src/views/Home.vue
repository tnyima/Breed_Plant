<template >
  <div v-show="tReturn">
    <Return/>
  </div>
</template>

<script>
import Return from '../components/Return'
export default {
  name: "Home",
  props:{
    tReturn: Boolean,
  },
  components:{
    Return,
  }
}
</script>

<style scoped>

</style>