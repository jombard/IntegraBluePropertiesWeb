<template>
  <div>
    <nuxt-link :to="page.path" class="text-blue">
      <div class="text-sm w-1/4 mb-5 mx-auto md:mx-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            :d="page.svg"
          />
        </svg>
      </div>
    </nuxt-link>
    <h2 class="text-3xl mb-2">
      <nuxt-link :to="page.path">{{ page.title }}</nuxt-link>
    </h2>
    <p>{{ page.description }}</p>
    <nuxt-link
      class="inline-flex items-center link-underline text-blue"
      :to="page.path"
      >Learn More
      <ArrowRightIcon />
    </nuxt-link>
  </div>
</template>

<script>
import ArrowRightIcon from 'vue-material-design-icons/ArrowRight.vue'

export default {
  name: 'ServiceItem',
  components: {
    ArrowRightIcon,
  },
  props: {
    page: {
      type: Object,
      default: null,
    },
  },
}
</script>
