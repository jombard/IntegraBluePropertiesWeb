<template>
  <div>
    <PrimarySection headline="Contact Us" />

    <ContentSection class="md:pb-0">
      <nuxt-content :document="page" />
    </ContentSection>

    <SignUpForm title="Drop us a note">
      Send us your query and we will get back to you
    </SignUpForm>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('pages/contact').fetch()
    return { page }
  },
}
</script>
