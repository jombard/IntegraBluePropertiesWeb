<template>
  <ul>
    <li>
      <nuxt-link to="/" class="link-underline">Home</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/about" class="link-underline">About</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/landlords" class="link-underline">Landlords</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/investors" class="link-underline">Investors</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/partners" class="link-underline">Partners</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/tenants" class="link-underline">Tenants</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/contact" class="link-underline">Contact</nuxt-link>
    </li>
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
