<template>
  <div class="w-full h-full page-container flex flex-col">
    <div class="max-w-screen-xl mx-auto flex flex-col items-center flex-grow h-full">
      <div class="z-50 px-4 pb-24 my-auto">
          <span class="text-6xl font-thin tracking-wider z-50">
            <h1 class="bg-white px-4 py-2 shadow-xl">Brianna Chen</h1>
          </span>
        <h2 class="text-5xl font-bold tracking-wider z-50 mt-4">
          <span class="bg-white px-4 py-2 shadow-xl">UX Engineer</span>
        </h2>
        <p class="text-3xl tracking-wide font-light text-gray-700 mt-8 z-50 bg-white px-4 py-2 shadow-xl">
           <span class="">I'm a designer and developer committed to making beautiful user experiences.</span>
        </p>
        <p class="text-3xl tracking-wide font-light text-gray-700 mt-8 z-50">
           <span class="bg-white px-4 py-2 shadow-xl">you can call me <span class="font-bold">Bri</span>.</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'home',
}
</script>

<style>
.page-container {
  min-height: calc(100vh - 80px)
}
</style>
