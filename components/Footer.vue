<template>
  <footer class="fixed bottom-0 w-full">
    <div class="container mx-auto flex justify-between">
      <div class="mb-4">
        <strong>IntegraBlue Properties</strong><br />
        Registered Company in England no: 12247772<br />
        &copy; Copyright 2020
      </div>
      <div class="mb-4">
        <strong>Registered with</strong><br />
        <a href="#">ICO</a><br />
        <a href="#">NRLA</a><br />
        <a href="#">Property Ombudsman</a>
      </div>
      <div class="mb-4">
        <strong>Socials</strong><br />
        <a href="#">Instagram</a><br />
        <a href="#">Facebook</a><br />
        <a href="#">Twitter</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss">
footer {
  padding: 3em;
  background-color: #006298;
  color: #98c9e4;
  z-index: -1;
}
</style>
