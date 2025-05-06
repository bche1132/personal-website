<template>
  <div class="w-full h-full page-container flex flex-col">
    <div
      class="max-w-screen-xl px-8 xl:px-0 w-full mx-auto"
    >
      <div class="py-24">
        <span class="text-6xl font-bold tracking-wider flex flex-start">
          <h1 class="bg-white py-2 capitalize">Brianna Chen | UX Engineer</h1>
        </span>
        <p
          class="text-3xl tracking-wide font-light text-gray-800 mt-4 bg-white py-2 flex flex-start"
        >
          I'm a designer and developer committed to making beautiful user experiences.
        </p>
        <div class="mt-8">
          <nuxt-link
                to="/about"
                class="rounded-full inline-flex text-xl items-center px-8 py-2 bg-custom-orange font-light cursor-pointer primary-btn"
              >
                <span>Learn more </span>
              </nuxt-link>
        </div>
      </div>
    </div>
    <div
          class="max-w-screen-xl px-8 xl:px-0 w-full mx-auto flex flex-col h-full"
        >
        <h2 class="text-4xl font-light text-gray-800 mb-8">Selected Works:</h2>
    </div>
    <div class="bg-pink-400 flex w-full">
      <div
          class="max-w-screen-xl mx-auto flex flex-col h-full"
        >
          <div class="flex py-8 px-8 xl:px-0 justify-between items-center gap-8 flex-col md:flex-row">
            <div>
              <h2 class="text-5xl font-extrabold">MITRE ATT&CK</h2>
              <p class="font-light mb-8">
                MITRE ATT&CK® is a globally-accessible knowledge base of adversary tactics and techniques based on real-world observations. One of my first efforts when I joined MITRE in 2017 was designing a new website, migrating from their Wiki based format.
              </p>
              <nuxt-link
                to="/work/attack"
                class="rounded-full text-xl items-center px-8 py-2 primary-btn  bg-custom-indigo text-white font-light cursor-pointer mt-2"
              >
                View work
              </nuxt-link>
            </div>
            <img src="@/assets/images/portfolio/work/attack/attack-homepage.png" class="work-image" alt=""/>
          </div>
        </div>
    </div>
    <div class="bg-custom-gray-200 flex w-full">
      <div
          class="max-w-screen-xl mx-auto flex flex-col h-full"
        >
          <div class="flex py-8  px-8 xl:px-0  justify-between w-full items-center gap-8  flex-col-reverse md:flex-row">
            <img src="@/assets/images/portfolio/work/sct/sct-mb.png" class="work-image" alt=""/>
            <div>
              <h2 class="text-5xl  font-extrabold">Astute Canary</h2>
              <p class="font-light mb-8">
                Astute Canary aimed to offer turnkey access to a world-class,
                interdisciplinary, team of global health security experts and an
                ever-growing curated source of health security threat data,
                research, and insights. I worked with these health experts to create a risk dashboard, branding materials, and an open-source syndromic community tracker.
              </p>
              <nuxt-link
                to="/work/astute-canary"
                class="rounded-full text-xl items-center px-8 py-2 primary-btn  bg-custom-indigo text-white font-light cursor-pointer mt-2"
              >
                View work
              </nuxt-link>
            </div>
          </div>
        </div>
    </div>
    <div class="bg-custom-orange flex w-full">
      <div
          class="max-w-screen-xl mx-auto flex flex-col h-full"
        >
          <div class="flex py-8 px-8 xl:px-0 justify-between items-center gap-8 flex-col md:flex-row">
            <div>
              <h2 class="text-5xl font-extrabold">Healthcare Coalition Work</h2>
              <p class="font-light mb-8">
                After the COVID-19 pandemic, MITRE emerged as a key facilitator in various healthcare coalitions. Leveraging its unique status as a not-for-profit organization, it provided impartial leadership among private and public entities. This resulted in numerous rapid design and development initiatives to showcase the coalitions' work. I spearheaded the design and development of several of these initiatives.
              </p>
              <nuxt-link
                to="/work/coalition"
                class="rounded-full text-xl items-center px-8 py-2 primary-btn  bg-custom-indigo text-white font-light cursor-pointer mt-2"
              >
                View work
              </nuxt-link>
            </div>
            <img src="@/assets/images/portfolio/work/c19hcc/c19hcc-browser.png" class="work-image" alt=""/>
          </div>
        </div>
    </div>
    <div
      class="max-w-screen-xl px-8 xl:px-0 mx-auto flex flex-col h-full"
    >
      <div class="bg-gray-200 rounded font-light text-xl italic mt-8 p-12 mb-8">Note: Due to the nature of my current organization, most of my work can not be shared externally. Including much of my dashboard, game, and other web application work.</div>
    </div>
    <div
        class="flex flex-col py-24 align-center justify-center w-full bg-custom-mint"
      > 
          <h4 class="font-medium text-4xl text-white mx-auto mb-12">Let's connect</h4>
          <div class="flex flex-col gap-4 align-center mx-auto">
              <a
                href="/Brianna_Chen_UXE_Resume.pdf"
                target="_blank"
                class="z-50 rounded-full flex text-xl items-center px-8 py-2 button font-light cursor-pointer primary-btn"
              >
                <file-text-icon class="mr-2" size="24"></file-text-icon>
                View Resume
              </a>
              <a
                href="mailto:bche1132@gmail.com?subject=Response from website"
                target="_blank"
                class="z-50 rounded-full flex text-xl items-center px-8 py-2 button font-light cursor-pointer primary-btn"
              >
                <mail-icon class="mr-2" size="24"></mail-icon>
                Contact Bri
              </a>
          </div>
    </div>
  </div>
</template>

<script>
import AppImageCard from '@/components/AppImageCard.vue'
export default {
  layout: "home",
  components: { AppImageCard },
  data() {
    return {
      i: 0,
      speed: 50,
      message: "I'm a designer and developer committed to making beautiful user experiences.",
      works: [
        {
          name: 'MITRE ATT&CK',
          description: '',
          image: require('~/assets/images/portfolio/work/actpoc/actpoc-home.png'),
          relative: '/portfolio/actpoc'
        },
        {
          name: 'Astute Canary',
          description: '',
          link: '',
          active: true,
          public: true,
          role: 'Designer / Developer',
          image: require('~/assets/images/portfolio/work/sct/ac-sct.png'),
          relative: '/portfolio/astute-canary-sct'
        },
        {
          name: 'Healthcare Coalition Work',
          description: '',
          link: '',
          active: true,
          public: true,
          role: 'Designer / Developer',
          image: require('~/assets/images/portfolio/work/c19hcc/c19hcc.png'),
          relative: '/portfolio/c19hcc'
        },
        // {
        //   name: 'Logos',
        //   description: '',
        //   link: '',
        //   active: true,
        //   public: true,
        //   role: 'Designer',
        //   image: require('~/assets/images/logos.png'),
        //   relative: '/portfolio/logos'
        // }
      ],
    }
  },
  methods: {
  },
  mounted() {
  }
};
</script>

<style>
.page-container {
  min-height: calc(100vh - 80px);
}
.primary-btn {
  transition: all 0.5s;
}
.primary-btn span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.primary-btn span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.primary-btn:hover span {
  padding-right: 25px;
}

.primary-btn:hover span:after {
  opacity: 1;
  right: 0;
}
.primary-btn:hover, .primary-btn:focus {
  scale: 1.2;
}
.work-image {
  width: 100%;
  min-width: 300px;
  min-height: 300px;
  max-width: 500px;
}
.button {
  background: #FFBF00;
}
</style>
