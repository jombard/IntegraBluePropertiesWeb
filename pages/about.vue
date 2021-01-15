<template>
  <div>
    <PrimarySection headline="About" />

    <ContentSection>
      <nuxt-content :document="page" />
    </ContentSection>

    <div class="container mx-auto px-4 py-10"></div>
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
