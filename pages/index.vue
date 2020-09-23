<template>
  <div>
    <div class="bg-portland bg-cover-img md:py-24">
      <PageHeader
        title="Bringing integrity to the property market"
        subtitle="We offer property solutions"
        class="text-white"
      >
        <nuxt-link to="/landlords" class="uppercase btn btn-blue mb-3 mt-10"
          >Our Services</nuxt-link
        >
        <nuxt-link to="/contact" class="uppercase btn text-white mb-3"
          >Contact Us</nuxt-link
        >
      </PageHeader>
    </div>

    <div class="container py-24 mx-auto relative px-4">
      <div class="flex flex-wrap">
        <div
          v-for="(w, i) in pages"
          :key="i"
          class="md:w-1/4 mb-10 text-center md:px-5"
        >
          <div class="flex-grow">
            <nuxt-link :to="w.path">
              <div class="text-blue text-sm w-1/4 mx-auto">
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
                    :d="w.svg"
                  />
                </svg>
              </div>
            </nuxt-link>
            <h2 class="text-3xl mb-2 text-blue font-bold">
              <nuxt-link :to="w.path">{{ w.title }}</nuxt-link>
            </h2>
            <p class="leading-7 text-lg">
              {{ w.description }}
            </p>
            <nuxt-link
              class="text-blue inline-flex items-center link-underline"
              :to="w.path"
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
      </div>
    </div>

    <!-- <PrimarySection
      headline="Are you looking to make money from your property by renting it out as a holiday let? We can help with this."
    >
      <nuxt-link to="/contact" class="btn text-white"
        >Contact Us Today</nuxt-link
      >
    </PrimarySection> -->

    <!-- <div class="bg-oxford bg-cover-img flex items-center justify-center py-24">
      <blockquote
        class="bg-blue font-serif mx-4 p-4 text-center text-white md:p-8 my-24"
      >
        <p class="font-bold italic text-3xl mb-0">
          &ldquo;Providing quality accommodation for quality people&rdquo;
        </p>
      </blockquote>
    </div>

    <div class="container mx-auto py-24">
      <h2 class="text-blue text-4xl font-bold">Contact Us</h2>
      <div>Drop us a note <nuxt-link to="/contact">here</nuxt-link></div>
    </div> -->
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

<style>
.bg-portland {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('~assets/images/portland.jpg');
}

.bg-oxford {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('~assets/images/oxford.jpg');
}
</style>
