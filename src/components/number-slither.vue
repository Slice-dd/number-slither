<template>
  <div
    class="number-slither"
    ref="slither"
  >
    <ul
      class="number-list"
      v-for="(num, index) in currentNumber"
      :key="index"
      v-transform="num"
    >
      <li
        v-for="item in allCharacter"
        :key="item"
      >{{item}}</li>
    </ul>
  </div>
</template>

<script>
let clientHeight = 0; // 父级容器可视区域高度 clientHeight 

export default {
  name: "numberSlither",
  data() {
    return {
      allCharacter: [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        ",",
        ".",
        "-"
      ], // 所有字符
      clientHeight: 0
    };
  },
  computed: {
    currentNumber() {
      return this.number.toLocaleString();
    }
  },
  props: {
    number: Number
  },
  mounted() {
    debugger
    clientHeight = this.$refs.slither.clientHeight;
    window.addEventListener("resize", () => {
      clientHeight = this.$refs.slither.clientHeight;
    });
  },
  directives: {
    transform: function(el, { value }) {
      setTimeout(() => {
        const character = [",", ".", "-"];
        const index = character.indexOf(value);
        if (index === -1) {
          el.style.transform = `translateY(${-clientHeight * value}px)`;
        } else {
          el.style.transform = `translateY(${-clientHeight * (10 + index)}px)`;
        }
      }, 0);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.number-slither {
  overflow: hidden;
  display: flex;
  font-size: 1vw;
  justify-content: space-around;
  height: 6em;
  line-height: 6em;

  > .number-list {
    font-size: 4em;
    transition: transform 1s;
  }
}
</style>
