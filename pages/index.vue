<template>
  <div class="w-full h-full page-container flex flex-col">
    <div
      class="max-w-screen-xl px-8 xl:px-0 w-full mx-auto"
    >
      <div class="py-24">
        <span class="text-6xl font-bold flex flex-start">
          <h1 class="py-2 capitalize">Brianna Chen</h1>
        </span>
        <p
          class="text-2xl tracking-wide font-light py-2 flex flex-start"
        >
          I'm a designer and developer committed to making beautiful user experiences.
        </p>
        <div class="mt-8 flex flex-col sm:inline-flex sm:flex-row gap-8">
          <nuxt-link
                to="/about"
                class="rounded-full text-center text-xl items-center px-8 py-2 bg-midcent-orange text-white font-light cursor-pointer primary-btn cal-sans-regular"
              >
                <span>Learn more </span>
              </nuxt-link>
          <a
                href="/Brianna_Chen_UXE_Resume.pdf"
                class="rounded-full text-center text-xl items-center px-8 py-2 border border-midcent-orange text-midcent-orange font-light cursor-pointer primary-btn cal-sans-regular"
              >
                <span>View resume </span>
              </a>
        </div>
      </div>
    </div>
    <div class="bg-white flex w-full">
      <div
            class="max-w-screen-xl px-8 xl:px-0 w-full mx-auto flex flex-col h-full bg-white"
          >
          <h2 class="text-3xl font-light my-8">Selected works:</h2>
      </div>
    </div>
    <div class="bg-white flex w-full">
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
                class="rounded-full text-xl items-center px-8 py-2 primary-btn border border-midcent-orange text-midcent-orange font-light cursor-pointer mt-2 cal-sans-regular button"
              >
                <span>View work</span>
              </nuxt-link>
            </div>
            <img src="@/assets/images/portfolio/work/attack/attack-homepage.png" class="work-image" alt=""/>
          </div>
        </div>
    </div>
    <div class="flex w-full">
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
                class="rounded-full text-xl items-center px-8 py-2 primary-btn border border-midcent-orange text-midcent-orange font-light cursor-pointer mt-2 cal-sans-regular"
              >
                <span>View work</span>
              </nuxt-link>
            </div>
          </div>
        </div>
    </div>
    <div class="bg-white border-b flex w-full">
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
                class="rounded-full text-xl items-center px-8 py-2 primary-btn border border-midcent-orange text-midcent-orange font-light cursor-pointer mt-2 cal-sans-regular"
              >
                <span>View work</span>
              </nuxt-link>
            </div>
            <img src="@/assets/images/portfolio/work/c19hcc/c19hcc-browser.png" class="work-image" alt=""/>
          </div>
        </div>
    </div>
    <div
      class="max-w-screen-xl px-8 xl:px-0 mx-auto flex flex-col"
    >
      <div class="border border-midcent-dark-green rounded font-light text-xl mt-8 p-12 cal-sans-regular">Note: Due to the nature of my current organization, most of my work can not be shared externally. Including much of my dashboard, game, and other web application work.</div>
    </div>
    <lets-connect />
  </div>
</template>

<script>
import AppImageCard from '@/components/AppImageCard.vue'
import LetsConnect from '@/components/LetsConnect.vue'
export default {
  layout: "home",
  components: { AppImageCard, LetsConnect },
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

<style lang="css">
.hero {
  animation: myAnim 2s ease 0s 1 normal forwards;
}

@keyframes myAnim {
	0% {
		animation-timing-function: ease-in;
		opacity: 0;
		transform: translateY(-250px);
	}

	38% {
		animation-timing-function: ease-out;
		opacity: 1;
		transform: translateY(0);
	}

	55% {
		animation-timing-function: ease-in;
		transform: translateY(-65px);
	}

	72% {
		animation-timing-function: ease-out;
		transform: translateY(0);
	}

	81% {
		animation-timing-function: ease-in;
		transform: translateY(-28px);
	}

	90% {
		animation-timing-function: ease-out;
		transform: translateY(0);
	}

	95% {
		animation-timing-function: ease-in;
		transform: translateY(-8px);
	}

	100% {
		animation-timing-function: ease-out;
		transform: translateY(0);
	}
}
</style>
