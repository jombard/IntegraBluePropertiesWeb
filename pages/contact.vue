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

    <ContentSection class="md:pb-0">
      <nuxt-content :document="page" />
    </ContentSection>

    <SignUpForm title="Drop us a note">
      Send us your query and we will get back to you
    </SignUpForm>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('pages/contact').fetch()
    return { page }
  },
  data() {
    return {
      email: 'hello@integrablue.co.uk',
      phone: '01308 800 291',
    }
  },
}
</script>
