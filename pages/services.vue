<template>
  <div>
    <PrimarySection headline="Services" />

    <ContentSection>
      <h2 class="text-3xl md:text-5xl">Why work with IntegraBlue Properties</h2>
      <p class="mb-10">
        Working in property and providing solutions to property owners.
      </p>
      <div class="flex flex-wrap">
        <div v-for="(page, x) in pages" :key="x" class="md:w-1/3 pr-5">
          <ServiceItem :page="page" />
        </div>
      </div>
    </ContentSection>

    <SignUpForm title="Contact Us">
      Please send us your details and we will get back to you
    </SignUpForm>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const pages = await $content('').fetch()
    return { pages: pages.sort((a, b) => a.order - b.order) }
  },
}
</script>
