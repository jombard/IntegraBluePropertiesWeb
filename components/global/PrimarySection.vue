<template>
  <div class="bg-blue">
    <div
      class="container py-10 md:py-24 px-4 mx-auto flex flex-wrap md:flex-no-wrap justify-between"
      :class="imageUrl ? '' : 'items-center'"
    >
      <div class="mb-5 md:mb-0 pr-5">
        <div class="text-white">
          <h2 class="text-4xl md:text-6xl leading-tight font-bold">
            {{ headline }}
          </h2>
          <p v-if="altText" class="text-2xl mb-0">
            {{ altText }}
          </p>
        </div>
      </div>
      <div v-if="imageUrl" class="md:w-1/3 relative">
        <ImageResponsive
          :image-url="imageUrl"
          alt="Primary Section Image"
          class="md:absolute top-0 right-0"
        />
      </div>
      <div v-else class="md:w-1/3 relative">
        <slot></slot>
      </div>
    </div>
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
    imageUrl: {
      type: String,
      default: '',
    },
  },
}
</script>
