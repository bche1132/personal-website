<template>
  <nuxt-link to="/portfolio" class="flex flex-row items-center text-blue-700"><arrow-left-icon class="mr-2"></arrow-left-icon> Back to Portfolio</nuxt-link>
</template>
<script>
import { ArrowLeftIcon } from 'vue-feather-icons'
export default {
  components: {
    ArrowLeftIcon
  }
}
</script>