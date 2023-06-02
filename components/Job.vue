<template>
  <div
    id="career-card"
    class="w-full h-full p-12 flex flex-col bg-pink-200 rounded-3xl transition-all duration-200"
  >
    <div class="flex items-center space-x-8">
      <img ref="icon" src="images/cea.jpg" class="h-24 w-24 rounded-xl object-contain" />
      <div class="flex flex-col grow">
        <span ref="company" class="mb-1 text-4xl font-bold text-rose-900"> </span>
        <span ref="title" class="font-medium text-lg text-pink-600"> </span>
      </div>
      <span ref="date" class="text-2xl font-medium text-rose-900"> </span>
    </div>
    <span ref="description" class="mt-8 grow text-xl leading-10 text-justify"> </span>
    <div class="w-2/3 flex flex-wrap-reverse justify-end space-x-4 self-end text-sm font-bold text-pink-400">
      <a
        v-for="(tag, index) in tags"
        :key="index"
        :href="`${tag.link}`"
        target="_blank"
        class="transition-all hover:text-pink-600"
      >
        {{ `#${tag.tag}` }}
      </a>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    icon: {
      type: String,
      default: "icons/",
    },
    company: {
      type: String,
      default: "Company",
    },
    title: {
      type: String,
      default: "Title",
    },
    date: {
      type: String,
      default: "2020",
    },
    description: {
      type: String,
      default: "Work description",
    },
    tags: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    this.$refs.icon.src = `images/${this.icon}`;
    this.$refs.company.textContent = this.company;
    this.$refs.title.textContent = this.title;
    this.$refs.date.textContent = this.date;
    this.$refs.description.textContent = this.description;
  },
  watch: {
    icon: function (newIcon) {
      this.$refs.icon.src = `images/${newIcon}`;
    },
    company: function (newCompany) {
      this.$refs.company.textContent = newCompany;
    },
    title: function (newTitle) {
      this.$refs.title.textContent = newTitle;
    },
    date: function (newDate) {
      this.$refs.date.textContent = newDate;
    },
    description: function (newDescription) {
      this.$refs.description.textContent = newDescription;
    },
    description: function (newDescription) {
      this.$refs.description.textContent = newDescription;
    },
  },
};
</script>
