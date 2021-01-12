<template>
  <div>
    <PageHeader
      title="Contact Us"
      subtitle="We would love to hear from you"
      class="text-blue"
    />

    <PrimarySection
      headline="Please email or call us today"
      :alt-text="`${email} ${phone}`"
      image-url="contact.jpg"
    />

    <SignUpForm title="Drop us a note">
      Send us your query and we will get back to you
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
