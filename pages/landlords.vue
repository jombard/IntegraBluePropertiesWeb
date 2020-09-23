<template>
  <div>
    <PageHeader
      :title="page.title"
      :subtitle="page.description"
      class="text-blue"
    />

    <PrimarySection />

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
