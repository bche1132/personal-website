<template>
  <div class="page-container">
    <div class="max-w-screen-xl flex flex-col z-50 mx-auto w-full h-full py-8 md:py-24 px-4 md:px-0">
      <back-to-portfolio></back-to-portfolio>
      <div class="flex flex-col items-center justify-center text-center w-full mt-8">
        <span>
          <h1 class="text-5xl font-light text-gray-800 tracking-wide">Astute Canary - Syndromic Community Tracker</h1>
          <h2 class="text-2xl font-thin text-gray-700 tracking-wide mt-4 max-w-screen-lg mx-auto">This is a prototype built in 2021. It provides the front-end framework for a COVID-19 Community Tracker Web application, focusing on tracking users symptoms, vaccination and testing history. While this was built with the COVID-19 pandemic in mind, it could easily be adapted for other health crisis or general use. At this time, this source code is front-end only, and will require building out of any kind of backend, database and authentication needed for your use case.</h2>
        </span>
        <p class="text-lg bg-gray-200 py-2 text-gray-700 mt-4 flex flex-col md:flex-row justify-center w-full">MITRE Designer / Developer <span class="mx-4 text-gray-400 hidden md:block">|</span> <a href="https://github.com/mitre/astute-canary-sct" class="text-blue-700">https://github.com/mitre/astute-canary-sct</a> <span class="mx-4 text-gray-400 hidden md:block">|</span> <a href="https://mitre.github.io/astute-canary-SCT/" class="text-blue-700">https://mitre.github.io/astute-canary-SCT/</a></p>
        <img src="~/assets/images/portfolio/work/sct/sct-devices.png" alt="" class="w-full">
      </div>
    </div>
  </div>
</template>
<script>
import BackToPortfolio from '../../../components/BackToPortfolio.vue'
import WorkTemplateComponent from '../../../components/WorkTemplateComponent.vue'
export default {
  components: { WorkTemplateComponent, BackToPortfolio },
  data () {
    return {
    }
  }
}
</script>
