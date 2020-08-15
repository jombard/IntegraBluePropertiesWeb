<template>
  <div>
    <div class="main-bg slide-in-from-right"></div>

    <div class="main-headline slide-in-from-left">
      <h1>Contact Us</h1>
      <div class="sub-header">
        <p>We would love to hear from you</p>
      </div>
    </div>

    <div class="section-one slide-in-from-left mb-10">
      <div class="menu-image"></div>

      <section class="text-gray-700 body-font relative slide-in-from-right">
        <div class="container p-10 mx-auto flex sm:flex-no-wrap flex-wrap">
          <div class="bg-gray-300 pr-10">
            <div class="bg-white p-6">
              <div class="mb-4">
                <h2>Email</h2>
                <a :href="`mailto:${email}`" class="text-blue text-lg">{{
                  email
                }}</a>
                <h2>Phone</h2>
                <a :href="`tel:${phone}`" class="text-blue text-lg">{{
                  phone
                }}</a>
              </div>
              <div>
                <h2>Address</h2>
                <p class="text-lg">Bridport<br />Dorset<br />UK</p>
              </div>
            </div>
          </div>
          <div
            class="bg-white flex flex-col md:ml-auto w-full md:p-8 mt-8 md:mt-0"
          >
            <h2>Feedback</h2>
            <p class="text-lg">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <label for="txtName">Name</label>
            <input id="txtName" class="px-4 py-2 mb-4" type="text" />
            <label for="txtEmail">Email</label>
            <input id="txtEmail" class="px-4 py-2 mb-4" type="email" />
            <label for="txtPhone">Phone</label>
            <input id="txtPhone" class="px-4 py-2 mb-4" type="telephone" />
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

.section-one .menu-image {
  background-image: url('~assets/images/cottage1.jpg');
}
</style>
