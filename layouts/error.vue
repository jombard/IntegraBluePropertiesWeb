<template>
  <div class="container mx-auto py-24">
    <h1>An error has occurred</h1>
    <pre>{{ error }}</pre>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped></style>
