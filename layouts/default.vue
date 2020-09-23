<template>
  <div>
    <div class="bg-gray-800 text-white">
      <div class="container mx-auto flex flex-row-reverse px-4">
        <a href="mailto:hello@integrablue.co.uk" class="w-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span class="sr-only">Email</span>
        </a>
        <a href="tel:01308 800 291" class="mr-5 w-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span class="sr-only">Phone</span>
        </a>
        <a
          href="https://www.instagram.com/integrablueproperties/"
          target="_blank"
          class="mr-5"
          rel="nofollow norefer"
          >Instagram</a
        ><br />
        <a
          href="https://www.facebook.com/integrablueproperties/"
          target="_blank"
          class="mr-5"
          rel="nofollow norefer"
          >Facebook</a
        ><br />
        <a
          href="https://twitter.com/integrablueprop"
          target="_blank"
          class="mr-5"
          rel="nofollow norefer"
          >Twitter</a
        >
      </div>
    </div>

    <AppHeader />

    <AppSidebar />

    <div class="page-wrapper">
      <Nuxt />
    </div>

    <AppFooter />
  </div>
</template>

<script>
export default {
  watch: {
    $route() {
      this.$store.dispatch('menu/close')
    },
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat');

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

html {
  // font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
  //   Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

h1,
.logo {
  font-family: 'Montserrat';
  font-weight: normal;
}

.logo {
  font-size: 1.2em;
  strong {
    color: #006298;
  }
}

p,
a {
  font-family: 'Montserrat';
}

p {
  margin-bottom: 1em;
}

.page-wrapper {
  margin-bottom: 450px;
  background-color: white;
}

.main-bg {
  position: absolute;
  background: url('~assets/images/mews.jpg');
  background-position: 40% 0;
  width: 40%;
  height: 800px;
  right: 0;
  opacity: 0.6;
}

@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

.slide-in-from-left {
  animation: 1s ease-out 0s 1 slideInFromLeft;
}

.slide-in-from-right {
  animation: 1s ease-out 0s 1 slideInFromRight;
}

a.text-blue {
  position: relative;

  &:before {
    content: '';
    background-color: #006298;
    height: 5px;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: all 1s;
    right: 100%;
  }

  &:hover:before {
    right: 0;
  }
}

.btn {
  align-self: center;
  position: relative;
  white-space: nowrap;
  z-index: 10;
  border: 1px solid #98c9e4;
  transition: 1s;
  padding: 1rem 2rem;
  display: inline-block;
}

.btn-blue {
  color: #ffffff;
  background-color: #006298;
  &:hover,
  &:focus {
    background-color: #004368;
  }
}

.btn-white {
  color: #006298;
  &:hover,
  &:focus {
    color: #ffffff;
    background-color: #006298;
  }
}

@media (min-width: 600px) {
  body {
    font-size: 18px;
  }
}

@media (min-width: 900px) {
  body {
    font-size: 20px;
  }

  .page-wrapper {
    margin-bottom: 250px;
  }
}

@media (min-width: 1200px) {
  body {
    font-size: 22px;
  }
}

.nuxt-content h3 {
  @apply text-3xl;
}

.nuxt-content ul {
  margin-bottom: 1em;
  font-family: Montserrat;
  list-style-type: none;

  li:before {
    content: '\25A0';
    color: #006298;
    margin-right: 10px;
  }
}
</style>
