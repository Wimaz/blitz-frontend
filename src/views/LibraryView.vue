<script lang="ts">
import { ref } from '@vue/reactivity';
import fetchLibrary from '../fetch-library';
import { defineComponent, onMounted } from '@vue/runtime-core';
export default defineComponent( {
    data: () => {
        var { submitted, list, val } = fetchLibrary();
        console.log(submitted, list, val.value)
        submitted();        
        return { list, val, submitted }
    },
    methods: {
        getPageSnippet(book: any, page_num: number = 0): string{
            const page = book.pages[page_num];
            const text = page.text;
            return text.slice(0, 50) + '...'
        }
    }
})

</script>
<template>
    <!-- <div> -->
        <!-- <h1>LOADING</h1> -->
        <!-- <button @click="submitted">fuck</button> -->
    <!-- </div> -->
    <!-- <div v-if="list"> -->
        <div class="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl mt-1 mx-1" v-for="book in list" :key="book.title">
            <div>
                <span class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><!-- ... --></svg>
                </span>
            </div>
            <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">{{ book.title }}</h3>
            <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm" style="white-space: pre-wrap">
                {{ getPageSnippet(book) }}
            </p>
        </div>
    <!-- </div> -->
    <!-- Display Options -->
</template>

