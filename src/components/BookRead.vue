<template>
  <div class="mt-10">
    <a :href="link" class="link" target="_blank">{{ title }}</a>
    <span v-if="subtitle" class="text-sm ml-2 tracking-tight">{{ subtitle }}</span>
    <span class="text-xs"> ({{ year }}) </span>
    <div v-if="keywords" class="text-gray-700 mt-1 text-sm font-sans">{{ keywords }}</div>
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
