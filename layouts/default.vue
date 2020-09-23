<template>
  <div>
    <TopPageLinks />

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

.bg-cover-img {
  background-attachment: fixed;
  background-size: cover;
  background-position-x: initial, center;
  background-position-y: initial, center;
  background-repeat: initial, no-repeat;
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
