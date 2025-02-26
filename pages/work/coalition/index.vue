<template>
  <div class="page-container">
    <div class="bg-custom-orange">
        <div class="max-w-screen-xl flex flex-col z-50 mx-auto w-full h-full py-8 md:py-24 px-4 md:px-0">
            <back-to-portfolio></back-to-portfolio>
            <div class="flex flex-col  w-full mt-8">
                <span>
                <h1 class="text-5xl font-light tracking-wide">Healthcare Coalition Work</h1>
                <h2 class="text-xl font-thin text-gray-900 tracking-wide mt-4 max-w-screen-lg">After the COVID-19 pandemic, MITRE emerged as a key facilitator in various healthcare coalitions. Leveraging its unique status as a not-for-profit organization, it provided impartial leadership among private and public entities. This resulted in numerous rapid design and development initiatives to showcase the coalitions' work. I spearheaded the design and development of several of these initiatives.</h2>
                </span>
                <div class="text-left mt-8">
                    <ul>
                        <li><b>Role: </b> UX Designer, Developer & Researcher</li>
                        <li><b>Domain: </b> Healthcare</li>
                        <li><b>Duration: </b> Spring 2020 - Fall 2024</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="max-w-screen-xl flex flex-col z-50 mx-auto w-full h-full py-8 px-4 md:px-0">
        <div class="flex flex-col-reverse md:flex-row justify-between gap-4 mt-12 md:items-center">
            <div class="md:w-1/2 bg-gray-200 p-4">
                <h3 class="text-3xl font-light text-gray-800 tracking-wide">Introduction</h3>
                <p class="mt-8 mb-4 text-left text-gray-800 text-lg max-w-screen-md leading-8 font-thin">
                  During early pandemic days, MITRE formed a coalition of private and public industry members with the aim to quickly gather and share crucial data to industry experts aiming to help the global health crisis.
                  MITRE quickly spun-up websites, tools, and sharing platforms to get the data out into the hands of experts.
                </p>
                <p class="mb-8 text-left text-gray-800 text-lg max-w-screen-md leading-8 font-thin">
                  In the early days of the pandemic, MITRE established a coalition of private and public industry members to swiftly collect and disseminate vital data to industry experts, aiming to address the global health crisis. MITRE rapidly developed websites, tools, and sharing platforms to ensure experts had access to this critical information. These tools were designed, developed, and deployed at an unprecedented speed to meet the evolving global demands. This work was distinctive, focusing not on a single tool or design, but on the overall UX approach to address needs during a rapidly changing crisis.
                </p>
            </div>
            <img src="@/assets/images/portfolio/work/c19hcc/c19hcc-browser.png" class="hidden md:flex sample-img" alt=""/>
        </div>
        
        <div class="flex flex-col-reverse md:flex-row justify-between gap-4 mt-12 md:items-center">
            <img src="@/assets/images/portfolio/work/dsd/dsd-devices.png" class="sample-img" alt=""/>
            <div class="md:w-1/2 bg-gray-200 p-4">
                <h3 class="text-3xl font-light text-gray-800 tracking-wide">Challenges</h3>
                <p class="mt-8 mb-4  max-w-screen-md text-left text-gray-800 text-lg leading-8 font-thin">
                    The urgency in which the tools and data were needed circumvented many typical "good" user centered design practices.
                    So how did we combat this to ensure we were creating useful and usable user experiences?
                </p>

            </div>
        </div>
        <div class="flex flex-col-reverse md:flex-row justify-between gap-4 mt-12 md:items-center">
            <div class="md:w-1/2 bg-gray-200 p-4">
                <h3 class="text-3xl font-light text-gray-800 tracking-wide">Approach</h3>
                <ul class="list-disc ml-6 mt-4 text-gray-800 text-lg leading-8 font-thin">
                    <li>We generated personas of healthcare experts including clinicians, policy and decision makers, and data analysts</li>
                    <li>Implemented a reusable design library in Adobe XD that could be shared and utilized by designers to ensure consistency and enable quick mockup generation</li>
                    <li>Guerrilla user testing</li>
                    <li>Standard code scaffold and pipelines for all developed tools</li>
                    <li>Looooong hours</li>
                </ul>
            </div>
            <img src="@/assets/images/portfolio/work/actpoc/actpoc-browser.png" class="sample-img" alt=""/>
        </div>
        <div class="flex flex-col-reverse md:flex-row justify-between gap-4 mt-12 md:items-center">
            <img src="@/assets/images/portfolio/work/c19hcc/chai.png" class="sample-img" alt=""/>
            <div class="md:w-1/2 bg-gray-200 p-4">
                <h3 class="text-3xl font-light text-gray-800 tracking-wide">Outcome</h3>
                <p class="mt-8 mb-4 text-left text-gray-800 text-lg max-w-screen-sm leading-8 font-thin">
                    We created:
                </p>
                <ul class="list-disc ml-6 mt-4 text-gray-800 text-lg leading-8 font-thin">
                    <li>A public website that provided public access to COVID-19 data curated by experts</li>
                    <li>A data sharing platform that enabled coalition members to publish and share data amongst the coalition</li>
                    <li>A public dashboard tool that supported government and organizations to make informed decisions on their policies with the latest data </li>
                    <li>At least three spin-off coalitions formed and required websites to share information and enable other organizations to join their causes</li>
                </ul>
            </div>
        </div>
        <div class="flex flex-col md:flex-row justify-between gap-4 mt-12 md:items-center">
            <div class="md:w-1/2 bg-gray-200 p-4">
                <h3 class="text-3xl font-light text-gray-800 tracking-wide">What I Learned</h3>
                <ul class="list-disc ml-6 mt-4 text-gray-800 text-lg leading-8 font-thin">
                    <li>It is worth the time and effort to create reusable templates and processes to enable user centered design on any timeline.</li>
                    <li>The best team is comprised of diverse domain and subject matter expertise</li>
                    <li>When we join for a cause, we can do incredible things</li>
                </ul>
            </div>
            <img src="@/assets/images/portfolio/work/c19hcc/vci.png" class="sample-img" alt="" />
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