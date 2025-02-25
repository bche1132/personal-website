<template>
  <nav class="flex z-50">
    <div class="w-full  p-4 z-50">
      <div class="max-w-screen-xl mx-auto z-50 ">
        <div class="relative flex items-center justify-between">
          <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <button type="button" @click="menuOpen = !menuOpen" class="inline-flex items-center justify-center p-2 rounded-md  hover:text-black hover:bg-pink-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="h-6 w-6" :class="{'block': !menuOpen, 'hidden': menuOpen}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg class="h-6 w-6" :class="{'block': menuOpen, 'hidden': !menuOpen}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="flex-1 flex items-center justify-start sm:items-stretch sm:justify-start">
            <div class="flex-shrink-0 flex items-center">
                <nuxt-link to="/" class="transition duration-500 ease-in-out bg-white h-12 w-12 rounded-full text-black font-bold text-2xl tracking-wide flex items-center justify-center transform focus:scale-110 hover:scale-110 hover:bg-orange-300 focus:bg-orange-300" aria-label="To Brianna Chen Site Home">BC</nuxt-link>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div class="hidden sm:block sm:ml-6">
              <div>
                <ul class="flex flex-row items-center text-lg tracking-wide font-thin">
                  <li><nuxt-link class="mr-8 border-b-2 pb-2 border-black hover:text-custom-mint focus:text-custom-mint" :class="{ 'text-custom-mint font-bold border-white': currentPage.includes('/about') }" to="/about">about</nuxt-link></li>
                  <!-- <li><nuxt-link class="mr-8 border-b-2 pb-2 border-black hover:text-pink-600 focus:text-pink-600" :class="{ 'text-pink-600 font-bold border-white': currentPage.includes('/portfolio') }" to="/portfolio">portfolio</nuxt-link></li> -->
                  <!-- <li><nuxt-link class="border-b-2 pb-2 border-black hover:text-indigo-400 focus:text-indigo-400" :class="{ 'text-indigo-400 font-bold border-white': currentPage.includes('/musings') }" to="/musings">musings</nuxt-link></li> -->
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Mobile menu, show/hide based on menu state. -->
      <div class="block z-50 sm:hidden" id="mobile-menu" v-if="menuOpen">
        <div class="pt-8 text-center pb-3 space-y-1 ">
          <nuxt-link to="/about" class="text-black  hover:bg-custom-mint hover:text-white block px-3 py-2 rounded-md text-base font-bold" :class="{ 'bg-custom-mint font-bold pb-2 ': currentPage.includes('/about') }">about</nuxt-link>

          <!-- <nuxt-link to="/portfolio" class="text-black hover:bg-pink-600 hover:text-white block px-3 py-2 rounded-md text-base font-bold" :class="{ 'bg-pink-200 font-bold pb-2 text-blue-900': currentPage.includes('/portfolio') }">portfolio</nuxt-link> -->

          <!-- <nuxt-link to="/musings" class="text-gray-300 hover:bg-indigo-400 hover:text-white block px-3 py-2 rounded-md text-base font-bold" :class="{ 'bg-indigo-400 font-bold pb-2 text-white': currentPage.includes('/musings') }">musings</nuxt-link>         -->
        </div>
      </div>
    </div>

    
  </nav>
</template>
<script>
import { FileTextIcon, MailIcon } from 'vue-feather-icons'

export default {
  components: {
    FileTextIcon,
    MailIcon
  },
  data() {
    return {
      menuOpen: false
    }
  },
  computed: {
    currentPage () {
      return this.$route.path
    }
  }
}
</script>
<style scoped>

</style>
