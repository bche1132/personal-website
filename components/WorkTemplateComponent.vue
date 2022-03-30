<template>
  <div>
    <h1 class="text-5xl font-thin text-gray-600 lowercase tracking-wide z-50"><span class="bg-white px-4 py-2 shadow-xl">{{ work.title }}</span></h1>
  </div>
</template>
<script>
export default {
  props: {
    work: {
      type: Object
    }
  }
}
</script>