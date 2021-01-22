<template>
  <div class="content-wrap">
    <h1 class="mt-5">
      I am
    </h1>
    <p>
      A happy JavaScript full-stack developer at
      <a href="https://indy.fr/" target="_blank" rel="noopener" class="font-bold text-indy">Indy</a
      >&nbsp;🚀
    </p>

    <!--    <h1 class="mt-20">-->
    <!--      I like-->
    <!--    </h1>-->
    <!--    <p>-->
    <!--      Vue, Node-->
    <!--    </p>-->
    <!--    <p>-->
    <!--      apollo, tailwindcss, WebStorm...-->
    <!--    </p>-->

    <h1 class="mt-20">
      I code
    </h1>
    <div class="ced-link-wrap">
      <a
        href="https://ages-and-birthdays.netlify.app/"
        target="_blank"
        rel="noopener"
        class="ced-link"
      >
        <div class="flex items-center">
          <div class="mr-3">
            <img
              src="/ages-and-birthdays-icon.png"
              class="w-5"
              alt="Ages and Birthdays app icon"
              width="20"
              height="20"
            />
          </div>
          <div>
            Ages and Birthdays
          </div>
        </div>
      </a>
      <span class="link-note">
        (<a
          href="https://github.com/cedric25/ages-and-birthdays"
          class="font-medium text-indy"
          target="_blank"
          rel="noopener"
          >Github</a
        >)
      </span>
    </div>

    <h1 class="mt-20">
      I write
    </h1>
    <WriteLink
      title="Goodbye submit buttons"
      written-at="January 2021"
      link="https://medium.com/front-end-weekly/goodbye-submit-buttons-1c1e19f73c70"
    />
    <div class="mt-6">
      <WriteLink
        title="From Vuetify to tailwind"
        written-at="April 2020"
        link="https://medium.com/front-end-weekly/from-vuetify-to-tailwind-a7e83284ddfc"
      />
    </div>

    <!--    <h1 class="mt-20">-->
    <!--      Some slides-->
    <!--    </h1>-->
    <!--    <p>-->
    <!--      <a-->
    <!--        href="https://fr.slideshare.net/CedricNicoloso/vue-testing-vue-sydney-meetup-dec-2017"-->
    <!--        target="_blank"-->
    <!--        rel="noopener"-->
    <!--      >-->
    <!--        Vue testing<br />-->
    <!--        Vue.js Sydney Meetup | Dec. 2017-->
    <!--      </a>-->
    <!--    </p>-->

    <h1 class="mt-20">
      I read
    </h1>
    <BooksRead />
  </div>
</template>

<script setup>
import WriteLink from './WriteLink.vue'
import BooksRead from './BooksRead.vue'
</script>

<style>
.content-wrap {
  padding: 3rem 3rem 9rem 3rem;
  flex: 1;
}
@screen sm {
  .content-wrap {
    padding: 3rem 5rem 9rem 5rem;
  }
}
@screen md {
  .content-wrap {
    padding: 3rem 4rem 9rem 4rem;
    margin-left: 300px;
  }
}
@screen lg {
  .content-wrap {
    padding: 3rem 5rem 9rem 5rem;
    margin-left: 400px;
  }
}
@screen xl {
  .content-wrap {
    padding: 3rem 5rem 9rem 5rem;
    margin-left: 500px;
  }
}

h1 {
  display: inline-block;
}
h1::after {
  content: ' ';
  width: 80%;
  display: block;
  border: 2px solid #108775;
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
  border-radius: 0.25rem;
}
</style>
