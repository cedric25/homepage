<template>
  <div class="content-wrap">
    <h1 class="mt-5">I am</h1>
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

    <h1 class="mt-20">I code</h1>
    <div class="font-sans">My playground project where I like to try things:</div>
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
          <div>Ages and Birthdays</div>
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

    <h1 class="mt-20">I write</h1>
    <WriteLink
      title="From vue-cli to vitejs"
      written-at="April 2021"
      link="https://medium.com/nerd-for-tech/from-vue-cli-to-vitejs-648d2f5e031d"
    />
    <div class="mt-6">
      <WriteLink
        title="Goodbye submit buttons"
        written-at="January 2021"
        link="https://medium.com/front-end-weekly/goodbye-submit-buttons-1c1e19f73c70"
      />
    </div>
    <div class="mt-6">
      <WriteLink
        title="From Vuetify to tailwind"
        written-at="April 2020"
        link="https://medium.com/front-end-weekly/from-vuetify-to-tailwind-a7e83284ddfc"
      />
    </div>

    <h1 class="mt-20">I present</h1>
    <p>
      <router-link :to="{ name: 'prisma-talk' }" target="_blank" rel="noopener" class="ced-link">
        <div class="flex items-center">
          <div class="w-3 mr-2">
            <svg x="0px" y="0px" viewBox="0 0 330 330" xml:space="preserve">
              <path
                id="XMLID_222_"
                d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001  c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213  C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606  C255,161.018,253.42,157.202,250.606,154.389z"
              />
            </svg>
          </div>
          Prisma comme ORM pour PostgreSQL (FRENCH 🇫🇷)<br />
        </div>
      </router-link>
      <div class="font-sans mt-2">
        <span class="chip">LyonJS Meetup</span>
        <span class="chip ml-2">Jul. 2021</span>
      </div>
    </p>

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

    <h1 class="mt-20">I read</h1>
    <BooksRead />
  </div>
</template>

<script>
import WriteLink from './WriteLink.vue'
import BooksRead from './BooksRead.vue'

export default {
  components: {
    WriteLink,
    BooksRead,
  },
}
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
