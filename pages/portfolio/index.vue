<template>
  <div class="page-container">
    <div class="max-w-screen-xl flex flex-col z-50 mx-auto w-3/4 md:w-full h-full py-8 md:py-24">
      <h1 class="text-5xl font-thin text-gray-800 tracking-wide z-50"><span class="bg-white px-4 py-2 shadow-xl">Portfolio</span></h1>
        <h2 class="text-3xl font-black text-gray-800 tracking-wide z-50 mt-20">Come back soon :)</h2>
        <h3 class="text-2xl font-light text-gray-800 tracking-wide z-50 mt-8">
          Working on some great content. Check back soon to see the latest.  
        </h3>
      <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-4 mt-8 z-50">
        
      <!-- <div class="w-full flex flex-row flex-wrap gap-4 mt-8 z-50"> -->
        <!-- <span v-for="(work, index) in works" :key="index">
          <nuxt-link :to="work.relative">
            <app-image-card :image="work"></app-image-card>
          </nuxt-link>
        </span> -->
      </div>
    </div>
  </div>
</template>
<script>
import AppImageCard from '../../components/AppImageCard.vue'
export default {
  components: { AppImageCard },
  data () {
    return {
      works: [
        {
          name: 'ACT@POC',
          description: 'Coalition for Advancing Clinical Trials at the Point of Care - Closing Evidence Gaps By Integrating Research and Care Delivery',
          image: require('~/assets/images/portfolio/work/actpoc/actpoc-home.png'),
          relative: '/portfolio/actpoc'
        },
        {
          name: 'Astute Canary Syndromic Community Tracker',
          description: '',
          link: '',
          active: true,
          public: true,
          role: 'Designer / Developer',
          image: require('~/assets/images/portfolio/work/sct/ac-sct.png'),
          relative: '/portfolio/astute-canary-sct'
        },
        {
          name: 'COVID-19 Healthcare Coalition',
          description: 'The COVID-19 Healthcare Coalition is a private-sector led response that brings together healthcare organizations, technology firms, nonprofits, academia, and startups to preserve the healthcare delivery system and help protect U.S. populations.',
          link: 'https://c19hcc.org/',
          active: true,
          public: true,
          role: 'Designer / Developer',
          image: require('~/assets/images/portfolio/work/c19hcc/c19hcc.png'),
          relative: '/portfolio/c19hcc'
        },
        {
          name: 'Decision Support Dashboard',
          description: '',
          link: '',
          active: true,
          public: true,
          role: 'Designer / Developer',
          image: require('~/assets/images/portfolio/work/dsd/dsd.png'),
          relative: '/portfolio/dsd'
        },
        {
          name: 'Logos',
          description: '',
          link: '',
          active: true,
          public: true,
          role: 'Designer',
          image: require('~/assets/images/logos.png'),
          relative: '/portfolio/logos'
        }
      ],
    }
  }
}
</script>

<style scoped>
.page-container {
  min-height: calc(100vh - 80px)
}
.page-container::after {
  content: '';
  background-image: url('~/assets/images/portfolio.svg');
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.1;
  top: -100px;
  left: 0;
  bottom: 0;
  right: 0;
  position: fixed;
  z-index: 0;
  max-width: 1700px;
}
</style>
