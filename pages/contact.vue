<template>
  <div>
    <div class="main-bg slide-in-from-right"></div>

    <PageHeader
      title="Contact Us"
      subtitle="We would love to hear from you"
      class="text-blue"
    />

    <PrimarySection
      img-url="cottage1.jpg"
      headline="Get in touch"
      alt-text="Please call or email us today"
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

    <div class="py-0 md:py-10 relative">
      <div class="max-w-2xl mx-auto bg-white py-10 px-4 md:p-10">
        <form
          action="https://formspree.io/myybyypp"
          method="POST"
          @submit.prevent="submitForm"
        >
          <div class="mb-4">
            <h2 class="text-3xl">Drop us a note</h2>
            <p class="text-lg">
              Send us your query and we will get back to you shortly
            </p>
          </div>
          <div class="mb-4">
            <label for="txtName">Full Name</label>
            <input
              id="txtName"
              v-model="contact.name"
              name="name"
              class="px-4 py-2 w-full focus:outline-none focus:shadow-outline"
              type="text"
            />
          </div>
          <div class="mb-4">
            <label for="txtEmail">Email</label>
            <input
              id="txtEmail"
              v-model="contact.email"
              name="email"
              class="px-4 py-2 w-full focus:outline-none focus:shadow-outline"
              type="email"
            />
          </div>
          <div class="mb-4">
            <label for="txtPhone">Phone</label>
            <input
              id="txtPhone"
              v-model="contact.phone"
              name="phone"
              class="px-4 py-2 w-full focus:outline-none focus:shadow-outline"
              type="telephone"
            />
          </div>
          <div class="mb-4">
            <label for="txtMessage">Message</label>
            <textarea
              id="txtMessage"
              v-model="contact.message"
              name="message"
              class="h-32 px-4 py-2 resize-none w-full focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <button class="btn btn-blue w-full" type="submit">
            Send message
          </button>
          <p class="text-xs text-gray-700 mt-3 text-center">
            Your privacy is important to us, we respect your data and keep it
            safe
          </p>
          <div v-if="status === 'SUCCESS'" class="text-blue text-center">
            Your message has been sent
          </div>
          <div v-if="status === 'ERROR'" class="text-blue text-center">
            Something went wrong
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: null,
      email: 'hello@integrablue.co.uk',
      phone: '01308 800 291',
      contact: {
        name: '',
        email: '',
        phone: '',
        message: '',
      },
    }
  },
  methods: {
    resetForm() {
      this.contact.name = ''
      this.contact.email = ''
      this.contact.phone = ''
      this.contact.message = ''
    },
    submitForm(e) {
      const form = e.target
      const data = new FormData(form)
      const xhr = new XMLHttpRequest()
      xhr.open(form.method, form.action)
      xhr.setRequestHeader('Accept', 'application/json')
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return
        if (xhr.status === 200) {
          this.resetForm()
          this.status = 'SUCCESS'
        } else {
          this.status = 'ERROR'
        }
      }
      xhr.send(data)
    },
  },
}
</script>

<style lang="scss" scoped>
.main-bg {
  background-image: url('~assets/images/contact.jpg');
}
</style>
