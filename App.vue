<template>
  <TopOrLeft />
  <MainContent />
</template>

<script>
import TopOrLeft from './src/components/TopOrLeft.vue'
import MainContent from './src/components/MainContent.vue'

export default {
  components: {
    TopOrLeft,
    MainContent,
  },
}
</script>
