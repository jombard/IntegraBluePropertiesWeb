<template>
  <div class="container mx-auto py-24">
    <PageHeader title="An error has occurred">
      <pre>{{ error }}</pre>
    </PageHeader>
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
