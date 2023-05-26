<template>
  <div class="h-36 w-80 p-4 flex flex-col bg-purple-400 rounded-xl shrink-0">
    <span ref="author" class="text-lg font-medium"> </span>
    <span ref="title" class="text-xs text-purple-700"> </span>
    <span class="mt-2 text-purple-950">
      <slot></slot>
    </span>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    author: {
      type: String,
      default: "Someone",
    },
    title: {
      type: String,
      default: "",
    },
  },
  mounted() {
    this.$refs.author.textContent = this.author;
    this.$refs.title.textContent = this.title;
  },
};
</script>
