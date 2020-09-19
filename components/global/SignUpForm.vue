<template>
  <div class="container mx-auto p-0 md:px-4 md:py-10 relative">
    <div class="bg-white px-4 py-10">
      <h2 class="text-2xl mb-5">Register your interest</h2>

      <form
        action="https://formspree.io/myybyypp"
        method="POST"
        class="flex w-full flex-col md:flex-row mx-auto"
        @submit.prevent="submitForm"
      >
        <div class="mb-4 md:mr-10 md:w-1/4">
          <label for="txtFullName">Full Name</label>
          <input
            id="txtFullName"
            v-model="contact.name"
            class="px-4 py-2 w-full focus:outline-none focus:shadow-outline"
            type="text"
            name="name"
          />
        </div>
        <div class="mb-4 md:mr-10 md:w-1/4">
          <label for="txtEmail">Email</label>
          <input
            id="txtEmail"
            v-model="contact.email"
            class="px-4 py-2 w-full focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
          />
        </div>
        <div class="mb-4 md:mr-10 md:w-1/4">
          <label for="txtPhone">Phone</label>
          <input
            id="txtPhone"
            v-model="contact.phone"
            class="px-4 py-2 w-full focus:outline-none focus:shadow-outline"
            type="phone"
            name="phone"
          />
        </div>
        <button class="btn btn-blue w-full md:w-1/4">Register</button>
      </form>
      <div v-if="status === 'SUCCESS'" class="text-blue text-center">
        Your message has been sent
      </div>
      <div v-if="status === 'ERROR'" class="text-blue text-center">
        Something went wrong
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: null,
      contact: {
        name: '',
        email: '',
        phone: '',
      },
    }
  },
  methods: {
    resetForm() {
      this.contact.name = ''
      this.contact.email = ''
      this.contact.phone = ''
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
