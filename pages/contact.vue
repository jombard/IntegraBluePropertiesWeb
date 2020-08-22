<template>
  <div>
    <div class="main-bg slide-in-from-right"></div>

    <PageHeader title="Contact Us" subtitle="We would love to hear from you" />

    <div class="section-one slide-in-from-left mb-10">
      <div class="menu-image"></div>

      <section class="text-gray-700 body-font relative slide-in-from-right">
        <div class="container p-10 mx-auto flex sm:flex-no-wrap flex-wrap">
          <div
            class="bg-white flex flex-col md:ml-auto w-full md:p-8 mt-8 md:mt-0"
          >
            <h2 class="text-3xl">Get in touch</h2>
            <p class="text-lg">
              Please call or email at your convenience
            </p>

            <div class="mb-4 flex justify-between">
              <div class="">
                <h2>Email</h2>
                <a :href="`mailto:${email}`" class="text-blue text-lg">{{
                  email
                }}</a>
              </div>
              <div class="">
                <h2>Phone</h2>
                <a :href="`tel:${phone}`" class="text-blue text-lg">{{
                  phone
                }}</a>
              </div>
            </div>

            <div class="mb-4">
              <p class="text-lg">
                Alternatively send us your query and we will get back to you
                shortly
              </p>
            </div>

            <div class="mb-4">
              <label for="txtName">Name</label>
              <input
                id="txtName"
                class="px-4 py-2 w-full focus:outline-none focus:shadow-outline"
                type="text"
              />
            </div>
            <div class="mb-4">
              <label for="txtEmail">Email</label>
              <input
                id="txtEmail"
                class="px-4 py-2 w-full focus:outline-none focus:shadow-outline"
                type="email"
              />
            </div>
            <div class="mb-4">
              <label for="txtPhone">Phone</label>
              <input
                id="txtPhone"
                class="px-4 py-2 w-full focus:outline-none focus:shadow-outline"
                type="telephone"
              />
            </div>
            <div class="mb-4">
              <label for="txtMessage">Message</label>
              <textarea
                id="txtMessage"
                class="h-32 px-4 py-2 mb-4 resize-none w-full focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <button class="text-white bg-blue border-0 py-2 px-6">
              Send message
            </button>
            <p class="text-xs text-gray-500 mt-3 text-center">
              Your privacy is important to us, we respect your data and keep it
              safe
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

.section-one .menu-image {
  background-image: url('~assets/images/cottage1.jpg');
}
</style>
