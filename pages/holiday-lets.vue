<template>
  <div>
    <div class="main-bg slide-in-from-right"></div>

    <PageHeader
      title="Holiday Lets"
      subtitle="Are you looking for holiday let management? We may be able to help!"
    />

    <PrimarySection
      img-url="holidayhome.jpg"
      headline="Offering solutions for holiday home owners"
      alt-text="Offering solutions for holiday home owners"
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
