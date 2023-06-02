<template>
  <!-- Header -->
  <header class="fixed bg-white w-full z-10">
    <div class="h-[10vh] px-80 flex items-center space-x-8">
      <img
        src="/images/ubonneau.svg"
        alt="Ulysse Bonneau Logo"
        class="h-6 cursor-pointer"
        @click="scrollToTop"
      />
      <div class="grow"></div>

      <NavLink url="about">About</NavLink>
      <NavLink url="career">Career</NavLink>
      <NavLink url="projects">Projects</NavLink>
      <NavLink url="contact">Contact</NavLink>
      <div class="py-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <a
          download=""
          href="/CV - BOUCHET Ulysse.pdf"
          class="m-1 px-4 py-3 rounded-full font-medium text-lg bg-white transition-all duration-300 hover:after:-z-10 after:bg-gradient-to-r after:from-indigo-500 after:via-purple-500 after:to-pink-500 hover:bg-transparent hover:text-white"
        >
          Resume
        </a>
      </div>
    </div>
    <div
      id="scrollbar"
      class="h-1 w-[0vh] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
    ></div>
  </header>

  <!-- Scroll to top button -->
  <div
    class="fixed right-5 bottom-5 w-16 h-16 flex items-center justify-center border-2 border-b-4 border-white bg-purple-700 rounded-xl cursor-pointer hover:bg-purple-500"
    @click="scrollToTop"
  >
    <img src="/icons/arrow-up.svg" class="w-6 h-6" />
  </div>

  <!-- Content -->
  <div class="pt-[10vh]">
    <NuxtPage />
  </div>

  <!-- Footer -->
  <footer class="bottom-0 bg-pink-600 h-10 w-full"></footer>
</template>

<!-- Setup script -->
<script setup lang="ts">
useHead({
  title: "Ulysse Bonneau",
});
</script>

<!-- App script -->
<script lang="ts">
export default {
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      let scrollbar = document.getElementById("scrollbar") as HTMLElement;
      let position = (window.scrollY / (document.body.clientHeight - window.innerHeight)) * 100;
      scrollbar.style.width = position + "vw";
    },
    scrollToTop() {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    },
  },
};
</script>
