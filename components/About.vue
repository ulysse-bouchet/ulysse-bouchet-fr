<template>
  <Line></Line>
  <div id="about" class="h-[90vh] pt-[5vh] px-80 flex flex-col bg-purple-600">
    <span class="text-[7vh] text-white font-bold"> About me </span>
    <div class="mt-8 flex">
      <img src="images/profile.png" class="h-48 w-48 mr-8 rounded-xl object-cover" />
      <div class="mt-8 flex flex-col font-bold">
        <span class="mb-3 text-white text-5xl">Web Developer</span>
        <span class="text-3xl text-purple-300 font-medium">21 years old</span>
      </div>
    </div>
    <div
      class="w-3/4 mt-8 ml-8 py-4 pl-10 pr-5 bg-purple-200 rounded-full rounded-tl-none font-medium text-lg text-purple-900"
    >
      I am a young french engineer, currently working as an apprentice at
      <a
        class="font-bold text-purple-600 hover:text-pink-600 transition-all"
        href="https://cea.fr/english"
      >
        CEA
      </a>
      during my studies at
      <a
        class="font-bold text-purple-600 hover:text-pink-600 transition-all"
        href="https://eng.efrei.fr/"
      >
        Efrei Paris</a
      >. My passion about programming led me to multiple schools and internships that helped me hone
      my skills over the past few years. As a web developer, I like to write clean code and develop
      high-quality websites using various technologies and frameworks.
    </div>
    <div id="quotes" class="mt-12 pb-2 flex space-x-4 w-4/5 overflow-x-auto scrollbar-hide">
      <Quote author="Augusta Tsampi" title="Class representative">
        Ulysse is a sunny, unifying student who always sets the right mood.
      </Quote>
      <Quote author="Mathis Da Cruz" title="Classmate">
        Without any doubt, he's the best teammate ever ! Ulysse is the GOAT, you can trust me.
      </Quote>
      <Quote author="Melis Harmantepe" title="Classmate">
        I'm a big fan of Ulysse's coding skills.
      </Quote>
      <Quote author="Sarankan Sivananthan" title="Classmate">
        A legendary man and a future prodigy.
      </Quote>
      <!-- <Quote author="Evan Arneau" title="Classmate">
        Ulysse is the only person I would consider fit to be my rival... He's got a brain as big as Kansas.
      </Quote>
      <Quote author="Mariam Maksimous" title="Classmate">
        Ulysse has a dance move I've never seen before, the "Danse de la Joie". I hope that one day I learn this move.
      </Quote>
      <Quote author="Stéphane Tang" title="Classmate">
        Ulysse's curly hair is way too beautiful, I want to have the same.
      </Quote> -->
    </div>
  </div>
</template>

<script lang="ts">
let direction = 1;
let lastScroll = 0;
export default {
  mounted() {
    setInterval(() => {
      let quotes = document.getElementById("quotes");

      quotes?.scrollBy({ top: 0, left: direction });

      if (direction == 1) {
        if (quotes?.scrollLeft == lastScroll)
          setTimeout(() => {
            direction = -1;
            lastScroll = 0;
          }, 2500);
      } else if (quotes?.scrollLeft <= 1)
        setTimeout(() => {
          direction = 1;
          lastScroll = 9999;
        }, 2500);

      if (quotes?.scrollLeft) lastScroll = quotes?.scrollLeft;
    }, 20);
  },
};
</script>
