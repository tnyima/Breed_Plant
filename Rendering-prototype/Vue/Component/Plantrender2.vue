<script>
import { h } from "vue";
import p5 from "vue-p5";
export default{
    props: {
        level: {
            default: 1
        }
    },
    setup({ level }){
        return () => h(`h${level}`,{},"Still There?");
    }
};
</script>
<style scoped>
</style>>

