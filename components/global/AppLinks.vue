<template>
  <ul>
    <li>
      <nuxt-link to="/">Home</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/about">About</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/services">Services</nuxt-link>
      <ul class="md:hidden">
        <li>
          <nuxt-link to="/landlords">Landlords</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/investors">Investors</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/holiday-lets">Holiday Lets</nuxt-link>
        </li>
      </ul>
    </li>
    <li>
      <nuxt-link to="/contact">Contact</nuxt-link>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.sidenav {
  li > a {
    font-size: 1.5rem;
    line-height: 3rem;
  }
  li > ul > li > a {
    font-size: 1.25rem;
    line-height: 2.5rem;
    margin-left: 1rem;
  }
}

.nuxt-link-exact-active {
  border-bottom: 3px solid #006298;
}
</style>
