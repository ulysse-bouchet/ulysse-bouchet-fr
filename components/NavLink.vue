<template>
  <a
    class="group text-lg font-medium hover:text-indigo-500 transition-all duration-300 cursor-pointer"
    @click="scrollTo"
  >
    <slot />
    <span
      class="block h-[3px] max-w-0 group-hover:max-w-full transition-all duration-300 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
    ></span>
  </a>
</template>

<script lang="ts">
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  methods: {
    scrollTo() {
      let target = document.getElementById(this.url) as HTMLElement;

      window.scrollTo({
        top: target.offsetTop - 75,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
