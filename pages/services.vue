<template>
  <div>
    <PrimarySection headline="Services" />

    <ContentSection>
      <div class="flex flex-wrap">
        <div
          v-for="(page, x) in pages"
          :key="x"
          class="md:w-1/3 p-5 text-center mx-auto"
        >
          <nuxt-link :to="page.path" class="text-blue">
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
          <h2 class="text-3xl mb-2">
            <nuxt-link :to="page.path">{{ page.title }}</nuxt-link>
          </h2>
          <p>{{ page.description }}</p>
          <nuxt-link
            class="inline-flex items-center link-underline text-blue"
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
