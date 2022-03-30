<template>
  <div class="page-container">
    <div class="max-w-screen-xl flex flex-col z-50 mx-auto w-full h-full py-24 px-4 md:px-0">
      <back-to-portfolio></back-to-portfolio>
      <h1 class="text-5xl font-light text-gray-800 tracking-wide my-8">Sample Logos</h1>
      <img src="~/assets/images/logos.png" alt="" class="w-full block shadow-xl rounded">
    </div>
  </div>
</template>
<script>
import BackToPortfolio from '../../../components/BackToPortfolio.vue'
export default {
  components: { BackToPortfolio },
  data() {
    return {
      images: [
        require('~/assets/images/portfolio/logos/AC-banner.png'),
        require('~/assets/images/portfolio/logos/AC-sticker.svg'),
        require('~/assets/images/portfolio/logos/gotcha-logo-main.png'),
      ],
      index: null,
      logos: [
        // {
        //   name: 'Cynopsys',
        //   image: '',
        //   description: '',
        //   sponsor: 'MITRE',
        //   approvedRelease: true,
        // },
        {
          name: 'Astute Canary',
          image: '',
          description: '',
          sponsor: 'MITRE',
          approvedRelease: true,
        },
        // {
        //   name: 'CySup',
        //   image: '',
        //   description: '',
        //   sponsor: 'MITRE',
        //   approvedRelease: true,
        // },
        {
          name: 'ACT@POC',
          image: '',
          description: '',
          sponsor: 'MITRE',
          approvedRelease: true,
        },
        // {
        //   name: 'TDWG',
        //   image: '',
        //   description: '',
        //   sponsor: 'MITRE',
        //   approvedRelease: true,
        // },
        {
          name: 'Gotcha',
          image: '',
          description: '',
          sponsor: 'Independent',
          approvedRelease: true,
        },
        // {
        //   name: 'Repose',
        //   image: '',
        //   description: '',
        //   sponsor: 'Independent',
        //   approvedRelease: true,
        // },
      ]
    }
  }
}
</script>
<style scoped>
  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
  }
</style> 