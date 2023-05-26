<template><div ref="separator" class="h-[5vh]"></div></template>
<script lang="ts">
export default {
  props: {
    color: {
      type: String,
      default: "black",
    },
    height: {
      type: String,
      default: "5vh",
    },
  },
  mounted() {
    this.$refs.separator.style.backgroundColor = this.color;
    this.$refs.separator.style.height = this.height;
  },
};
</script>
