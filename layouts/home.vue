<template>
    <div class="hero min-h-screen">
      <app-navbar />
      <Nuxt />
    </div>
</template>
<script>
import AppNavbar from '@/components/AppNavbar.vue'
 export default {
   components: {
     AppNavbar
   }
 }
</script>
<style>
.hero::after {
  content: '';
  /* background-image: url('../assets/images/home-image.svg');
  background-size: cover;
  background-position: center;
  background-repeat: repeat; */
  opacity: 0.3;
  top: -80px;
  left: 0;
  bottom: 0;
  right: 0;
  position: fixed;
  z-index: 0;
  width: 100vw;
}
</style>
