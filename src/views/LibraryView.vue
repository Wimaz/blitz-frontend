<script setup lang="ts">
import { ref, toRefs } from "@vue/reactivity";
import { defineComponent, onMounted } from "@vue/runtime-core";
import { storeToRefs } from "pinia";
import { RouterLink } from "vue-router";
import type { Book } from "../interfaces/Book";
import { useLibrary } from '../stores/library'

const endpoint = "http://localhost:3300/graphql";
const base_options = {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
};

const store = useLibrary();

const library:any = ref(store);
console.log('library:', library);

const getPageSnippet = (book: any, page_num: number = 0): string => {
  console.log('book :D', book);
  const page = book?.pages[page_num];
  const text = page.content;
  return text;
}
const setBook = (book: any): void => {
  localStorage.setItem("activeBook", JSON.stringify(book));
}

</script>
<template>
  <div class="grid grid-cols-3 gap-2 p-2 justify-items-center" :v-if="library?.length > 0">
    <div
      class="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl mt-1 mx-1 min-w-full"
      v-for="book in library"
      :key="book?._id"
    >
      <span class="flex items-center justify-start mt-5">
        <h3
          class="text-slate-900 dark:text-white text-base font-medium tracking-tight"
        >{{ book?.title }}</h3>
        <h3
          class="text-slate-900 dark:text-white text-sm font-medium tracking-tight ml-1 mr-2"
        >{{ book?.author }}</h3>
        <div>
          <router-link to="/reader" @click="setBook(book)">
            <span
              class="inline-flex items-center justify-center p-1 bg-indigo-500 rounded-md shadow-lg cursor-pointer"
            >
              <svg
                class="h-3 w-3 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                
              </svg>
            </span>
          </router-link>
        </div>
        <div>
          <router-link to="/edit" @click="setBook(book)">
            <span
              class="inline-flex items-center justify-center p-1 bg-lime-500 rounded-md shadow-lg cursor-pointer"
            >
              <svg
                class="h-3 w-3 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >

              </svg>
            </span>
          </router-link>
        </div>
        <div>
          <router-link to="/blitz" @click="setBook(book)">
            <span
              class="inline-flex items-center justify-center p-1 bg-cyan-500 rounded-md shadow-lg cursor-pointer"
            >
              <svg
                class="h-3 w-3 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                
              </svg>
            </span>
          </router-link>
        </div>
      </span>
      <p
        class="text-slate-500 dark:text-slate-400 mt-2 text-sm"
        style="white-space: pre-wrap"
      >{{ getPageSnippet(book) }}</p>
    </div>
  </div>
  
</template>

