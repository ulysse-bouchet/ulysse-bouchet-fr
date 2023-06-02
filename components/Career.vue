<template>
  <div id="career" class="h-[90vh]">
    <Line></Line>
    <div id="about" class="h-[90vh] pt-[5vh] px-80 flex flex-col bg-pink-600">
      <span class="text-[7vh] text-white font-bold"> Career </span>
      <div class="mt-4 flex w-fit bg-pink-200 rounded text-pink-400 cursor-pointer select-none">
        <span id="work-btn" class="px-6 py-3 rounded-l active shadow-inner" @click="switchCareer">
          Work
        </span>
        <span id="school-btn" class="px-6 py-3 rounded-r shadow-inner" @click="switchCareer">
          School
        </span>
      </div>
      <div class="h-full w-4/5 mt-16 mb-8 flex flex-row items-center space-x-8 overflow-x-hidden">
        <img
          src="icons/arrow-left.svg"
          class="h-8 w-8 p-1 bg-pink-600 border-2 rounded-full cursor-pointer z-10 hover:bg-pink-500"
          @click="goPrev"
        />
        <Job
          :icon="currentJob.icon"
          :company="currentJob.company"
          :title="currentJob.title"
          :date="currentJob.date"
          :description="currentJob.description"
          :tags="currentJob.tags"
        ></Job>
        <img
          src="icons/arrow-right.svg"
          class="h-8 w-8 p-1 bg-pink-600 border-2 rounded-full cursor-pointer z-10 hover:bg-pink-500"
          @click="goNext"
        />
      </div>
    </div>
  </div>
</template>

<style>
.active {
  background-color: rgb(190 24 93);
  color: white;
  font-weight: bold;
  box-shadow: none;
}
</style>

<script lang="ts">
export default {
  data() {
    return {
      currentJob: {},
      jobs: [
        {
          id: 1,
          company: "CEA Paris Saclay",
          icon: "cea.jpg",
          title: "Software Engineer (Apprenticeship)",
          date: "2022 - 2024",
          description: `Development of Pixano, a vision and computer learning tool.`,
          tags: [
            { tag: "Svelte", link: "https://svelte.dev/" },
            { tag: "TypeScript", link: "https://www.typescriptlang.org/" },
            { tag: "Tailwind", link: "https://tailwindcss.com/" },
            { tag: "NodeJS", link: "https://nodejs.org/en" },
            { tag: "Storybook", link: "https://storybook.js.org/" },
            { tag: "HTML", link: "https://www.w3schools.com/html/" },
            { tag: "CSS", link: "https://www.w3schools.com/Css/" },
            { tag: "Python", link: "https://www.python.org/" },
            { tag: "FastAPI", link: "https://fastapi.tiangolo.com/" },
            { tag: "Uvicorn", link: "https://www.uvicorn.org/" },
            { tag: "Git", link: "https://git-scm.com/" },
            { tag: "Ubuntu", link: "https://ubuntu.com/" },
          ],
        },
        {
          id: 2,
          company: "Hitachi Rail",
          icon: "hitachi.svg",
          title: "Software Developer (Internship)",
          date: "May - August 2021",
          description: `Creation of a tool to automate the writing of test reports.`,
          tags: [
            { tag: "LaTeX", link: "https://www.latex-project.org/" },
            { tag: "Python", link: "https://www.python.org/" },
            { tag: "Bash", link: "https://www.gnu.org/software/bash/" },
            { tag: "Git", link: "https://git-scm.com/" },
            { tag: "Ubuntu", link: "https://ubuntu.com/" },
          ],
        },
        {
          id: 3,
          company: "EDF Lab Paris Saclay",
          icon: "edf.svg",
          title: "Software Developer (Internship)",
          date: "May - July 2020",
          description: `Study of Meta's AI Habitat tool to determine whether it could be integrated into EDF's tools.`,
          tags: [
            { tag: "Python", link: "https://www.python.org/" },
            { tag: "Bash", link: "https://www.gnu.org/software/bash/" },
            { tag: "Ubuntu", link: "https://ubuntu.com/" },
          ],
        },
      ],
    };
  },
  created() {
    this.currentJob = { ...this.jobs[0] };
  },
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
    goPrev() {
      let card = document.getElementById("career-card") as HTMLElement;

      card.style.transform = "translateX(50vw)";
      setTimeout(() => {
        card.style.transitionDuration = "0ms";
        card.style.transform = "translateX(-50vw)";

        const currentIndex = this.jobs.findIndex((job) => job.id === this.currentJob.id);
        const prevIndex = currentIndex == 0 ? this.jobs.length - 1 : currentIndex - 1;
        this.currentJob = { ...this.jobs[prevIndex] };

        setTimeout(() => {
          card.style.transitionDuration = "200ms";
          card.style.transform = "";
        }, 200);
      }, 200);
    },
    goNext() {
      let card = document.getElementById("career-card") as HTMLElement;

      card.style.transform = "translateX(-50vw)";
      setTimeout(() => {
        card.style.transitionDuration = "0ms";
        card.style.transform = "translateX(50vw)";

        const currentIndex = this.jobs.findIndex((job) => job.id === this.currentJob.id);
        const nextIndex = (currentIndex + 1) % this.jobs.length;
        this.currentJob = { ...this.jobs[nextIndex] };

        setTimeout(() => {
          card.style.transitionDuration = "300ms";
          card.style.transform = "";
        }, 300);
      }, 300);
    },
  },
};
</script>
