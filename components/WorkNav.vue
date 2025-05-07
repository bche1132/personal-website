<template>
    <div :class="bgClass">
        <div class="max-w-screen-xl flex flex-row justify-between mx-auto w-full h-full py-8 md:py-24 px-4 xl:px-0">
            <nuxt-link :to="previousLink" class="primary-btn flex flex-row items-center bg-white rounded-full px-4 py-2 hover:bg-midcent-tan cal-sans-regular">
                <chevron-left-icon class="mr-2"></chevron-left-icon> {{ previousStory }}
            </nuxt-link>
            <nuxt-link :to="nextLink" class="primary-btn flex flex-row items-center bg-white rounded-full px-4 py-2 hover:bg-midcent-tan cal-sans-regular">
               {{ nextStory }} <chevron-right-icon class="ml-2"></chevron-right-icon>
            </nuxt-link>
        </div>
    </div>
</template>
<script>
import { ChevronLeftIcon, ChevronRightIcon } from 'vue-feather-icons';
export default {
  props: {
    previousStory: {
      type: String
    },
    nextStory: {
      type: String
    },
    previousLink: {
      type: String
    },
    nextLink: {
      type: String
    },
    bgClass: {
        type: String
    }
  },
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
  }
}
</script>
