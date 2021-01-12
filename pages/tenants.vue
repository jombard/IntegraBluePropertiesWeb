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

    <SignUpForm title="Register your details">
      Be the first to hear about upcoming vacancies
    </SignUpForm>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('tenants').fetch()
    return { page }
  },
}
</script>
