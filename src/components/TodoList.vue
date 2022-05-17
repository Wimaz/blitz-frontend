<script>
import { defineComponent } from 'vue';
import { runner  } from '../api.service.ts';
import { useTodoList } from '../stores/todo.ts';
import Todo from './Todo.vue';

export default {
    data() {
        return {
            todos: []
        }
    },
    computed(){
        const dataPlz = useTodoList();
        console.log("Data?!?:", dataPlz);
    }
 }


</script>

<template>
 <ul>
    <li :v-for="todo in todos" :key="todo._id">
        <Todo todo="todo" />
    </li>
 </ul>
</template>

<style>
</style>
