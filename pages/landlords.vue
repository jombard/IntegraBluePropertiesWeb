<template>
  <div>
    <PrimarySection headline="Landlords" />

    <ContentSection>
      <nuxt-content :document="page" />
    </ContentSection>

    <SignUpForm title="Contact Us">
      Please send us your details and we will get back to you
    </SignUpForm>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('landlords').fetch()
    return { page }
  },
}
</script>
