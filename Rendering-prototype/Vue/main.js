import { createApp, h } from 'vue'
import App from './App.vue'

const app = createApp(App);

app.component('PlantRenderer', {
  render() {
    return h('hi', {}, "HELLO!");
  }
});

app.mount('#app');
