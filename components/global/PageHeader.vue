<template>
  <div class="main-headline slide-in-from-left">
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
.main-headline {
  padding: 8em 4em 5em 3em;
  position: relative;

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
}

@media (min-width: 900px) {
  .main-headline {
    padding: 8em 4em 5em 5em;

    .sub-header {
      width: 40%;
      margin-left: 15%;
    }
  }
}
</style>
