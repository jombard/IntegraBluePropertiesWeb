<template>
  <div>
    <PageHeader title="About Us" class="text-blue" />

    <PrimarySection
      :headline="page.title"
      :alt-text="page.description"
      image-url="jon-lombard.jpg"
    />

    <ContentSection>
      <nuxt-content :document="page" />
    </ContentSection>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('pages/about').fetch()
    return { page }
  },
}
</script>
