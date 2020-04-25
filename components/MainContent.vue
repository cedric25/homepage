<template>
  <div class="content-wrap">
    <h1>
      What I like
    </h1>
    <p>
      Vue, apollo, tailwindcss
    </p>
    <p>
      Node, pino
    </p>
    <p>
      WebStorm
    </p>
    <h1 style="margin-top: 5rem;">
      What I code
    </h1>
    <p>
      <a
        href="https://cedric25.github.io/ages-and-birthdays/"
        target="_blank"
        class="ced-link"
      >
        <div style="display: flex; align-items: center;">
          <div style="margin-right: 0.7em;">
            <img src="favicon-32x32.png" style="width: 20px;" />
          </div>
          <div>
            Ages and Birthdays
          </div>
        </div>
      </a>
    </p>
    <h1 style="margin-top: 5rem;">
      What I write
    </h1>
    <p>
      Medium post...
    </p>
  </div>
</template>

<script>
export default {
  name: 'MainContent',
}
</script>

<style scoped lang="scss">
$screen-xs: 400px;
$screen-sm: 640px;
$screen-md: 768px;
$screen-lg: 1024px;
$screen-xl: 1280px;

.content-wrap {
  padding: 3rem;
  flex: 1;

  @media (min-width: $screen-sm) {
    padding: 5rem;
  }

  @media (min-width: $screen-md) {
    width: 66%;
    margin-left: 300px;
  }

  @media (min-width: $screen-lg) {
    margin-left: 400px;
  }
  @media (min-width: $screen-xl) {
    margin-left: 500px;
  }
}

h1 {
  display: inline-block;

  &::after {
    content: ' ';
    width: 80%;
    display: block;
    border: 2px solid #108775;
    margin-top: 0.5rem;
    margin-bottom: 0.25rem;
    border-radius: 0.25rem;
  }
}

.ced-link {
  display: inline-block;
  color: inherit;
  text-decoration: none;
  transition-duration: 0.2s;
  transition-property: background-color;
  border-radius: 2em;
  padding: 0.7em 1.2em 0.7em 0.7em;
  margin-left: -1em;

  &:hover {
    /*background-color: rgba(29, 161, 242, 0.1);*/
    background-color: rgba(16, 135, 117, 0.1);
  }
}
</style>
