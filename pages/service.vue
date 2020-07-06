<template>
  <div>
    <div class="main-bg slide-in-from-right"></div>

    <div class="main-headline slide-in-from-left">
      <h1>Services</h1>
      <p>We help solve property problems</p>
    </div>

    <div class="section-one slide-in-from-left">
      <div class="menu-image"></div>

      <ul class="p-10">
        <li v-for="(service, i) in services" :key="i" class="mb-5 text-white">
          {{ service }}
        </li>
      </ul>

      <nuxt-link to="/contact" class="cta">We can help today</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        'Offering speed and certainty',
        'Helping find a win-win situation',
        'Finding creative solutions',
        'Putting you first',
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.main-bg {
  background-image: url('~assets/images/portland.jpg');
}
</style>
