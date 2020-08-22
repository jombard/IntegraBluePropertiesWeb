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
      return require(`@/assets/images/${this.imageUrl}`)
    },
  },
}
</script>
