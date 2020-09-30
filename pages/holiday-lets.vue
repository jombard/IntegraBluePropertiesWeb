<template>
  <div>
    <PageHeader
      title="Holiday Lets"
      subtitle="Are you looking for holiday let management?"
      class="text-blue"
    />

    <PrimarySection
      headline="Offering solutions for holiday home owners"
      image-url="holidayhome.jpg"
    />

    <ContentSection>
      <nuxt-content :document="page" />
    </ContentSection>

    <SignUpForm title="Contact Us" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('services/holidaylets').fetch()
    return { page }
  },
}
</script>
