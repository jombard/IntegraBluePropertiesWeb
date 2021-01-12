<template>
  <div>
    <PageHeader :title="page.title" class="text-blue"> </PageHeader>

    <PrimarySection
      headline="Make your money work smarter by investing with us"
      alt-text=""
      image-url="investment-property.jpg"
    />

    <ContentSection>
      <nuxt-content :document="page" />
    </ContentSection>

    <SignUpForm title="Register you interest">
      Please register your interest for when we open more spaces to invest
    </SignUpForm>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('investors').fetch()
    return { page }
  },
}
</script>
