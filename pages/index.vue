<template>
  <div class="w-full h-full page-container flex flex-col">
    <div
      class="max-w-screen-xl mx-auto flex flex-col items-center flex-grow h-full"
    >
      <div class="z-50 px-4 pb-24 my-auto">
        <span class="text-6xl font-bold tracking-wider z-50">
          <h1 class="bg-white px-4 py-2 capitalize">Brianna Chen | UX Engineer</h1>
        </span>
        <p
          class="text-3xl tracking-wide font-light text-gray-700 mt-8 z-50 bg-white px-4 py-2"
          id="typein"
        >
        </p>
        <div class="mt-12">
          
          <nuxt-link
                to="/about"
                class="rounded-full inline-flex text-xl items-center px-8 py-2 bg-custom-orange font-light cursor-pointer primary-btn"
              >
                <span>Learn more </span>
              </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "home",
  data() {
    return {
      i: 0,
      speed: 50,
      message: "I'm a designer and developer committed to making beautiful user experiences."
    }
  },
  methods: {
    typeWriter() {
      if (this.i < this.message.length) {
        document.getElementById("typein").innerHTML += this.message.charAt(this.i);
        this.i++;
        setTimeout(this.typeWriter, this.speed);
      }
    }
  },
  mounted() {
    this.typeWriter();
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
</style>
