<template>
  <div class="container mx-auto p-0 md:px-4 md:py-10 relative">
    <div class="bg-white px-4 py-10">
      <h2 class="text-2xl mb-5">Register your interest</h2>

      <div class="flex w-full flex-col md:flex-row mx-auto">
        <div class="mb-4 md:mr-10 md:w-1/4">
          <label for="txtFullName">Full Name</label>
          <input
            id="txtFullName"
            class="px-4 py-2 w-full focus:outline-none focus:shadow-outline"
            type="text"
          />
        </div>
        <div class="mb-4 md:mr-10 md:w-1/4">
          <label for="txtEmail">Email</label>
          <input
            id="txtEmail"
            class="px-4 py-2 w-full focus:outline-none focus:shadow-outline"
            type="email"
          />
        </div>
        <div class="mb-4 md:mr-10 md:w-1/4">
          <label for="txtPhone">Phone</label>
          <input
            id="txtPhone"
            class="px-4 py-2 w-full focus:outline-none focus:shadow-outline"
            type="phone"
          />
        </div>
        <button class="btn btn-blue w-full md:w-1/4">Register</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
