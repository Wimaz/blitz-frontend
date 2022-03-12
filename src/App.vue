<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from '@/components/HelloWorld.vue'
import Footer from '@/components/Footer.vue';

</script>

<template>
  <div class="container flex flex-col min-h-screen">
    <main>
      <RouterView />  
    </main>
    <Footer msg="ay" />
  </div>
</template>

<style>
@import '@/assets/base.css';

body {
  background-color: #161925;
}

.container {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background:#CCDAD1  ;
}

main {
  flex: 1;
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  font-weight: normal;
}

</style>
