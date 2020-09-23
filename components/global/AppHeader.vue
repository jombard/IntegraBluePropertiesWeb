<template>
  <header>
    <div class="container mx-auto flex justify-between p-4">
      <nuxt-link to="/" class="logo"
        >Integra<strong>Blue</strong> Properties</nuxt-link
      >

      <nav>
        <MenuIcon />
        <AppLinks class="hidden md:flex header-links" />
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
}
</script>
