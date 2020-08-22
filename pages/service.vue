<template>
  <div>
    <div class="main-bg slide-in-from-right"></div>

    <PageHeader title="Services" subtitle="We help solve property problems" />

    <PrimarySection
      img-url="cottage2.jpg"
      headline="Our services"
      :alt-text="services.join(', ')"
    />

    <SignUpForm />
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
