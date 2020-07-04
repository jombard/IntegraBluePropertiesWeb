<template>
  <div>
    <TheHeader />

    <TheSidebar />

    <Nuxt />

    <TheFooter />
  </div>
</template>

<script>
import TheFooter from '@/components/Footer'
import TheSidebar from '@/components/Sidebar'
import TheHeader from '@/components/Header'

export default {
  components: {
    TheFooter,
    TheSidebar,
    TheHeader,
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

.menu {
  color: #006298;
}

p,
a {
  font-family: 'Montserrat';
}

.main-bg {
  position: absolute;
  background: url('~assets/images/mews.jpg');
  background-position: 40% 0;
  width: 40%;
  height: 900px;
  z-index: -1;
  right: 0;
  opacity: 0.6;
}

header {
  background: white;
  display: flex;
  justify-content: space-between;
  padding: 1em;

  ul {
    display: none;
  }
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

.main-content {
  padding: 8em 4em 5em 3em;
  position: relative;
}

h1 {
  font-size: 2.75em;
  line-height: 1.2em;
  color: #006298;
}

.main-content p {
  font-size: 1.2em;
  line-height: 1.5em;
  padding-left: 20%;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    height: 2.5em;
    width: 20%;
    background: #f1ede2;
    margin-top: 0.3em;
  }
}

.section-one {
  width: 85%;
  background-color: #006298;
  display: flex;
  position: relative;
  margin-bottom: 3em;

  .menu-image {
    background-image: url('~assets/images/terraced.jpg');
  }

  .block {
    &.one {
      right: 2em;
    }
    &.two {
      right: 0;
      top: 2em;
    }
  }
}

.cta {
  color: #98c9e4;
  align-self: center;
  position: relative;
  margin: 3em auto;
  white-space: nowrap;

  &:before {
    content: '';
    position: absolute;
    width: 80%;
    height: 3em;
    left: -1em;
    top: -1em;
    border: 1px solid #98c9e4;
    transition: 1s;
  }

  &:hover:before,
  &:focus:before {
    left: -0.5em;
    width: 120%;
    height: 2.5em;
    top: -0.5em;
    background-color: #004368;
    opacity: 0.8;
  }
}

.block {
  position: absolute;
  background: #004368;
  width: 2em;
  height: 2em;
}

.menu-image {
  width: 8em;
  height: 8em;
  background-size: cover;
}

@media (min-width: 600px) {
  body {
    font-size: 18px;
  }
  .menu,
  .wrapper {
    display: none;
  }
  nav ul {
    display: flex;

    li a {
      font-size: 0.9em;
      padding: 0.3em 0.8em;
    }
  }
}

@media (min-width: 900px) {
  body {
    font-size: 20px;
  }

  .section-one {
    width: 75%;
  }

  .menu-image {
    width: 12em;
    height: 12em;
  }

  .main-content {
    padding: 8em 4em 5em 5em;

    p {
      width: 80%;
      padding-left: 15%;

      &:before {
        width: 18%;
      }
    }
  }
}

@media (min-width: 1200px) {
  body {
    font-size: 22px;
  }
}
</style>
