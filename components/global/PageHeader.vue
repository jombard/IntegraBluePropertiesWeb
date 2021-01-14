<template>
  <div class="container mx-auto px-4 py-10 md:py-24 relative">
    <h1
      class="font-bold mb-5 text-4xl md:text-6xl leading-tight"
      :class="isWhite ? 'text-white' : 'text-blue'"
    >
      {{ title }}
    </h1>
    <div>
      <p
        v-if="subtitle"
        class="text-2xl md:text-3xl leading-7 mb-0"
        :class="isWhite ? 'text-white' : 'text-gray-900'"
      >
        {{ subtitle }}
      </p>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: '',
    },
    isWhite: {
      type: Boolean,
    },
  },
}
</script>
