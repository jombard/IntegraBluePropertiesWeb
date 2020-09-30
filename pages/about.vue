<template>
  <div>
    <PageHeader title="About Us" class="text-blue" />

    <PrimarySection
      :headline="page.title"
      :alt-text="page.description"
      image-url="talk.jpg"
    />

    <ContentSection>
      <nuxt-content :document="page" />
    </ContentSection>

    <PrimarySection headline="Who We Are">
      <div class="text-white">
        <p>
          Jon Lombard started IntegraBlue Properties to bring an open and honest
          business to the property market. He is primarily interested in working
          with HMO landlords and holiday home owners.
        </p>
        <p>
          Jon lives in Dorset with his wife and daughter, and when he is not in
          front of the computer working on his web business or spending time
          with his family, he can be found running around the trails of the
          hilly Dorset coastline.
        </p>
      </div>
    </PrimarySection>
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
