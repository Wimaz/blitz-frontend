<script lang="ts">
import { defineComponent, onMounted } from "@vue/runtime-core";

export default defineComponent({
  data() {
    return {
      book: null,
      pages: [],
      page_num: 0
    };
    // var { submitted, list, val } = fetchLibrary();
    // console.log(submitted, list, val.value)
    // submitted();
    // return { list, val, submitted }
  },
  created() {
    const book = JSON.parse(localStorage.getItem("activeBook"));
    this.pages = book.pages;
  },
  methods: {
    setBook(book) {
      localStorage.setItem("activeBook", JSON.stringify(book));
    },
  },
});
</script>
<template>
  <div>
    <h1 class="text-3xl text-center underline text-purple">{{ book?.title }}</h1>
    <h3 class="text-3xl text-center underline text-purple">{{ pages[page_num].content }}</h3>
  </div>
</template>

