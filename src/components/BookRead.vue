<template>
  <div style="margin-top: 2.5em;">
    <a :href="link" class="link link-book" target="_blank">{{ title }}</a>
    <span v-if="subtitle" class="subtitle">{{ subtitle }}</span>
    <span class="year"> ({{ year }}) </span>
    <div v-if="keywords" class="keywords">{{ keywords }}</div>
  </div>
</template>

<script>
export default {
  name: 'BookRead',
  props: {
    title: { type: String, required: true },
    subtitle: { type: String },
    link: { type: String, required: true },
    year: { type: String, required: true },
    keywords: { type: String },
  },
}
</script>

<style scoped>
@import '../assets/style.css';

.subtitle {
  font-size: 0.9em;
  margin-left: 6px;
  letter-spacing: -0.025em;
}

.year {
  font-size: 0.8em;
}

.keywords {
  font-family: Arial, monospace;
  font-size: 0.9em;
  margin-top: 0.25em;
  color: rgb(55, 65, 81);
}
</style>
