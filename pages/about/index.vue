<template>
  <div class="w-full page-container">
    <div
      class="max-w-screen-xl flex flex-col mx-auto w-full h-full"
    >
      <div
        class="w-full flex flex-col p-12"
        > 
          
          <img
            src="~/assets/images/bri_peru.jpg"
            class="mx-auto h-64 w-64 my-4 shadow-lg"
            alt="Picture of Brianna in Peru petting a baby goat"
          />
          <div class="hidden rectangle md:flex"></div>
          <h1
            class="px-4 mt-8 text-center text-4xl font-bold text-gray-800 tracking-wide"
          >
            Hi there! You can call me <span class="text-midcent-green">Bri!</span>
          </h1>
          <!-- <div
            class="my-8 mx-auto text-left text-gray-800 text-lg max-w-screen-sm leading-8 font-thin italic cloud bg-blue-200 p-4"
          >
            I have a background in both Computer Science and Art, and use these
            seemingly disparate fields in projects as both a UX Designer and
            Developer. In recent years, I have also enjoyed learning and
            practicing UX Research methodologies to help inform design and
            enhance user experience outcomes.
          </div> -->

          <div class="my-8 mx-auto text-left text-gray-800 text-lg max-w-screen-sm leading-8 font-thin">
            <h2 class="text-xl font-medium text-left mt-12">My Journey into UX:</h2>
            <ol class="list-decimal pt-8 text-left text-gray-800 text-lg ml-6">
              <li>Earned a Bachelor's degree in Art, specializing in oil painting</li> 
              <li>Explored interior design for a brief period</li>
              <li>Completed a Master's in Computer Science with a focus on Game Design</li>
              <li>Began my career as a Graphics & Visualization Software Engineer in a research and innovation company</li>
              <li>Discovered my passion for blending development and design—leading me to become a UX Engineer</li>
            </ol>
            <h2 class="text-xl font-medium text-left mt-12">What I Do Day-to-Day</h2>
            <p class="mt-8">No two days are the same! I thrive in a fast-paced environment, managing multiple projects while balancing strategic planning with adaptability. Working across diverse industries and customer needs means constantly learning, evolving, and embracing new technologies.</p>
            <p class="mt-4">A typical day might involve:</p>
            <ul class="list-disc  ml-6">
              <li>Reviewing wireframes and refining user flows</li>
              <li>Designing high-fidelity mockups</li>
              <li>Conducting user research and interviews</li>
              <li>Developing front-end components to bring designs to life</li>
              <li>Refining product templates or drafting new logos</li>
            </ul>
            <p class="mt-4">Beyond my role as a UX Engineer, I also lead a team—ensuring they are engaged in meaningful work where they can create impact.</p>
            <h2 class="text-xl font-medium text-left mt-12">Why UX?</h2>
            <p class="mt-8">
              UX combines my love for creativity and technology. It allows me to design functional, innovative experiences while advocating for the needs of real users. <b>For me, it’s about crafting intuitive, impactful solutions that bridge the gap between design and development.</b></p>
            
          </div>
      </div>
    </div>
    <div class="flex flex-col py-24 align-center justify-center w-full bg-white"
      > 
        <h4 class="font-medium text-4xl mx-auto mb-12">I also enjoy</h4>
        <div class="grid grid-cols-1 md:grid-cols-4 max-w-screen-xl mx-auto">
          <div class="bg-midcent-orange">
            <img
              src="~/assets/images/hobbies/art.jpg"
              class="mx-auto my-4 z-50 w-full px-4"
              alt="Picture of Brianna in front of an oil painting"
            />
            <h4 class="font-light px-4 pt-2 pb-4 text-2xl">Painting</h4>
          </div>
          <div class="bg-midcent-green">
            <img
              src="~/assets/images/hobbies/lounging.jpg"
              class="mx-auto my-4 z-50 w-full  px-4"
              alt="Picture of two adorable kittens"
            />
            <h4 class="font-light px-4 pt-2 pb-4 text-2xl">Lounging</h4>
          </div>
          <div class="bg-midcent-blush">
            <img
              src="~/assets/images/hobbies/travel.jpg"
              class="mx-auto my-4 z-50 w-full  px-4"
              alt="Picture of Brianna in Peru with llamas walking in front"
            />
            <h4 class="font-light px-4 pt-2 pb-4 text-2xl">Traveling</h4>
          </div>
          <div class="bg-midcent-yellow">
            <img
              src="~/assets/images/hobbies/gaming.jpg"
              class="mx-auto my-4 z-50 w-full  px-4"
              alt="Picture of board game pandemic"
            />
            <h4 class="font-light px-4 pt-2 pb-4 text-2xl">Board Games</h4>
          </div>
        </div>
      </div>
    <lets-connect />
  </div>
</template>
<script>
import { FileTextIcon, MailIcon } from "vue-feather-icons";
import LetsConnect from '@/components/LetsConnect.vue'
export default {
  components: {
    FileTextIcon,
    MailIcon,
  },
  mounted() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view")
          }
        }) 
      }, {
        rootMargin: "0px",
        threshold: [0, 0.1, 1]
      });

      const tags = document.querySelectorAll("div, h1,h2, h3,h4")
      tags.forEach((tag) => {
        observer.observe(tag)
      });
  },
};
</script>
<style scoped>
.page-container {
  min-height: calc(100vh - 80px);
}
.page-container::after {
  content: "";
  /* background-image: url("~/assets/images/about.svg");
  background-size: cover;
  background-repeat: no-repeat; */
  opacity: 0.1;
  top: -100px;
  left: 0;
  bottom: 0;
  right: 0;
  position: fixed;
  z-index: 0;
  max-width: 1700px;
}
.dot {
  height: 15px;
  width: 15px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  margin-left: 5px;
}
.dot.dark {
  background-color: black;
}
.cloud{ 
   box-shadow: 10px 10px rgba(0,0,0,0.2);
}
.footer {
  background: #2274A5;
}
.button {
  background: #FFBF00;
}
.rectangle {
  position: absolute;
  width: 300px;
  height: 300px;
  background: #C8A89C;
  margin-left: 20%;
  /* margin-top: -50px; */
}
.box {
    width: 200px;
    height: 200px;
    background: red;
    position: relative;
    top: 40px;
}
.shape {
    width: 250px;
    height: 250px;
    background: navy;
    border-radius: 50%;
    position: absolute;
    left: 75px;
    top: 50px;
    overflow: hidden;
}

#top-left {
    width: 150px;
    height: 150px;
    background: purple;
    position: relative;
    left: -25px;
}
</style>
