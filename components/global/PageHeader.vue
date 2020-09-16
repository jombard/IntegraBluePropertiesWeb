<template>
  <div class="container mx-auto slide-in-from-left px-4 py-24 relative">
    <h1 class="font-bold mb-5">{{ title }}</h1>
    <div class="sub-header">
      <p>{{ subtitle }}</p>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.sub-header {
  margin-left: 20%;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: -100%;
    right: 100%;
    height: 100%;
    background: #f1ede2;
    margin-right: 3rem;
  }

  p {
    font-size: 1.2em;
    line-height: 1.5em;
  }
}

@media (min-width: 900px) {
  .sub-header {
    width: 60%;
    margin-left: 15%;
  }
}
</style>
