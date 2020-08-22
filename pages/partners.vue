<template>
  <div>
    <div class="main-bg slide-in-from-right"></div>

    <PageHeader
      title="Working together to work better"
      subtitle="We are always looking to work with like minded individuals and companies"
    />

    <PrimarySection
      img-url="partners.jpg"
      headline="How can we help you?"
      alt-text="Please get in touch and let us know what we can do for you."
    />

    <SignUpForm />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.main-bg {
  background-image: url('~assets/images/lane.jpg');
}
</style>
