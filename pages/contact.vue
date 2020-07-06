<template>
  <div>
    <div class="main-bg slide-in-from-right"></div>

    <div class="main-headline slide-in-from-left">
      <h1>Contact Us</h1>
      <p>We would love to hear from you</p>
    </div>

    <div class="section-one slide-in-from-left">
      <div class="menu-image"></div>

      <ul class="p-10">
        <li v-for="(type, i) in contactTypes" :key="i" class="mb-5 text-white">
          <strong>{{ type.type }}</strong
          ><br />
          <a :href="`${type.link}${type.value}`"> {{ type.value }}</a>
        </li>
      </ul>
    </div>

    <div class="primary-text">
      <div class="mb-5">
        <label class="mb-3 block" for="txtName">Name</label>
        <input type="text" class="w-full block border" />
      </div>
      <div class="mb-5">
        <label class="mb-3 block" for="txtEmail">Email</label>
        <input type="text" class="w-full block border" />
      </div>
      <div class="mb-5">
        <label class="mb-3 block" for="txtPhone">Phone</label>
        <input type="text" class="w-full block border" />
      </div>
      <div class="mb-5">
        <label class="mb-3 block" for="txtMessage">Message</label>
        <textarea
          id="txtMessage"
          class="w-full block border"
          name="txtMessage"
          rows="5"
        ></textarea>
      </div>
      <button class="bg-blue text-white py-2 px-4" type="button">Send</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contactTypes: [
        { type: 'Mobile', value: '07515 051 972', link: 'tel:' },
        { type: 'Telephone', value: '01308 800 291', link: 'tel:' },
        { type: 'Email', value: 'hello@integrablue.co.uk', link: 'mailto:' },
        {
          type: 'Instagram',
          value: 'integrablueproperties',
          link: 'https://instagram.com/',
        },
        {
          type: 'Facebook',
          value: 'integrablueproperties',
          link: 'https://facebook.com/',
        },
        {
          type: 'Twitter',
          value: 'integrablueproperties',
          link: 'https://twitter.com/',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.main-bg {
  background-image: url('~assets/images/contact.jpg');
}
</style>
