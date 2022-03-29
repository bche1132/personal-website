<template>
  <nuxt-link :to="image.relative" class="rounded shadow-lg bg-image-cover w-full h-full block" :style="'background-image: url(' + image.image + ')'">
  </nuxt-link>
</template>
<script>
export default {
  props: {
    image: {
      type: Object
    }
  }
}
</script>