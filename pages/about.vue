<template>
  <div>
    <PageHeader title="About Us" class="text-blue" />

    <ContentSection>
      <nuxt-content :document="page" />
    </ContentSection>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('about/about').fetch()
    return { page }
  },
}
</script>
