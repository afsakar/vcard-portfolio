<script setup>
import { useCookieStore } from '../composables/cookie'

const cookie = useCookieStore()

onMounted(() => {
  useCookieStore()
})
</script>

<template>
  <Transition name="bounce">
    <div v-show="!cookie.getCookie" class="container left-0 right-0 mx-auto child md:w-[25%] bg-[#3f3f40] rounded-lg shadow-xl px-6 py-3 bottom-20 fixed z-[100] flex items-center justify-between animate-bounce">
      <span class="text-[#fafafa]">This site use cookies! 🍪</span>
      <span class="cursor-pointer p-2 shadow-md rounded bg-[#383838] text-[#fafafa] hover:bg-[#1e1e1f] transition" @click="cookie.setCookie()">
        <ion-icon name="close-outline" />
      </span>
    </div>
  </Transition>
</template>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
}
</style>
