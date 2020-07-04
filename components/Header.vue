<template>
  <header>
    <nuxt-link to="/" class="logo"
      >Integra<strong>Blue</strong> Properties</nuxt-link
    >

    <nav>
      <MenuIcon />
      <AppLinks />
    </nav>
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

<style lang="scss" scoped></style>
