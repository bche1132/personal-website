<template>
  <div class="page-container">
    <div class="max-w-screen-xl flex flex-col z-50 mx-auto w-full h-full py-24">
      <h1 class="text-5xl font-thin text-gray-600 lowercase tracking-wide z-50"><span class="bg-white px-4 py-2 shadow-xl">Bri's Resume</span></h1>
      <embed src="/Brianna_Chen_UXE_Resume.pdf" width="1440px" height="900px" class="z-50"/>
    </div>
  </div>
</template>
<script>
</script>
<style scoped>
.page-container {
  min-height: calc(100vh - 80px)
}
.page-container::after {
  content: '';
  background-image: url('~/assets/images/musings.svg');
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.3;
  top: -100px;
  left: 0;
  bottom: 0;
  right: 0;
  position: fixed;
  z-index: 0;
  max-width: 1700px;
}
</style>
