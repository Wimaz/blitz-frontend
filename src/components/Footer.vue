<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { ref } from 'vue' 
defineProps<{
    msg: string
}>()


const route = `${useRoute().path}`.replace('/', '');//Do globally with regex;

let activeRoute = ref(route);
//Doesnt work seemingly
//on reloads and that :(
</script>

<template>
    <div class="footer p-2 bottom left right absolute sticky">
        <div class="flex space-between routes">
            <span class="p-3 bg-white rounded-lg" v-bind:class="{ 'active-route': activeRoute === 'edit' }">
                <router-link to="/edit" @click="activeRoute = 'edit'">
                    <img src="../assets/icons/regular/bx-edit.svg" alt="" class="router-icon">
                    </router-link>  
            </span>            
            <span class="p-3 bg-white rounded-lg" v-bind:class="{ 'active-route': activeRoute === 'reader' }">
                <router-link to="/reader" @click="activeRoute = 'reader'"> 
                    <img src="../assets/icons/regular/bx-book-open.svg" alt="" class="router-icon">
                </router-link>
            </span>                
            <span class="p-3 bg-white rounded-lg" v-bind:class="{ 'active-route': activeRoute === 'blitz' }">
                <router-link to="/blitz" @click="activeRoute = 'blitz'">
                    <img src="../assets/icons/regular/bx-tachometer.svg" alt="" class="router-icon">
                </router-link>
            </span>                
            <span class="p-3 bg-white rounded-lg" v-bind:class="{ 'active-route': activeRoute === 'library' }">
                <router-link to="/library"  @click="activeRoute = 'library'">
                    <img src="../assets/icons/regular/bx-library.svg" alt="" class="router-icon">
                </router-link>
            </span>
        </div>        
    </div>
</template>

<style scoped>
    .router-icon{
        width: 4.5rem; 
        height: 4.5rem;
    }

    .routes {
        max-width: 80%;
        margin: 0 auto;
    }

    span {        
        transition-duration: 0.4s;
    }

    .active-route {
        /* background: #0A81D1; */
        background: #0075A2;        
        transition-duration: 0.4s;
    }

    .active-route img {
        filter: invert(100%)
    }

    .footer {
        background: #788585;
    }
    .space-between {
        justify-content: space-between;        
    }
    
</style>