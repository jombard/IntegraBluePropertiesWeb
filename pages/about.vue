<template>
  <div>
    <div class="main-bg slide-in-from-right"></div>

    <PageHeader
      title="About IntegraBlue Properties"
      subtitle="When core values align"
    />

    <PrimarySection
      img-url="talk.jpg"
      headline="When working within your core values you can make a real difference"
      :alt-text="coreValues.join(', ')"
    />

    <div class="relative mb-24">&nbsp;</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      coreValues: [
        'Creativity',
        'Fair & Responsible',
        'Health & Wellbeing',
        'Honesty & Integrity',
        'Learning & Growth',
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.main-bg {
  background-image: url('~assets/images/broadstairs.jpg');
}
</style>
