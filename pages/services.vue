<template>
  <div>
    <PageHeader
      title="Services"
      subtitle="How can we help you?"
      class="text-blue"
    />

    <PrimarySection>
      <div class="flex">
        <div
          v-for="(page, x) in pages"
          :key="x"
          class="w-1/4 text-white p-5 text-center"
        >
          <nuxt-link :to="page.path">
            <div class="text-sm w-1/4 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  :d="page.svg"
                />
              </svg>
            </div>
          </nuxt-link>
          <h3 class="text-4xl">{{ page.title }}</h3>
          <p>{{ page.description }}</p>
          <nuxt-link
            class="inline-flex items-center link-underline"
            :to="page.path"
            >Learn More
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </nuxt-link>
        </div>
      </div>
    </PrimarySection>

    <ContentSection>
      <h3 class="text-4xl">Other services</h3>
      <nuxt-link to="holiday-lets">Holiday Let Management</nuxt-link>
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
    return { pages }
  },
}
</script>
