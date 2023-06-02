<template>
  <div id="career" class="h-[90vh]">
    <Line></Line>
    <div id="about" class="h-[90vh] pt-[5vh] px-80 flex flex-col bg-pink-600">
      <span class="text-[7vh] text-white font-bold"> Career </span>
      <div class="mt-4 flex w-fit bg-pink-200 rounded text-pink-400 cursor-pointer select-none">
        <span id="work-btn" class="px-6 py-3 rounded-l active" @click="switchCareer"> Work </span>
        <span id="school-btn" class="px-6 py-3 rounded-r" @click="switchCareer"> School </span>
      </div>
    </div>
  </div>
</template>

<style>
.active {
  background-color: rgb(190 24 93);
  color: white;
  font-weight: bold;
}
</style>

<script lang="ts">
export default {
  methods: {
    switchCareer(event: any) {
      let workBtn = document.getElementById("work-btn") as HTMLElement;
      let schoolBtn = document.getElementById("school-btn") as HTMLElement;

      if (event.target == workBtn && !workBtn.classList.contains("active")) {
        schoolBtn.classList.remove("active");
        workBtn.classList.add("active");
      } else if (event.target == schoolBtn && !schoolBtn.classList.contains("active")) {
        workBtn.classList.remove("active");
        schoolBtn.classList.add("active");
      }
    },
  },
};
</script>
