<template>
  <!-- Main Div -->
  <div
    id="main"
    class="h-[80vh] px-80 flex flex-col font-bold items-start justify-end mb-[10vh] transition-all duration-500"
  >
    <!-- Canvas -->
    <div class="absolute top-0 left-0">
      <v-stage :config="configKonva" ref="stage" @mousemove="handleMouseMove">
        <v-layer>
          <v-line
            v-for="(line, index) in lines"
            :key="index"
            :config="line"
          ></v-line>
          <v-regular-polygon
            v-for="triangle in triangles"
            :config="triangle"
            @mouseover="handleMouseOverTriangle"
            @mouseleave="handleMouseLeaveTriangle"
            @click="handleClickTriangle"
          ></v-regular-polygon>
        </v-layer>
      </v-stage>
    </div>
    <!-- Text -->
    <div class="flex">
      <div
        id="bar-circle"
        class="relative right-20 flex flex-col items-center transition-all duration-500 opacity-0"
      >
        <div
          class="h-7 w-7 flex-shrink-0 relative top-3 rounded-full bg-indigo-500"
        ></div>
        <div
          class="h-full w-2 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500"
        ></div>
      </div>
      <div class="pb-[10vh] pt-5 flex flex-col">
        <span
          id="hello"
          class="text-[7vh] opacity-0 transition-all duration-1000"
        >
          Welcome to
        </span>
        <div
          id="ubonneau"
          class="flex items-end opacity-0 transition-all duration-1000"
        >
          <img
            src="/images/ubonneau.svg"
            alt="Ulysse Bonneau Logo"
            class="h-[10vh]"
          />
          <span id="fr" class="text-2xl transition-all opacity-0 duration-1000">
            .fr
          </span>
        </div>
      </div>
    </div>
  </div>
  <!-- Other divs -->
  <Separator color="rgb(219 39 119)"></Separator>
  <About></About>
  <Separator color="rgb(124 58 237)"></Separator>
  <div id="career" class="h-[90vh]"></div>
  <Separator color="rgb(124 58 237)"></Separator>
  <div id="projects" class="h-[90vh]"></div>
  <Separator color="rgb(124 58 237)"></Separator>
  <div id="contact" class="h-[90vh]"></div>
</template>

<script lang="ts">
// Animate the main div
function animateMainDiv() {
  // Get HTML elements
  let hello = document.getElementById("hello") as HTMLElement;
  let ubonneau = document.getElementById("ubonneau") as HTMLElement;
  let fr = document.getElementById("fr") as HTMLElement;
  let main = document.getElementById("main") as HTMLElement;
  let barCircle = document.getElementById("bar-circle") as HTMLElement;

  // Set timers to slide them in
  setTimeout(() => {
    hello.style.opacity = "1";
    setTimeout(() => {
      ubonneau.style.opacity = "1";
      setTimeout(() => {
        fr.style.opacity = "1";
      }, 700);
      setTimeout(() => {
        main.style.marginBottom = "0";
        setTimeout(() => {
          barCircle.style.opacity = "1";
        }, 250);
      }, 700);
    }, 700);
  }, 250);
}

export default {
  data() {
    return {
      configKonva: {
        width: 0,
        height: 0,
      },
      triangles: [
        {
          x: 1450,
          y: 200,
          sides: 3,
          radius: 25,
          stroke: "#ec4899",
          strokeWidth: 4,
          rotation: 45,
          draggable: true,
        },
        {
          x: 1500,
          y: 250,
          sides: 3,
          radius: 35,
          stroke: "rgb(168, 85, 247)",
          strokeWidth: 4,
          rotation: 75,
          draggable: true,
        },
        {
          x: 1525,
          y: 175,
          sides: 3,
          radius: 50,
          stroke: "rgb(99, 102, 241)",
          strokeWidth: 4,
          rotation: 105,
          draggable: true,
        },
      ],
      lines: [],
      points: [],
    };
  },
  mounted() {
    // Dynamically set canvas size
    this.configKonva = {
      width: window.innerWidth,
      height: window.innerHeight * 0.9,
    };

    // Launch main div animation
    animateMainDiv();
  },
  methods: {
    handleMouseMove() {
      let stage = this.$refs.stage.getNode();

      const mousePos = stage.getPointerPosition();
      const curPoint = { x: mousePos.x + 5, y: mousePos.y + 5 };

      if (this.points.length == 0) {
        this.points.push(curPoint);
        return;
      }

      const lastPoint = { x: this.points.at(-1).x, y: this.points.at(-1).y };

      // Add a new circle at the mouse position
      const newLine = {
        points: [lastPoint.x, lastPoint.y, curPoint.x, curPoint.y],
        stroke: "#ec4899",
        opacity: 0.5,
        strokeWidth: 5,
      };

      // Add the new circle to the circles array
      this.lines.push(newLine);
      this.points.push(curPoint);

      // Force Vue to update the DOM
      this.$forceUpdate();

      setTimeout(() => {
        newLine.stroke = "rgb(168, 85, 247)";
      }, 100);
      setTimeout(() => {
        newLine.stroke = "rgb(99, 102, 241)";
      }, 500);
      setTimeout(() => {
        this.lines.shift();
        this.points.shift();
      }, 750);
    },
    handleMouseOverTriangle(event: any) {
      event.target.fill(event.target.stroke());

      const stage = event.target.getStage();
      stage.container().style.cursor = "pointer";
    },
    handleMouseLeaveTriangle(event: any) {
      event.target.fill("transparent");

      const stage = event.target.getStage();
      stage.container().style.cursor = "default";
    },
    handleClickTriangle(event: any) {
      event.target.rotation(event.target.rotation() + 15);
    },
  },
};
</script>
