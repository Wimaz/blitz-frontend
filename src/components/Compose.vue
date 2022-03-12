<script setup lang="ts">
    import { ref } from 'vue'
    defineProps<{
        page_num?: number,
        book?: any
    }>()
    let words = ref('WORDS WORDS WORDS');
    let page_count = ref(300);
    let page_num = ref(0);    

    let word_count = ref(0)    
    const setWordCount = () => {
        console.log('SUP?')
        word_count = ref(words.value.split(' ').length);
    }
    setWordCount();

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
        @change="setWordCount()"
        v-model="words"
        ></textarea>
        <div class="info">
            <span class="flex">
                <p class="text-gray-700 pr-3">Page Num</p> <input class="text-gray-700 p-0.5" type="number" v-model="page_num"> <p class="text-gray-700">/{{page_count}}</p>
            </span>
            <span><p class="text-gray-700">Word Count {{word_count}}</p> </span>    
        </div>
        <div class="actions">
            <span class="flex space-x-3">
                <button class="rounded-full p-2 bg-red-400">CANCEL</button>
                <button class="rounded-full p-2 bg-blue-500">SAVE</button>
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