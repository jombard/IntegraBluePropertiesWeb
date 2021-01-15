<template>
  <footer class="fixed bottom-0 w-full bg-gray-900 pt-10 pb-5 text-gray-500">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row mb-5">
        <div class="mb-5 md:mb-0 md:w-1/2">
          <strong>IntegraBlue Properties</strong><br />
          <TopPageLinks />
        </div>
        <div class="mb-5 md:mb-0 md:w-1/4">
          <nuxt-link to="/about">About</nuxt-link><br />
          <nuxt-link to="/services">Services</nuxt-link><br />
          <nuxt-link to="/contact">Contact</nuxt-link>
        </div>
        <div class="mb-5 md:mb-0 md:w-1/4">
          <nuxt-link to="/landlords">Landlords</nuxt-link><br />
          <nuxt-link to="/holiday-lets">Holiday Lets</nuxt-link><br />
          <nuxt-link to="/investors">Investors</nuxt-link>
        </div>
      </div>
      <div class="text-base">
        Registered Company in England no: 12247772 &copy; Copyright 2020. All
        Rights Reserved.
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss">
footer {
  z-index: -1;
}
</style>
