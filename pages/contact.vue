<template>
  <div>
    <PageHeader
      title="Contact Us"
      subtitle="We would love to hear from you"
      class="text-blue"
    />

    <PrimarySection
      headline="Get in touch"
      alt-text="Please call or email us today"
      image-url="contact.jpg"
    >
      <div class="text-white flex flex-wrap">
        <div class="mr-10">
          <h2 class="text-2xl">Phone</h2>
          <a :href="`tel:${phone}`" class="text-lg">{{ phone }}</a>
        </div>
        <div>
          <h2 class="text-2xl">Email</h2>
          <a :href="`mailto:${email}`" class="text-lg">{{ email }}</a>
        </div>
      </div>
    </PrimarySection>

    <SignUpForm title="Drop us a note">
      Send us your query and we will get back to you shortly
    </SignUpForm>
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
