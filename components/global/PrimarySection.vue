<template>
  <div class="bg-blue">
    <section class="relative">
      <div class="container py-10 md:py-24 px-4 mx-auto">
        <div class="text-white">
          <h2 class="text-4xl mb-3">{{ headline }}</h2>
          <p class="text-2xl">
            {{ altText }}
          </p>
        </div>
        <slot></slot>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PrimarySection',
  props: {
    headline: {
      type: String,
      default: '',
    },
    altText: {
      type: String,
      default: '',
    },
  },
}
</script>
