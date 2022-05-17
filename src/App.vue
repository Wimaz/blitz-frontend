<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from '@/components/HelloWorld.vue'
import Footer from '@/components/Footer.vue';

</script>

<template>
  <div class="container block h-screen container-sm container-md container-lg container-xl m-auto">
    <main class="h-full">
      <div class="h-5/6 overflow-y-scroll">
        <RouterView />  
      </div>
      <div class="h-1/6">
        <Footer msg="ay" />
      </div>
    </main>
    
  </div>
</template>

<style>
@import '@/assets/base.css';

body {
  background-color: #161925;
}

/* #app {
  max-width: 1280px;
  margin: 0 auto;
  font-weight: normal;
} */

</style>
