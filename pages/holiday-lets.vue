<template>
  <div>
    <PageHeader
      :title="page.title"
      :subtitle="page.description"
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
    const page = await $content('holiday-lets').fetch()
    return { page }
  },
}
</script>
