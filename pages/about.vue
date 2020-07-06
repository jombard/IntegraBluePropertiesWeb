<template>
  <div>
    <div class="main-bg slide-in-from-right"></div>

    <div class="main-headline slide-in-from-left">
      <h1>About IntegraBlue Properties</h1>
      <p>When core values align</p>
    </div>

    <div class="section-one slide-in-from-left">
      <div class="menu-image"></div>

      <ul class="p-10">
        <li v-for="(val, i) in coreValues" :key="i" class="text-white mb-5">
          {{ val }}
        </li>
      </ul>
    </div>
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

.section-one .menu-image {
  background-image: url('~assets/images/talk.jpg');
}
</style>
