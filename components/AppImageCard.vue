<template>
  <div class="card-zoom">
    <div 
      class="card-zoom-image"
      :style="'background-image: url(' + image.image + ')'">
    </div>
    <h3 class="card-zoom-text">
      {{ image.name }}
    </h3>
  </div>
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
<style scoped>
.card-zoom {
  @apply relative flex items-center justify-center overflow-hidden shadow-xl w-full rounded-2xl;
  height: 400px
}
.card-zoom-image {
  @apply absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover;
}
.card-zoom-text {
  @apply absolute text-5xl font-black transition-all duration-500 ease-in-out transform scale-150 text-gray-100 opacity-0 px-4;
}
.card-zoom:hover .card-zoom-image {
  @apply scale-150 opacity-25;
}
.card-zoom:hover .card-zoom-text {
  @apply scale-100 bg-black opacity-100;
}
</style>