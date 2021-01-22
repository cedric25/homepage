<template>
  <div class="ced-link-wrap">
    <a :href="link" target="_blank" class="ced-link">
      <div class="flex items-center">
        <div class="w-3 mr-2">
          <svg x="0px" y="0px" viewBox="0 0 330 330" xml:space="preserve">
            <path
              id="XMLID_222_"
              d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001  c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213  C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606  C255,161.018,253.42,157.202,250.606,154.389z"
            />
          </svg>
        </div>
        <div>
          {{ title }}
        </div>
      </div>
    </a>
    <span class="link-note"> ({{ writtenAt }}) </span>
  </div>
</template>

<script>
export default {
  name: 'WriteLink',
  props: {
    title: { type: String, required: true },
    writtenAt: { type: String, required: true },
    link: { type: String, required: true },
  },
}
</script>
