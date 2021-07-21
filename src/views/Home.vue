<template>
  <TopOrLeft />
  <MainContent />
</template>

<script>
import TopOrLeft from '../components/TopOrLeft.vue'
import MainContent from '../components/MainContent.vue'

export default {
  name: 'Home',
  components: {
    TopOrLeft,
    MainContent,
  },
}
</script>

<style scoped>

</style>
