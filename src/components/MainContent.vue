<template>
  <div class="content-wrap">
    <h1>
      I am
    </h1>
    <p>
      Happy JavaScript full-stack developer at
      <a href="https://indy.fr/" target="_blank" class="indy-link">Indy</a> 🚀
    </p>

    <h1 style="margin-top: 5rem;">
      I like
    </h1>
    <p>
      Vue, Node
    </p>
    <p>
      apollo, tailwindcss, WebStorm...
    </p>

    <h1 style="margin-top: 5rem;">
      I code
    </h1>
    <div class="ced-link-wrap">
      <a href="https://ages-and-birthdays.netlify.app/" target="_blank" class="ced-link">
        <div style="display: flex; align-items: center;">
          <div style="margin-right: 0.7em;">
            <img src="/public/ages-and-birthdays-icon.png" style="width: 20px;" />
          </div>
          <div>
            Ages and Birthdays
          </div>
        </div>
      </a>
      <span class="link-note">
        (<a href="https://github.com/cedric25/ages-and-birthdays" target="_blank" class="link"
          >Github</a
        >)
      </span>
    </div>

    <h1 style="margin-top: 5rem;">
      I write
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

    <h1 style="margin-top: 5rem;">
      I read
    </h1>
    <BookRead
      title="📙 Inside the Tornado"
      year="2020"
      keywords="Startups, high-tech innovations and lifecycle adoption, crossing the chasm, gorilla, chimpanzees and monkeys."
      link="https://www.goodreads.com/book/show/61336.Inside_the_Tornado"
    />
    <BookRead
      title="📗 @War:"
      subtitle="The Rise of the Military-Internet Complex"
      year="2020"
      keywords="Hacking and cyber espionage, U.S. vs China, economic intelligence."
      link="https://www.goodreads.com/book/show/20448184-war"
    />
    <BookRead
      title="📒 The Manager's Path:"
      subtitle="A Guide for Tech Leaders Navigating Growth and Change"
      year="2020"
      keywords="Improving your management skills, mentoring, giving feedback, 1-on-1."
      link="https://www.goodreads.com/book/show/33369254-the-manager-s-path"
    />
    <BookRead
      title="📕 The five dysfunctions of a team"
      year="2020"
      keywords="Absence of trust, fear of conflict, lack of commitment, avoidance of accountability, inattention to results."
      link="https://www.goodreads.com/book/show/21343.The_Five_Dysfunctions_of_a_Team"
    />
    <BookRead
      title="📘 Thinking, Fast and Slow"
      year="2019"
      link="https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow"
    />
    <BookRead
      title="📙 Building Social Business:"
      subtitle="The New Kind of Capitalism That Serves Humanity's Most Pressing Needs"
      year="2019"
      link="https://www.goodreads.com/book/show/7721946-building-social-business"
    />
    <BookRead
      title="📗 21 Lessons for the 21st Century"
      year="2019"
      link="https://www.goodreads.com/book/show/38820046-21-lessons-for-the-21st-century"
    />
    <BookRead
      title="📒 Les 4 accords Toltèques 🇫🇷"
      year="2018"
      link="https://www.goodreads.com/it/book/show/1285456.Les_quatre_accords_tolt_ques"
    />
    <BookRead
      title="📕 Quiet:"
      subtitle=" The Power of Introverts in a World That Can't Stop Talking"
      year="2018"
      link="https://www.goodreads.com/book/show/8520610-quiet"
    />
    <BookRead
      title="📘 Crushing It!:"
      subtitle="How Great Entrepreneurs Build Their Business and Influence—and How You Can, Too"
      year="2018"
      link="https://www.goodreads.com/book/show/36045512-crushing-it"
    />
    <BookRead
      title="📙 Factfulness:"
      subtitle="Ten Reasons We're Wrong About the World"
      year="2018"
      link="https://www.goodreads.com/book/show/34890015-factfulness"
    />
    <BookRead
      title="📗 Homo Deus:"
      subtitle="A History of Tomorrow"
      year="2018"
      link="https://www.goodreads.com/book/show/31138556-homo-deus"
    />
    <BookRead
      title="📒 Sapiens:"
      subtitle="A Brief History of Humankind"
      year="2018"
      link="https://www.goodreads.com/book/show/23692271-sapiens"
    />
    <BookRead
      title="📕 Pitch Anything"
      year="2017"
      link="https://www.goodreads.com/book/show/10321016-pitch-anything"
    />
    <BookRead
      title="📘 Eloquent JavaScript"
      year="2017"
      link="https://www.goodreads.com/book/show/8910666-eloquent-javascript"
    />
    <BookRead
      title="📙 Partageons ce qui nous départage 🇫🇷"
      year="2015"
      link="https://www.amazon.fr/Partageons-Ce-Qui-Nous-Departage/dp/2952589526"
    />
  </div>
</template>

<script>
import WriteLink from './WriteLink.vue'
import BookRead from './BookRead.vue'

export default {
  name: 'MainContent',
  components: {
    WriteLink,
    BookRead,
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
