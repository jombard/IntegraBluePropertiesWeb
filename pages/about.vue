<template>
  <div>
    <PageHeader
      title="About Us"
      subtitle="More about IntegraBlue Properties"
      class="text-blue"
    />

    <PrimarySection :headline="page.title" :alt-text="page.description" />

    <ContentSection>
      <nuxt-content :document="page" />
    </ContentSection>

    <div class="container mx-auto w-1/4 pb-10">
      <img src="~/assets/images/talk.jpg" alt="Jon Lombard giving a talk" />
    </div>
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
