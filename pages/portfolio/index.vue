<template>
  <div class="page-container">
    <div class="max-w-screen-xl flex flex-col z-50 mx-auto w-full h-full py-24">
      <h1 class="text-5xl font-thin text-gray-600 lowercase tracking-wide z-50"><span class="bg-white px-4 py-2 shadow-xl">Bri's Portfolio</span></h1>
      <h2 class="text-3xl font-thin text-gray-600 lowercase tracking-wide z-50 mt-8"><span class="bg-white px-4 py-2 shadow-xl">Is under construction. Check back soon!</span></h2>
    </div>
  </div>
</template>
<style scoped>
.page-container {
  min-height: calc(100vh - 80px)
}
.page-container::after {
  content: '';
  background-image: url('~/assets/images/portfolio.svg');
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.2;
  top: -100px;
  left: 0;
  bottom: 0;
  right: 0;
  position: fixed;
  z-index: 0;
  max-width: 1700px;
}
</style>
