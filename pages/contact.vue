<template>
  <div>
    <div class="main-bg slide-in-from-right"></div>

    <PageHeader title="Contact Us" subtitle="We would love to hear from you" />

    <PrimarySection
      img-url="cottage1.jpg"
      headline="Get in touch"
      alt-text="Please call or email at your convenience"
    >
      <div class="text-white">
        <div class="mb-4">
          <h2>Email</h2>
          <a :href="`mailto:${email}`" class="text-lg">{{ email }}</a>
        </div>
        <div>
          <h2>Phone</h2>
          <a :href="`tel:${phone}`" class="text-lg">{{ phone }}</a>
        </div>
      </div>
    </PrimarySection>

    <div class="py-10 relative">
      <div class="max-w-2xl mx-auto bg-white p-10">
        <div class="mb-4">
          <h2 class="text-3xl">Drop us a note</h2>
          <p class="text-lg">
            Send us your query and we will get back to you shortly
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
        <button class="text-white bg-blue border-0 py-2 px-6 w-full">
          Send message
        </button>
        <p class="text-xs text-gray-500 mt-3 text-center">
          Your privacy is important to us, we respect your data and keep it safe
        </p>
      </div>
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
