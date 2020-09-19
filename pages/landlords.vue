<template>
  <div>
    <PageHeader
      title="Landlords"
      subtitle="Are you a landlord looking for solutions? We may be able to help!"
    />

    <PrimarySection
      headline="Offering solutions for landlords"
      alt-text="Offering the best solutions for a range of issues"
    />

    <ContentSection>
      <nuxt-content :document="page" />
    </ContentSection>

    <SignUpForm />
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
