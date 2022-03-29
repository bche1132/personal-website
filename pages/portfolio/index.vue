<template>
  <div class="page-container">
    <div class="max-w-screen-xl flex flex-col z-50 mx-auto w-full h-full py-24">
      <h1 class="text-5xl font-thin text-gray-600 lowercase tracking-wide z-50"><span class="bg-white px-4 py-2 shadow-xl">Bri's Portfolio</span></h1>
      <div class="w-full grid grid-cols-2 gap-4">
        <span v-for="(work, index) in works" :key="index">
          <app-image-card :image="work"></app-image-card>
        </span>
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
          link: 'https://actpoc.org/',
          active: true,
          public: true,
          role: 'Designer / Developer',
          image: '~/assets/images/portfolio/work/actpoc/actpoc-home.png',
          relative: '/actpoc'
        }
        // {
        //   name: 'Astute Canary Syndromic Community Tracker',
        //   description: '',
        //   link: '',
        //   active: true,
        //   public: true,
        //   role: 'Designer / Developer',
        //   image: '',
        //   relative: 'astute-canary-sct'
        // },
        // {
        //   name: 'COVID-19 Healthcare Coalition',
        //   description: '',
        //   link: '',
        //   active: true,
        //   public: true,
        //   role: 'Designer / Developer',
        //   image: '',
        //   relative: 'c19hcc'
        // },
        // {
        //   name: 'Decision Support Dashboard',
        //   description: '',
        //   link: '',
        //   active: true,
        //   public: true,
        //   role: 'Designer / Developer',
        //   image: '',
        //   relative: 'dsd'
        // },
        // {
        //   name: 'Vaccination Credential Initiative',
        //   description: '',
        //   link: '',
        //   active: true,
        //   public: true,
        //   role: 'Designer / Developer',
        //   image: '',
        //   relative: 'vci'
        // }
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
