<template>
  <div>
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
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
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
  font-weight: normal;
}

.logo {
  font-size: 1.2em;
  strong {
    color: #006298;
  }
}

p {
  margin-bottom: 1em;
}

.page-wrapper {
  margin-top: 68px;
  margin-bottom: 400px;
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

a.link-underline {
  position: relative;

  &:before {
    content: '';
    background-color: #006298;
    height: 5px;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: all 0.5s;
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
    margin-bottom: 300px;
  }
}

@media (min-width: 1200px) {
  body {
    font-size: 22px;
  }
}

.nuxt-content h3 {
  @apply text-3xl;
  @apply leading-tight;
}

@screen md {
  .nuxt-content h3 {
    @apply text-5xl;
  }
}

.nuxt-content ul {
  margin-bottom: 1em;
  list-style-type: none;

  li:before {
    content: '\25A0';
    color: #006298;
    margin-right: 10px;
  }
}

.page-enter-active {
  transition: filter 250ms cubic-bezier(0.47, 0, 0.745, 0.715);
  ~ .footer {
    transition: filter 250ms cubic-bezier(0.47, 0, 0.745, 0.715);
  }
}
.page-leave-active {
  transition: filter 250ms cubic-bezier(0.39, 0.575, 0.565, 1);
  ~ .footer {
    transition: filter 250ms cubic-bezier(0.39, 0.575, 0.565, 1);
  }
}
.page-enter,
.page-leave-active {
  filter: grayscale(1) opacity(0);
  ~ .footer {
    filter: grayscale(1) opacity(0);
  }
}
</style>
