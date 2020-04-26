<template>
  <TopOrLeft />
  <MainContent />
</template>

<script>
import TopOrLeft from './components/TopOrLeft.vue'
import MainContent from './components/MainContent.vue'

export default {
  components: {
    TopOrLeft,
    MainContent,
  },
}
</script>

<style scoped lang="scss">
$screen-xs: 400px;
$screen-sm: 640px;
$screen-md: 768px;
$screen-lg: 1024px;
$screen-xl: 1280px;

.comp-wrap {
  display: flex;
  flex-direction: column;
  min-height: 100%;

  @media (min-width: $screen-md) {
    flex-direction: row;
  }
}
</style>
