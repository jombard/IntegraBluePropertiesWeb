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
      <div class="flex flex-wrap">
        <div
          v-for="(page, x) in pages"
          :key="x"
          class="md:w-1/4 p-5 text-center"
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

      <div class="pt-10 text-center md:w-1/4 mx-auto">
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
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
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
