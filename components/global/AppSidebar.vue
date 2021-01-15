<template>
  <div class="menu-container">
    <transition name="slide-side">
      <div v-if="isMenuOpen" class="sidenav">
        <AppLinks />
        <TopPageLinks class="text-blue" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'SidebarMenu',
  computed: {
    isMenuOpen() {
      return this.$store.getters['menu/isOpen']
    },
  },
}
</script>

<style lang="scss" scoped>
.menu-container {
  height: 100%;
  width: 100%;
}

.sidenav {
  height: 100%;
  width: 80%;
  background-color: #d6d6d6;
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 1rem 3rem;

  li > a {
    font-size: 1.5rem;
  }
}

.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
}
</style>
