<template>
  <div>
    <PageHeader
      title="Holiday Lets"
      subtitle="Are you looking for holiday let management? We may be able to help!"
      class="text-blue"
    />

    <PrimarySection
      headline="Offering solutions for holiday home owners"
      alt-text="Offering solutions for holiday home owners"
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
    const page = await $content('holidaylets').fetch()
    return { page }
  },
}
</script>
