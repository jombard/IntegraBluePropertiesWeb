<template>
  <div>
    <PageHeader :title="page.title" class="text-blue" />

    <PrimarySection
      headline="Go together to go further"
      image-url="partners.jpg"
    />

    <ContentSection>
      <nuxt-content :document="page" />
    </ContentSection>

    <SignUpForm title="Get in touch">
      Let us know how we can help you
    </SignUpForm>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('partners').fetch()
    return { page }
  },
}
</script>
