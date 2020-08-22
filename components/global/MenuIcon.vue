<template>
  <div class="wrapper">
    <div
      class="main-item menu"
      :class="{ close: isMenuOpen }"
      @click="$store.dispatch('menu/toggle')"
    >
      <span class="line line01"></span>
      <span class="line line02"></span>
      <span class="line line03"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuIcon',
  computed: {
    isMenuOpen() {
      return this.$store.getters['menu/isOpen']
    },
  },
}
</script>

<style lang="scss">
.wrapper {
  display: inline-block;
  position: relative;
  cursor: pointer;
}

.main-item {
  width: 25px;
  height: 25px;
  position: relative;
}

.line {
  position: absolute;
  background-color: #006298;
  height: 5px;
  width: 100%;
  border-radius: 10px;
  transition: all cubic-bezier(0.25, 0.1, 0.28, 1.54) 0.32s;
}

.line01 {
  top: 17%;
}

.line02 {
  top: 49%;
}

.line03 {
  top: 79%;
}

.menu.close .line01 {
  transform: rotate(45deg);
  top: 49%;
}

.menu.close .line02,
.menu.close .line03 {
  transform: rotate(-45deg);
  top: 49%;
}

@media (min-width: 600px) {
  .menu,
  .wrapper {
    display: none;
  }
  nav ul {
    display: flex;

    li a {
      font-size: 0.9em;
      padding: 0.3em 0.8em;
    }
  }
}
</style>
