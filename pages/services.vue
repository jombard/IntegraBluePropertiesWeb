<template>
  <div>
    <PageHeader
      title="Services"
      subtitle="How can we help you?"
      class="text-blue"
    />

    <PrimarySection
      headline="Allow us to take the hard work out of property"
      alt-text=""
      image-url="cottage2.jpg"
    />

    <ContentSection>
      <div class="flex">
        <div v-for="(page, x) in pages" :key="x" class="w-1/4 p-5 text-center">
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
          <h2 class="text-3xl mb-2 font-bold">
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

      <div class="pt-10 text-center w-1/4 mx-auto">
        <h2 class="text-2xl mb-10">Other services</h2>
        <nuxt-link to="holiday-lets" class="text-blue">
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
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </nuxt-link>
        <h2 class="text-3xl mb-2 font-bold">
          <nuxt-link to="/holiday-lets">Holiday Let Management</nuxt-link>
        </h2>
        <p>Offering solutions for holiday home owners</p>
        <nuxt-link
          class="inline-flex items-center link-underline text-blue"
          to="holiday-lets"
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
