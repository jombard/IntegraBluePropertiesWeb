<template>
  <header>
    <div class="container mx-auto flex justify-between p-4">
      <nuxt-link to="/" class="logo"
        >Integra<strong>Blue</strong> Properties</nuxt-link
      >

      <nav>
        <MenuIcon />
        <AppLinks />
      </nav>
    </div>
  </header>
</template>

<script>
import MenuIcon from '@/components/MenuIcon'
import AppLinks from '@/components/AppLinks'

export default {
  name: 'TheHeader',
  components: {
    MenuIcon,
    AppLinks,
  },
}
</script>

<style lang="scss">
header {
  background: white;

  ul {
    display: none;
  }
}
</style>
