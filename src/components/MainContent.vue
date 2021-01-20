<template>
  <div class="content-wrap">
    <h1>
      Who I am
    </h1>
    <p>
      Happy JavaScript full-stack developer at
      <a href="https://indy.fr/" target="_blank" class="indy-link">Indy</a> 🚀
    </p>

    <h1 style="margin-top: 5rem;">
      What I like
    </h1>
    <p>
      Vue, Node
    </p>
    <p>
      apollo, tailwindcss, WebStorm...
    </p>

    <h1 style="margin-top: 5rem;">
      What I code
    </h1>
    <div class="ced-link-wrap">
      <a href="https://cedric25.github.io/ages-and-birthdays/" target="_blank" class="ced-link">
        <div style="display: flex; align-items: center;">
          <div style="margin-right: 0.7em;">
            <img src="/public/ages-and-birthdays-icon.png" style="width: 20px;" />
          </div>
          <div>
            Ages and Birthdays
          </div>
        </div>
      </a>
    </div>

    <h1 style="margin-top: 5rem;">
      What I write
    </h1>
    <WriteLink
      title="Goodbye submit buttons"
      written-at="January 2021"
      link="https://medium.com/front-end-weekly/goodbye-submit-buttons-1c1e19f73c70"
    />
    <WriteLink
      title="From Vuetify to tailwind"
      written-at="April 2020"
      link="https://medium.com/front-end-weekly/from-vuetify-to-tailwind-a7e83284ddfc"
    />

    <!--    <h1 style="margin-top: 5rem;">-->
    <!--      Some slides-->
    <!--    </h1>-->
    <!--    <p>-->
    <!--      <a-->
    <!--        href="https://fr.slideshare.net/CedricNicoloso/vue-testing-vue-sydney-meetup-dec-2017"-->
    <!--        target="_blank"-->
    <!--      >-->
    <!--        Vue testing<br />-->
    <!--        Vue.js Sydney Meetup | Dec. 2017-->
    <!--      </a>-->
    <!--    </p>-->

    <!--    <h1 style="margin-top: 5rem;">-->
    <!--      What I read-->
    <!--    </h1>-->
    <!--    <p>-->
    <!--      <a href="https://medium.com/@glouby/has-recommended" target="_blank">-->
    <!--        Medium claps-->
    <!--      </a>-->
    <!--    </p>-->
  </div>
</template>

<script>
import WriteLink from './WriteLink.vue'

export default {
  name: 'MainContent',
  components: {
    WriteLink,
  },
}
</script>

<style scoped lang="scss">
@import '../assets/style.css';

$screen-xs: 400px;
$screen-sm: 640px;
$screen-md: 768px;
$screen-lg: 1024px;
$screen-xl: 1280px;

.content-wrap {
  padding: 3rem 3rem 9rem 3rem;
  flex: 1;

  @media (min-width: $screen-sm) {
    padding: 3rem 5rem 9rem 5rem;
  }

  @media (min-width: $screen-md) {
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

.indy-link {
  color: #001d6c;
  font-weight: 700;
  text-decoration: none;
}
</style>
