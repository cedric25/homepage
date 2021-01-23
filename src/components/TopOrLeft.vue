<template>
  <div class="bg-black md:fixed md:min-h-full md:flex md:flex-col md:w-72 lg:w-96 xl:w-128">
    <div class="flex-1 flex flex-row items-center justify-center md:flex-col">
      <div class="profile-picture mr-4 xs:mr-8 md:mr-0">
        <img
          src="/cedric-nicoloso.webp"
          alt="Cedric Nicoloso profile picture"
          class="rounded-full w-16 xs:w-20 md:w-24 shadow-white"
          width="100"
          height="100"
        />
      </div>
      <div>
        <h2 class="text-white opacity-50 text-2xl font-bold mt-6 sm:mb-2 md:mb-0 lg:mb-6">
          Cedric Nicoloso
        </h2>
        <div class="links flex items-center justify-center dl:flex-col lg:flex-row">
          <a
            href="https://github.com/cedric25"
            class="text-white opacity-50 p-4 mb-3 hover:opacity-100 mt-0 dl:mt-8 lg:mt-0"
            target="_blank"
            rel="noopener"
            title="Github"
          >
            <svg
              class="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
              ></path>
            </svg>
          </a>
          <a
            href="https://twitter.com/glouby"
            class="text-white opacity-50 p-4 mb-3 hover:opacity-100"
            target="_blank"
            rel="noopener"
            title="Twitter"
          >
            <svg
              class="w-6 h-6"
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
            class="text-white opacity-50 p-4 hover:opacity-100"
            style="margin-bottom: 0.85rem"
            target="_blank"
            rel="noopener"
            title="LinkedIn"
          >
            <svg
              style="width: 1.4rem; height: 1.4rem"
              viewBox="-4 -4 100 100"
              fill="none"
              stroke="currentColor"
              stroke-width="8"
              stroke-linecap="round"
              stroke-linejoin="round"
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
    <div class="text-white opacity-50 text-xss pl-3 pb-2 hidden md:block">
      Design from
      <a href="https://bansal.io/" class="underline" target="_blank" rel="noopener">bansal.io</a>
    </div>
  </div>
</template>

<style>
.shadow-white {
  box-shadow: 0 0 8px 0 white;
}
</style>
