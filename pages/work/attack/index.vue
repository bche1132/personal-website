<template>
  <div class="page-container">
    <div class="bg-pink-400">
        <div class="max-w-screen-xl flex flex-col z-50 mx-auto w-full h-full py-8 md:py-24 px-4 md:px-0">
            <back-to-portfolio></back-to-portfolio>
            <div class="flex flex-col  w-full mt-8">
                <span>
                <h1 class="text-5xl font-extrabold  tracking-wide">MITRE ATT&CK</h1>
                <h2 class="text-xl font-thin text-gray-900 tracking-wide mt-4 max-w-screen-lg"> MITRE ATT&CK® is a globally-accessible knowledge base of adversary tactics and techniques based on real-world observations. One of my first efforts when I joined MITRE in 2017 was designing a new website, migrating from their Wiki based format.</h2>
                </span>
                <div class="text-left mt-8">
                    <ul>
                        <li><b>Role: </b> UX Designer & Researcher</li>
                        <li><b>Domain: </b> Cybersecurity</li>
                        <li><b>Duration: </b> Fall 2017</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="max-w-screen-xl flex flex-col z-50 mx-auto w-full h-full py-8 px-4 md:px-0">
        <div class="flex flex-col-reverse md:flex-row justify-between gap-4 mt-12 md:items-center">
            <div class="md:w-1/2 bg-gray-200 p-4">
                <h3 class="text-3xl font-light text-gray-800 tracking-wide">Introduction</h3>
                <p class="my-8 text-left text-gray-800 text-lg max-w-screen-md leading-8 font-thin">
                    MITRE ATT&CK is a universally accessible, continuously updated knowledge base for modeling, detecting, preventing and fighting cybersecurity threats.
                    Back when I first began my career at MITRE, they were looking to move from their previous Wiki based site to a more flexible web application. Users were eager to have a more adaptable search and easier to traverse interface.
                </p>
            </div>
            <img src="@/assets/images/portfolio/work/attack/ATT&CK_red.png" class="hidden md:flex sample-img" alt=""/>
        </div>
        
        <div class="flex flex-col-reverse md:flex-row justify-between gap-4 mt-12 md:items-center">
            <img src="@/assets/images/portfolio/work/attack/page-mapping.png" class="sample-img" alt=""/>
            <div class="md:w-1/2 bg-gray-200 p-4">
                <h3 class="text-3xl font-light text-gray-800 tracking-wide">Challenges</h3>
                <p class="mt-8 mb-4 text-left text-gray-800 text-lg max-w-screen-md leading-8 font-thin">
                    As with any new design opportunity, there are challenges. This was no exception.
                </p>
                <ul class="list-disc ml-4 text-gray-800 text-lg leading-8 font-thin">
                    <li>Quick turn-around time requested</li>
                    <li>Informationally dense - the site essentially acts as an encyclopedia of knowledge for cybersecurity attacks</li>
                    <li>Outside-organization user testing unavailable</li>
                </ul>
            </div>
        </div>
        <div class="flex flex-col-reverse md:flex-row justify-between gap-4 mt-12 md:items-center">
            <div class="md:w-1/2 bg-gray-200 p-4">
                <h3 class="text-3xl font-light text-gray-800 tracking-wide">Approach</h3>
                <p class="mt-8 mb-4 text-left text-gray-800 text-lg max-w-screen-sm leading-8 font-thin">
                With a quick turn-around time requested to release the site, we decided to utilize a lean UX approach: 
                </p>
                <ul class="list-disc ml-4 text-gray-800 text-lg leading-8 font-thin">
                    <li>Personas</li>
                    <li>Landscape analysis of Wiki site</li>
                    <li>Proxy user interviews with MITRE subject matter experts</li>
                    <li>Iterative wireframe design using Balsamiq</li>
                    <li>MVP High Fidelity prototype using Bootstrap UI framework <em>(the rage at the time)</em></li>
                    <li>Guerilla user testing of prototype (within organization)</li>
                </ul>
            </div>
            <img src="@/assets/images/portfolio/work/attack/attack-wireframe.png" class="sample-img" alt=""/>
        </div>
        <div class="flex flex-col-reverse md:flex-row justify-between gap-4 mt-12 md:items-center">
            <img src="@/assets/images/portfolio/work/attack/sample-search.png" class="sample-img" alt=""/>
            <div class="md:w-1/2 bg-gray-200 p-4">
                <h3 class="text-3xl font-light text-gray-800 tracking-wide">Outcome</h3>
                <p class="mt-8 mb-4 text-left text-gray-800 text-lg max-w-screen-sm leading-8 font-thin">
                    Initial informational layout tested well with users, finding the new navigation structure easy to traverse and preferable to the Wiki format.
                    Issues included finding the search design inadequate for advanced searches, leading to further design cycles focused on search.
                </p>
                <p class="mt-8 mb-4 text-left text-gray-800 text-lg max-w-screen-sm leading-8 font-thin">
                    MITRE ATT&CK launched the redesigned website in 2017. It's evolved since original designs but the core design patterns are still in place:
                    <a class="text-blue-800 underline" href="https://attack.mitre.org/">https://attack.mitre.org/</a>.
                    ATT&CK has users from 226 different countries and is industry standard for identifying and documenting Cybersecurity threats.
                </p>
            </div>
        </div>
        <div class="flex flex-col-reverse md:flex-row justify-between gap-4 mt-12 md:items-center">
            <div class="md:w-1/2 bg-gray-200 p-4">
                <h3 class="text-3xl font-light text-gray-800 tracking-wide">What I Learned</h3>
                <p class="my-8 text-left text-gray-800 text-lg max-w-screen-md leading-8 font-thin">
                    This project was pivotal in my journey with design. It highlighted the significance of iterative user feedback, ensuring user involvement from the outset, and demonstrated that user-centered design principles can be universally applied, regardless of one's familiarity with the domain.
                </p>
            </div>
            <img src="@/assets/images/portfolio/work/attack/homepage.png" class="sample-img" alt=""/>
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
<style scoped>
.sample-img {
  width: 100%;
  min-width: 300px;
  max-width: 500px;
}
</style>