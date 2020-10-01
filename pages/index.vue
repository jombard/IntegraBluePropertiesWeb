<template>
  <div>
    <div class="bg-portland bg-cover-img md:py-24">
      <PageHeader
        title="Bringing integrity to the property market"
        subtitle="We offer property solutions"
        class="text-white"
      >
        <nuxt-link to="/services" class="uppercase btn btn-blue mb-3 mt-10">
          Our Services
        </nuxt-link>
        <nuxt-link to="/contact" class="uppercase btn text-white mb-3">
          Contact Us
        </nuxt-link>
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
            <h2 class="text-3xl mb-2 font-bold">
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

    <PrimarySection
      headline="Are you looking to make money from your property by renting it out as a holiday let?"
      image-url="holidayhome.jpg"
    />

    <div v-if="false" class="container mx-auto py-24 px-4">
      <div class="text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="inline-block w-8 h-8 text-gray-400 mb-8"
          viewBox="0 0 975.036 975.036"
        >
          <path
            d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"
          ></path>
        </svg>
        <p class="leading-relaxed text-lg w-1/2 mx-auto">
          Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki
          taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman
          taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid
          juice before they sold out gentrify plaid gastropub normcore XOXO 90's
          pickled cindigo jean shorts.
        </p>
        <span class="inline-block h-1 w-10 rounded bg-blue mt-8 mb-6"></span>
        <h2 class="text-gray-900 font-medium title-font tracking-wider">
          HOLDEN CAULFIELD
        </h2>
        <p class="text-gray-500 text-sm">Senior Product Designer</p>
      </div>
    </div>

    <div
      v-if="false"
      class="bg-oxford bg-cover-img flex items-center justify-center py-24"
    >
      <blockquote
        class="bg-blue font-serif mx-4 p-4 text-center text-white md:p-8 my-24"
      >
        <p class="font-bold italic text-3xl mb-0">
          &ldquo;Providing quality accommodation for quality people&rdquo;
        </p>
      </blockquote>
    </div>

    <SignUpForm title="Contact Us">
      Please send us your details and we will get back to you
    </SignUpForm>

    <div class="container py-24 mx-auto px-4">
      <div class="flex flex-wrap items-center">
        <div class="w-1/2 md:w-1/4 px-5">
          <img
            class="mx-auto"
            src="~/assets/images/pin-logo.png"
            alt="Property Investors Network Logo"
          />
        </div>
        <div class="w-1/2 md:w-1/4 px-5">
          <img
            class="mx-auto"
            src="~/assets/images/nrla-members-logo.png"
            alt="NRLA Members Logo"
          />
        </div>
        <div class="w-1/2 md:w-1/4 px-5">
          <img
            class="mx-auto"
            src="~/assets/images/property-ombudsman-logo.png"
            alt="Property Ombudsman Logo"
          />
        </div>
        <div class="w-1/2 md:w-1/4 px-5">
          <img
            class="mx-auto"
            src="~/assets/images/ico-logo.png"
            alt="ICO Logo"
          />
        </div>
      </div>
    </div>
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('~assets/images/portland.jpg');
}

.bg-oxford {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('~assets/images/oxford.jpg');
}
</style>
