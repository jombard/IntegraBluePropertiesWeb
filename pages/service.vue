<template>
  <div>
    <div class="main-bg slide-in-from-right"></div>

    <PageHeader title="Services" subtitle="We help solve property problems" />

    <div class="section-one slide-in-from-left">
      <div class="menu-image"></div>
      <div class="p-10">
        <ul class="mb-10">
          <li v-for="(service, i) in services" :key="i" class="mb-5 text-white">
            {{ service }}
          </li>
        </ul>

        <nuxt-link to="/contact" class="cta">See how we can help</nuxt-link>
      </div>
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

.section-one .menu-image {
  background-image: url('~assets/images/cottage2.jpg');
}
</style>
