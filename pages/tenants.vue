<template>
  <div>
    <PageHeader :title="page.title" class="text-blue" />

    <PrimarySection
      headline="Looking for quality accommodation?"
      alt-text="You have come to the right place"
      image-url="oxford.jpg"
    />

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
