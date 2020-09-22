<template>
  <ul>
    <li><nuxt-link to="/">Home</nuxt-link></li>
    <li><nuxt-link to="/about">About</nuxt-link></li>
    <li><nuxt-link to="/landlords">Landlords</nuxt-link></li>
    <li><nuxt-link to="/investors">Investors</nuxt-link></li>
    <li><nuxt-link to="/partners">Partners</nuxt-link></li>
    <li><nuxt-link to="/tenants">Tenants</nuxt-link></li>
    <li><nuxt-link to="/contact">Contact</nuxt-link></li>
  </ul>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.sidenav {
  li > a {
    font-size: 1.5rem;
    line-height: 3.5rem;
  }
}

.nuxt-link-exact-active {
  border-bottom: 3px solid #006298;
}
</style>
