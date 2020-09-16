<template>
  <div class="section-one slide-in-from-left">
    <ImageResponsive
      v-if="imgUrl"
      :image-url="imgUrl"
      alt="Menu Image"
      class="menu-image absolute"
    />

    <section class="text-gray-700 relative slide-in-from-right">
      <div class="container p-10 mx-auto big-left-margin">
        <div class="text-white">
          <h2 class="text-3xl">{{ headline }}</h2>
          <p class="text-lg">
            {{ altText }}
          </p>
        </div>
        <slot></slot>
      </div>
    </section>

    <div class="block one"></div>
    <div class="block two"></div>
  </div>
</template>

<script>
export default {
  name: 'PrimarySection',
  props: {
    imgUrl: {
      type: String,
      default: null,
    },
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

<style lang="scss" scoped>
.section-one {
  width: 85%;
  background-color: #006298;
  display: flex;
  position: relative;
  margin-left: 2em;

  .block {
    position: absolute;
    background: #004368;
    width: 2em;
    height: 2em;

    &.one {
      right: 2em;
    }
    &.two {
      right: 0;
      top: 2em;
    }
  }
}

.menu-image {
  margin-top: -2em;
  margin-left: -2em;
  width: 8em;
  height: 8em;
  background-size: cover;
}

.big-left-margin {
  margin-left: 20rem;
}

@media (min-width: 900px) {
  .section-one {
    width: 75%;
  }

  .menu-image {
    width: 12em;
    height: 12em;
  }
}

@media (min-width: 1200px) {
  .menu-image {
    width: 15em;
    height: 15em;
  }
}
</style>
