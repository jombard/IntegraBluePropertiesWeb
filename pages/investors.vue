<template>
  <div>
    <PrimarySection headline="Investors" />

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
