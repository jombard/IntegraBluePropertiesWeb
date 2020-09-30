<template>
  <div class="bg-blue">
    <div class="container py-10 md:py-24 px-4 mx-auto flex justify-between">
      <div>
        <div class="text-white">
          <h2 class="text-5xl">{{ headline }}</h2>
          <p v-if="altText" class="text-2xl">
            {{ altText }}
          </p>
        </div>
        <slot></slot>
      </div>
      <div v-if="imageUrl" class="w-1/3 relative">
        <ImageResponsive
          :image-url="imageUrl"
          alt="Primary Section Image"
          class="absolute bottom-0 right-0"
        />
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
