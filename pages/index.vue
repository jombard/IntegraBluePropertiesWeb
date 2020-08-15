<template>
  <div>
    <div class="main-bg slide-in-from-right"></div>

    <div class="main-headline slide-in-from-left">
      <h1 class="font-bold mb-5">Helping Solve Property Problems</h1>
      <div class="sub-header">
        <p>We offer an array of suitable solutions to property owners</p>
        <nuxt-link class="cta primary" to="/">Our Services</nuxt-link>
      </div>
    </div>

    <div class="section-one slide-in-from-left">
      <div class="menu-image"></div>

      <section class="text-white body-font slide-in-from-right">
        <div class="container p-24 mx-auto">
          <h2
            class="sm:text-3xl text-2xl font-medium title-font text-white mb-10"
          >
            Are you a landlord looking for relief from a troublesome property?
          </h2>
          <nuxt-link to="/contact" class="cta">Contact Us Today</nuxt-link>
        </div>
      </section>

      <div class="block one"></div>
      <div class="block two"></div>
    </div>

    <div class="container py-24 mx-auto">
      <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        <div
          v-for="(w, i) in workwith"
          :key="i"
          class="p-4 md:w-1/3 md:mb-0 mb-6"
        >
          <div class="flex-grow pl-6">
            <ImageResponsive :image-url="w.img" :alt="w.title" class="mb-3" />
            <h2 class="text-2xl mb-3">
              {{ w.title }}
            </h2>
            <p class="leading-7 text-lg">
              {{ w.text }}
            </p>
            <nuxt-link
              class="mt-3 text-blue inline-flex items-center"
              :to="w.link"
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      workwith: [
        {
          title: 'Landlords',
          text:
            'Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.',
          link: '/landlords',
          img: 'landlords.jpg',
        },
        {
          title: 'Investors',
          text:
            'Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.',
          link: '/investors',
          img: 'investors.jpg',
        },
        {
          title: 'Partners',
          text:
            'Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.',
          link: '/partners',
          img: 'partners.jpg',
        },
      ],
    }
  },
  methods: {
    getImg(src) {
      return require(`../assets/images/${src}`)
    },
  },
}
</script>
