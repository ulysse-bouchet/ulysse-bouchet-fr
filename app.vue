<template>
  <header class="fixed bg-white w-full px-80">
    <div class="h-20 flex items-center space-x-8">
      <a class="grow" href="/">
        <img
          src="/img/ubonneau.svg"
          alt="Ulysse Bonneau Logo"
          class="h-6 cursor-pointer"
        />
      </a>

      <NavLink url="/">About</NavLink>
      <NavLink url="/work">Work</NavLink>
      <NavLink url="/work">Projects</NavLink>
      <NavLink url="/contact">Contact</NavLink>
      <div
        class="py-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      >
        <a
          download=""
          href="/img/ubonneau.png"
          class="m-1 px-4 py-3 rounded-full font-medium text-lg bg-white transition-all duration-300 hover:after:-z-10 after:bg-gradient-to-r after:from-indigo-500 after:via-purple-500 after:to-pink-500 hover:bg-transparent hover:text-white"
        >
          Resume
        </a>
      </div>
    </div>
  </header>
  <div class="pt-20 px-80">
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
useHead({
  title: "Ulysse Bonneau",
});
</script>
