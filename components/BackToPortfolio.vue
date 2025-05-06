<template>
  <nuxt-link to="/" class="flex flex-row w-64 items-center bg-white rounded-full px-4 py-2 hover:bg-midcent-tan cal-sans-regular"><arrow-left-icon class="mr-2"></arrow-left-icon> Back to Selected Works</nuxt-link>
</template>
<script>
import { ArrowLeftIcon } from 'vue-feather-icons'
export default {
  components: {
    ArrowLeftIcon
  }
}
</script>