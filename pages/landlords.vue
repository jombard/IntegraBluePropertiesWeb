<template>
  <div>
    <div class="main-bg slide-in-from-right"></div>

    <PageHeader
      title="Landlords"
      subtitle="Are you a landlord looking for solutions? We may be able to help!"
    />

    <PrimarySection
      img-url="landlords.jpg"
      headline="Offering solutions for landlords"
      alt-text="Offering the best solutions for a range of issues"
    />

    <SignUpForm />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.main-bg {
  background-image: url('~assets/images/portland.jpg');
}
</style>
