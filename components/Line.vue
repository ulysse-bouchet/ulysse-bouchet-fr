<template>
  <div class="absolute left-60 flex flex-col items-center transition-all duration-500">
    <div
      ref="ball"
      class="h-7 w-7 flex-shrink-0 relative top-[8.5vh] rounded-full bg-blue"
    ></div>
    <div ref="bar" class="h-[90vh] w-2 relative -top-[3vh] bg-white"></div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    color: {
      type: String,
      default: "white",
    },
    ball: {
      type: String,
      default: "visible",
    },
    height: {
      type: String,
      default: "90vh",
    },
  },
  mounted() {
    this.$refs.bar.style.backgroundColor = this.color;
    this.$refs.bar.style.height = this.height;
    this.$refs.ball.style.backgroundColor = this.color;
    this.$refs.ball.style.visibility = this.ball;
  },
};
</script>
