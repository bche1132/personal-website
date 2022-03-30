<template>
  <div class="page-container">
    <div class="max-w-screen-xl flex flex-col z-50 mx-auto w-full h-full py-8 md:py-24 px-4 md:px-0">
      <back-to-portfolio></back-to-portfolio>
      <div class="flex flex-col items-center text-center w-full mt-8">
        <span>
          <h1 class="text-5xl font-light text-gray-800 tracking-wide">COVID-19 Healthcare Coalition</h1>
          <h2 class="text-2xl font-thin text-gray-700 tracking-wide mt-4 max-w-screen-lg mx-auto">Formed during the early days of the pandemic, the COVID-19 Healthcare Coalition is a private-sector led response that brings together healthcare organizations, technology firms, nonprofits, academia, and startups to preserve the healthcare delivery system and help protect U.S. populations.</h2>
          <p class="text-lg text-gray-700 mt-4 font-light">MITRE Designer / Developer <span class="mx-4">|</span> <a href="https://c19hcc.org" class="text-blue-700">https://c19hcc.org</a></p>
        </span>
        <img src="~/assets/images/portfolio/work/c19hcc/c19hcc-laptop.png" alt="" class="w-3/4 mt-8">
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
