<template>
  <div>
    <div class="main-bg slide-in-from-right"></div>

    <PageHeader
      title="Working smarter not harder"
      subtitle="Putting your capital to work with a trusted, transparent resource"
    >
    </PageHeader>

    <PrimarySection
      img-url="investors.jpg"
      headline="Are you looking for better returns on your capital?"
      alt-text="We are not currently open to more investors but please register your
          interest for when we open more spaces to invest"
    />

    <SignUpForm />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.main-bg {
  background-image: url('~assets/images/oxford.jpg');
}
</style>
