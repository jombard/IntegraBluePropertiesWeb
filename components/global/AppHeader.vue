<template>
  <header>
    <div class="container mx-auto flex justify-between p-4">
      <nuxt-link to="/" class="logo"
        >Integra<strong>Blue</strong> Properties</nuxt-link
      >

      <nav>
        <MenuIcon />
        <AppLinks class="hidden md:flex" />
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
}
</script>

<style lang="scss">
header {
  position: fixed;
  width: 100%;
  background-color: #fff;
  z-index: 1000;
  top: 0;
  box-shadow: 0 0 2rem -1rem #{transparentize(black, 0.8)};
}
</style>
