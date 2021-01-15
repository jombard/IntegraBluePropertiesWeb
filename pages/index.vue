<template>
  <div>
    <div class="bg-portland bg-cover-img py-10 md:py-24">
      <PageHeader
        title="Bringing integrity to the property market"
        subtitle="We offer property solutions"
        :is-white="true"
      >
        <nuxt-link to="/services" class="uppercase btn btn-blue mb-3 mt-10">
          Our Services
        </nuxt-link>
        <nuxt-link to="/contact" class="uppercase btn text-white mb-3">
          Contact Us
        </nuxt-link>
      </PageHeader>
    </div>

    <div class="container py-10 md:py-24 mx-auto relative px-4">
      <h2 class="text-3xl md:text-5xl">Why work with IntegraBlue Properties</h2>
      <p class="mb-10">
        Working in property and providing solutions to property owners.
      </p>
      <div class="flex flex-wrap">
        <div
          v-for="(page, i) in pages"
          :key="i"
          class="md:w-1/3 mb-10 text-center md:text-left md:pr-5 mx-auto"
        >
          <ServiceItem :page="page" />
        </div>
      </div>
    </div>

    <PrimarySection
      headline="Are you looking to make money from your property by renting it out as a holiday let?"
      ><nuxt-link class="text-white inline-flex btn" to="/holiday-lets"
        >Find Out More</nuxt-link
      >
    </PrimarySection>

    <div v-if="false" class="container mx-auto py-10 md:py-24 px-4">
      <div class="text-center">
        <QuoteIcon :size="48" class="inline-block text-gray-400 mb-8" />
        <p class="leading-relaxed text-lg md:w-1/2 mx-auto">
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
        <p class="text-gray-500 text-sm">Landlord</p>
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

    <div class="container py-10 md:py-24 mx-auto px-4">
      <h2 class="text-3xl md:text-5xl">Industry Affiliations</h2>
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
import QuoteIcon from 'vue-material-design-icons/FormatQuoteClose.vue'

export default {
  name: 'HomePage',
  components: {
    QuoteIcon,
  },
  async asyncData({ $content }) {
    const pages = await $content('').fetch()
    return { pages: pages.sort((a, b) => a.order - b.order) }
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
