<template>
  <div class="image-placeholder">
    <img :src="imageRequired" :alt="alt" />
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      required: true,
      type: String,
    },
    alt: {
      required: true,
      type: String,
    },
  },
  computed: {
    imageRequired() {
      try {
        return require(`@/assets/images/${this.imageUrl}`)
      } catch (error) {
        return null
      }
    },
  },
}
</script>
