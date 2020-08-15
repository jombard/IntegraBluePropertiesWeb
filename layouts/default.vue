<template>
  <div>
    <TheHeader />

    <TheSidebar />

    <div class="bg-white" style="margin-bottom: 300px;">
      <Nuxt />
    </div>

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

p {
  margin-bottom: 1em;
}

.main-bg {
  position: absolute;
  background: url('~assets/images/mews.jpg');
  background-position: 40% 0;
  width: 40%;
  height: 800px;
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

.main-headline {
  padding: 8em 4em 5em 3em;
  position: relative;

  .sub-header {
    margin-left: 20%;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      left: -100%;
      right: 100%;
      height: 100%;
      background: #f1ede2;
      margin-right: 3rem;
    }

    p {
      font-size: 1.2em;
      line-height: 1.5em;
    }
  }
}

h1 {
  font-size: 2.75em;
  line-height: 1.2em;
  color: #006298;
}

.section-one {
  width: 85%;
  background-color: #006298;
  display: flex;
  position: relative;
  margin-left: 2em;

  .menu-image {
    background-image: url('~assets/images/terraced.jpg');
  }

  .block {
    position: absolute;
    background: #004368;
    width: 2em;
    height: 2em;

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
  white-space: nowrap;
  z-index: 10;
  border: 1px solid #98c9e4;
  transition: 1s;
  padding: 1rem;
  display: inline-block;

  &:hover,
  &:focus {
    background-color: #004368;
    opacity: 0.8;
  }

  &.primary {
    background-color: #004368;
  }
}

.menu-image {
  margin-top: -2em;
  margin-left: -2em;
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

  .main-headline {
    padding: 8em 4em 5em 5em;

    .sub-header {
      width: 40%;
      margin-left: 15%;
    }
  }
}

@media (min-width: 1200px) {
  body {
    font-size: 22px;
  }

  .menu-image {
    width: 15em;
    height: 15em;
  }
}
</style>
