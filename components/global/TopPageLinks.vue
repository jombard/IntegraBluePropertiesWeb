<template>
  <div class="container mx-auto flex flex-row py-2">
    <a
      href="mailto:hello@integrablue.co.uk"
      class="mr-5 w-10 md:w-6 mb-5 md:mb-0"
    >
      <EmailIcon />
      <span class="sr-only">Email</span>
    </a>
    <a href="tel:01308 800 291" class="mr-5 w-10 md:w-6 mb-5 md:mb-0">
      <PhoneIcon />
      <span class="sr-only">Phone</span>
    </a>
    <a
      href="https://twitter.com/integrablueprop"
      target="_blank"
      class="mr-5 w-10 md:w-6 mb-5 md:mb-0"
      rel="nofollow norefer"
    >
      <TwitterIcon />
      <span class="sr-only">Twitter</span>
    </a>
    <a
      href="https://www.facebook.com/integrablueproperties/"
      target="_blank"
      class="mr-5 w-10 md:w-6 mb-5 md:mb-0"
      rel="nofollow norefer"
    >
      <FacebookIcon />
      <span class="sr-only">Facebook</span>
    </a>
    <a
      href="https://www.instagram.com/integrablueproperties/"
      target="_blank"
      class="mr-5 w-10 md:w-6 mb-5 md:mb-0"
      rel="nofollow norefer"
    >
      <InstagramIcon />
      <span class="sr-only">Instagram</span>
    </a>
  </div>
</template>

<script>
import EmailIcon from 'vue-material-design-icons/Email.vue'
import PhoneIcon from 'vue-material-design-icons/Phone.vue'
import TwitterIcon from 'vue-material-design-icons/Twitter.vue'
import FacebookIcon from 'vue-material-design-icons/Facebook.vue'
import InstagramIcon from 'vue-material-design-icons/Instagram.vue'

export default {
  name: 'TopPageLinks',
  components: {
    EmailIcon,
    PhoneIcon,
    TwitterIcon,
    FacebookIcon,
    InstagramIcon,
  },
}
</script>
