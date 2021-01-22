<template>
  <div class="mt-10">
    <img v-if="cover" :src="'/books/' + cover" class="inline-block w-4 mr-3 sm:mr-4 -mt-3" />
    <a :href="link" class="text-lg font-medium text-indy" target="_blank">{{ title }}</a>
    <span v-if="subtitle" class="text-sm ml-2 tracking-tight">{{ subtitle }}</span>
    <!--    <span class="text-xs ml-2"> ({{ year }}) </span>-->
    <div v-if="keywords" class="text-gray-700 mt-1 font-sans">{{ keywords }}</div>
    <div class="text-gray-700 mt-1 font-sans"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: 'BookRead',
  props: {
    cover: { type: String },
    title: { type: String, required: true },
    subtitle: { type: String },
    link: { type: String },
    year: { type: String, required: true },
    keywords: { type: String },
  },
}
</script>
