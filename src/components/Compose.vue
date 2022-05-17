<script lang="ts">
    import { ref, defineComponent } from 'vue'
    import type { Book, Page } from '../interfaces/Book'
    export default defineComponent({
        data(): { book: Book | undefined, page: Page | undefined, text: any | undefined, page_index: number, page_num: number } {
            return {            
                book: undefined,
                page: undefined,
                text: undefined,
                page_index: 0,
                page_num: 0
            }
        },
        created(): void {
            const activeBook = localStorage.getItem('activeBook')
            if(activeBook){
                const book: Book = JSON.parse(activeBook);
                this.book = book;
                this.changePage(0);
            }
            
        },
        methods: {
            getWordCount(content: string): number {
                return content.split(' ').length;
            },
            changePage(page_num: number): void {
                const pages: Page[] | undefined = this.book?.pages;
                if(pages?.length){
                    this.page = pages[page_num];
                    this.page_index = page_num;                    
                }                
            }
        }
    })

</script>

<template>
    <div class="flex items-center flex-col">
        <textarea
        class="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
        id="exampleFormControlTextarea1"
        rows="3"
        placeholder="Your message"
        v-model="text"
        ></textarea>
        <div class="info">
            <span class="flex">
                <p class="text-gray-700 pr-3">Page Num</p> <input class="text-gray-700 p-0.5" type="number" v-model="page_num"> <p class="text-gray-700">/{{book?.pages.length}}</p>
            </span>
            <span><p class="text-gray-700">Word Count {{getWordCount(text)}}</p> </span>    
        </div>
        <div class="actions">
            <span class="flex space-x-3">
                <button class="rounded-full p-2 bg-green-500" @disabled="page_index === 0" @click="changePage(--page_index)">PREV</button>
                <button class="rounded-full p-2 bg-red-400">CANCEL</button>
                <button class="rounded-full p-2 bg-blue-500">SAVE</button>
                <button class="rounded-full p-2 bg-green-500" @click="changePage(++page_index)">NEXT</button>
            </span>
        </div>
    </div>
</template>

<style scoped>
    textarea {
        margin-top: 3rem;
        width: 80%;
        height: 40rem;
    }
</style>