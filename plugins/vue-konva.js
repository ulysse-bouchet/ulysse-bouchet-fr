import VueKonva from "vue-konva";
import Konva from "konva";

export default defineNuxtPlugin((ctx) => {
  ctx.vueApp.use(VueKonva, { Konva });
});
