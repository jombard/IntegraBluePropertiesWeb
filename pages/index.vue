<template>
  <div>
    <div class="bg-cover bg-cover-img py-24">
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
          v-for="(w, i) in workwith"
          :key="i"
          class="md:w-1/3 mb-10"
          :class="
            i === 0
              ? 'md:pl-0 md:pr-10'
              : i === workwith.length - 1
              ? 'md:pr-0 md:pl-10'
              : 'md:px-5'
          "
        >
          <div class="flex-grow">
            <nuxt-link :to="w.link">
              <div v-if="i === 0" class="text-blue text-sm w-1/4">
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
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <div v-if="i === 1" class="text-blue text-sm w-1/4">
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
                    d="M15 9a2 2 0 10-4 0v5a2 2 0 01-2 2h6m-6-4h4m8 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div v-if="i === 2" class="text-blue text-sm w-1/4">
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
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
            </nuxt-link>
            <h2 class="text-3xl mb-2 text-blue font-bold">
              <nuxt-link :to="w.link">{{ w.title }}</nuxt-link>
            </h2>
            <p class="leading-7 text-lg">
              {{ w.text }}
            </p>
            <nuxt-link class="text-blue inline-flex items-center" :to="w.link"
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
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const landlords = await $content('landlords').fetch()
    const investors = await $content('investors').fetch()
    const partners = await $content('partners').fetch()
    return { landlords, investors, partners }
  },
  data() {
    return {
      workwith: [
        {
          title: 'Landlords',
          text:
            'We can help landlords in a number of ways, but it starts with knowing what is important to you. ' +
            'Troublesome tenants, mounting expenses, headache agents, we can make it all go away.',
          link: '/landlords',
        },
        {
          title: 'Investors',
          text:
            'Property can be a lucrative endeavour. The right property can offer enticing gains.' +
            'We work with investors to help them get the best returns on their capital.',
          link: '/investors',
        },
        {
          title: 'Partners',
          text:
            'We are always looking to work with like-minded individuals and companies. ' +
            'The old adage of two heads are better than one is so true. How can we help you?',
          link: '/partners',
        },
      ],
    }
  },
}
</script>

<style>
.bg-cover-img {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('~assets/images/portland.jpg');
}
</style>
