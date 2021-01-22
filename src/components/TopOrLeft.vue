<template>
  <div class="black-wrap bg-black">
    <div class="content">
      <div class="profile-picture">
        <img
          src="https://lh3.googleusercontent.com/-OyPnmbDkF0k/AAAAAAAAAAI/AAAAAAAAChk/GUGJvIFfbgk/photo.jpg"
        />
      </div>
      <div class="name-and-links">
        <h2 class="title">
          Cedric Nicoloso
        </h2>
        <div class="links">
          <a href="https://github.com/cedric25" target="_blank" title="Github">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-github"
            >
              <path
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
              ></path>
            </svg>
          </a>
          <a href="https://twitter.com/glouby" target="_blank" title="Twitter">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
              ></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/cedricnicoloso/"
            target="_blank"
            title="LinkedIn"
            class="linkedin-link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-4 -4 100 100"
              fill="none"
              stroke="currentColor"
              stroke-width="8"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-5 w-5 text-white"
            >
              <path
                d="M11.185,0.08C5.004,0.08,0.001,5.092,0,11.259c0,6.173,5.003,11.184,11.186,11.184c6.166,0,11.176-5.011,11.176-11.184
			C22.362,5.091,17.351,0.08,11.185,0.08z"
              />
              <rect x="1.538" y="30.926" width="19.287" height="62.054" />
              <path
                d="M69.925,29.383c-9.382,0-15.673,5.144-18.248,10.022h-0.258v-8.479H32.921H32.92v62.053h19.27V62.281
			c0-8.093,1.541-15.932,11.575-15.932c9.89,0,10.022,9.256,10.022,16.451v30.178H93.06V58.942
			C93.06,42.235,89.455,29.383,69.925,29.383z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div class="footer">
      Design from
      <a href="https://bansal.io/" target="_blank">bansal.io</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
$screen-xs: 400px;
$screen-sm: 640px;
$screen-md: 768px;
$screen-lg: 1024px;
$screen-xl: 1280px;

.black-wrap {
  @media (min-width: $screen-md) {
    width: 300px;
    position: fixed;
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: $screen-lg) {
    width: 400px;
  }
  @media (min-width: $screen-xl) {
    width: 500px;
  }

  .content .title,
  .footer {
    color: white;
    opacity: 0.5;
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media (min-width: $screen-md) {
      flex-direction: column;
    }

    .title {
      font-size: 1.1em;
      margin-bottom: 0;

      @media (min-width: $screen-xs) {
        font-size: 1.5em;
      }

      @media (min-width: $screen-md) {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        margin-top: 1em;
        margin-bottom: 1em;
      }
    }

    .profile-picture {
      margin-right: 1em;

      @media (min-width: $screen-xs) {
        margin-right: 2em;
      }

      @media (min-width: $screen-md) {
        margin-right: 0;
      }

      img {
        width: 60px;
        border-radius: 50%;
        box-shadow: 0 0 8px 0 white;

        @media (min-width: $screen-xs) {
          width: 75px;
        }

        @media (min-width: $screen-md) {
          width: 100px;
        }
      }
    }

    .name-and-links {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .links {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        @media (min-width: $screen-md) {
          flex-direction: column;

          a:first-child {
            margin-top: 2em;
          }
        }

        @media (min-width: $screen-lg) {
          flex-direction: row;

          a:first-child {
            margin-top: 0;
          }
        }

        a {
          color: white;
          opacity: 0.5;
          padding: 0.7rem;
          margin-bottom: 0.6em;

          @media (min-width: $screen-md) {
            padding: 0.7rem 1rem;
          }

          &:hover {
            opacity: 1;
          }

          &.linkedin-link {
            width: 23px;
            height: 23px;
            margin-bottom: 0.75em;

            @media (min-width: $screen-md) and (max-width: $screen-lg - 1) {
              margin-bottom: 0;
            }
          }
        }
      }
    }
  }

  .footer {
    display: none;
    font-size: 0.7em;
    padding: 0 0.5em 0.6em 1em;

    @media (min-width: $screen-md) {
      display: block;
    }

    a {
      color: white;
    }
  }
}
</style>
