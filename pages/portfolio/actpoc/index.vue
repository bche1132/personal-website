<template>
  <div class="page-container">
    <div class="max-w-screen-xl flex flex-col z-50 mx-auto w-full h-full py-8 md:py-24 px-4 md:px-0">
      <back-to-portfolio></back-to-portfolio>
      <div class="flex flex-col items-center text-center w-full mt-8">
        <span>
          <h1 class="text-5xl font-light text-gray-800 tracking-wide">ACT@POC</h1>
          <h2 class="text-2xl font-thin text-gray-700 tracking-wide mt-4 max-w-screen-lg mx-auto">The Coalition for Advancing Clinical Trials at the Point of Care (ACT@POC) aims to close evidence gaps in Clinical Trials by integrating research and care delivery.</h2> 
        </span>
        <p class="text-lg bg-gray-200 py-2 text-gray-700 mt-4 flex flex-col md:flex-row justify-center w-full">MITRE Designer / Developer <span class="mx-4 text-gray-400 hidden md:block">|</span> <a href="https://actpoc.org" class="text-blue-700">https://actpoc.org</a></p>
        <img src="~/assets/images/portfolio/work/actpoc/actpoc-laptop.png" alt="" class="w-full">
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
      actpoc: {
        title: 'ACT@POC',
        subtitle: 'Coalition for Advancing Clinical Trials at the Point of Care',
        description: '',
        background: '',
        link: 'https://actpoc.org/',
        active: true,
        public: true,
        role: 'Designer / Developer',
        mainImage: ''
      }
    }
  }
}
</script>
