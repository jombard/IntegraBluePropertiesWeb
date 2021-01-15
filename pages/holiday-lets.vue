<template>
  <div>
    <PrimarySection headline="Holiday Lets" />

    <ContentSection>
      <nuxt-content :document="page" />
    </ContentSection>

    <SignUpForm title="Contact Us" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('holiday-lets').fetch()
    return { page }
  },
}
</script>
