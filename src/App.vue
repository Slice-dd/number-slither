<template>
  <div id="app">
    <number-slither :number="num"></number-slither>
  </div>
</template>

<script>
import numberSlither from './components/number-slither.vue'

export default {
  name: 'app',
  data() {
    return {
      num: 223
    }
  },
  components: {
    numberSlither
  },
  mounted() {
    setInterval(() => {
      this.num -= 440.56
      console.log(this.num);
    }, 2500)
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
ul, li {
  list-style: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
