<template>
  <div>
    <PageHeader title="Tenants" class="text-blue" />

    <ContentSection>
      <nuxt-content :document="page" />
    </ContentSection>

    <SignUpForm />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('tenants').fetch()
    return { page }
  },
}
</script>

<style lang="scss" scoped></style>
