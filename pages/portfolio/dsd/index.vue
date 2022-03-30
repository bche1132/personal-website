<template>
  <div class="page-container">
    <div class="max-w-screen-xl flex flex-col z-50 mx-auto w-full h-full py-8 md:py-24 px-4 md:px-0">
      <back-to-portfolio></back-to-portfolio>
      <div class="flex flex-col items-center text-center w-full mt-8">
        <span>
          <h1 class="text-5xl font-light text-gray-800 tracking-wide">COVID-19 Decision Support Dashboard</h1>
          <h2 class="text-2xl font-thin text-gray-700 tracking-wide mt-4 max-w-screen-lg mx-auto">This dashboard is intended to help governors, mayors, business owners, and other community-based decision makers answer their COVID-19 questions. These questions are inspired by the National Governors Association’s Roadmap to Recovery Report  and will be a growing list as more data is assembled. Use the map to find information about COVID-19 cases for your area of interest. You can also add multiple locations to the dashboard to be able to easily compare COVID-19 information for those areas.</h2>
        </span>
        <p class="text-lg bg-gray-200 py-2 text-gray-700 mt-4 flex flex-col md:flex-row justify-center w-full">MITRE Designer / Developer <span class="mx-4 text-gray-400 hidden md:block">|</span> <a href="https://dsd.c19hcc.org/" class="text-blue-700">https://dsd.c19hcc.org/</a></p>
        <img src="~/assets/images/portfolio/work/dsd/dsd-devices.png" alt="" class=" w-full">
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
