<template>
  <footer class="fixed bottom-0 w-full bg-gray-900 py-12 text-gray-500">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row">
        <div class="mb-5 md:w-1/3">
          <strong>IntegraBlue Properties</strong><br />
          Registered Company in England no: 12247772<br />
          &copy; Copyright 2020
        </div>
        <div class="mb-5 md:w-1/3"></div>
        <div class="mb-5 md:w-1/3">
          <strong>Registered with</strong><br />
          <a href="https://ico.org.uk/" target="_blank" rel="nofollow norefer"
            >ICO</a
          ><br />
          <a
            href="https://www.nrla.org.uk/"
            target="_blank"
            rel="nofollow norefer"
            >NRLA</a
          ><br />
          <a
            href="https://www.tpos.co.uk/"
            target="_blank"
            rel="nofollow norefer"
            >Property Ombudsman</a
          >
        </div>
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
  z-index: -1;
}
</style>
