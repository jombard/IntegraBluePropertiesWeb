<template>
  <div>
    <div class="main-bg slide-in-from-right"></div>

    <div class="main-headline slide-in-from-left">
      <h1>Contact Us</h1>
      <p>We would love to hear from you</p>
    </div>

    <div class="section-one slide-in-from-left">
      <div class="menu-image"></div>

      <section class="text-gray-700 body-font relative">
        <div
          class="container px-5 py-24 mx-auto flex sm:flex-no-wrap flex-wrap"
        >
          <div
            class="lg:w-2/3 md:w-1/2 bg-gray-300 overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20204.090558793658!2d-2.7746167618917608!3d50.72900465403237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487260d8d3302079%3A0x5278ca25f614702b!2sBridport!5e0!3m2!1sen!2suk!4v1594754769719!5m2!1sen!2suk"
              style="filter: grayscale(1) contrast(1.2) opacity(0.4);"
              aria-hidden="false"
              class="absolute inset-0"
              tabindex="0"
              width="100%"
              height="100%"
              title="map"
            ></iframe>
            <div class="bg-white relative flex flex-wrap py-6">
              <div class="lg:w-1/2 px-6">
                <h2>Address</h2>
                <p>Bridport<br />Dorset<br />UK</p>
              </div>
              <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2>Email</h2>
                <a>{{ email }}</a>
                <h2>Phone</h2>
                <p>{{ phone }}</p>
              </div>
            </div>
          </div>
          <div
            class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:p-8 mt-8 md:mt-0"
          >
            <h2>Feedback</h2>
            <p>Post-ironic portland shabby chic echo park, banjo fashion axe</p>
            <label for="txtName">Name</label>
            <input id="txtName" class="px-4 py-2 mb-4" type="text" />
            <label for="txtEmail">Email</label>
            <input id="txtEmail" class="px-4 py-2 mb-4" type="email" />
            <label for="txtMessage">Message</label>
            <textarea
              id="txtMessage"
              class="h-32 px-4 py-2 mb-4 resize-none"
            ></textarea>
            <button class="text-white bg-blue border-0 py-2 px-6">
              Button
            </button>
            <p class="text-xs text-gray-500 mt-3 text-center">
              We respect your data
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: 'hello@integrablue.co.uk',
      phone: '01308 800 291',
    }
  },
}
</script>

<style lang="scss" scoped>
.main-bg {
  background-image: url('~assets/images/contact.jpg');
}
</style>
