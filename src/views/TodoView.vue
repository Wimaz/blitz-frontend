<script lang="ts">
import {
  defineAsyncComponent,
  onMounted,
  ref,
} from "@vue/runtime-core";
import * as moment from 'dayjs'
import type { Todo as TodoInterface } from '../interfaces/Todo';
import { TodoList  } from '../components/TodoList.vue';
import { queryRunner  } from "../api.service";
//REFACTOR FOR THE LOVE OF GOD BEFORE THIS GETS OUT OF HAND
//WILL BUILD SECOND COMPONENT OUT WITH HTTP SHIT AND THATS IT
// // THEN THERE WILL BE AS SERVICE
// const createFocused = ref(false);
// const updateFocused = ref(null);

// var new_todo = ref({ task: '' });
// var todos:any = ref([]);



// const created = async () => {
//     try {
//         console.log("Hello?")
//         await load();
//     } catch (err) {
//         console.log("error created ing :(", err);
//     }
// }

// const load = async  () => {
//     try {
//         const query = `query {todos { _id task completed updated_at created_at }}`;
//         const results = await queryRunner(query);
//         console.log('results :D', results);
//         todos = ref(results.data.todos);
//         console.log(todos.value)
//     } catch (err) {
//         console.log('error loading :(', err);
//     }
// }

// const create = async () => {
//     const query = `mutation { createTodo(payload: {task: "${new_todo.value.task}"}){ _id } }`;
//     const results = await queryRunner(query);
//     await load();
// }

// const handleKeyEvent = async (e: KeyboardEvent) =>  {
//     if (e.keyCode === 13) {
//         e.preventDefault();
//         if (createFocused) { 
//             await create();
//         } 
//     }
// }

// onMounted(created)


export default defineAsyncComponent({
  data: () => {
    return {
      createFocused: false,
      updateFocused: null,//Hopefully a cheeky id holder. Still treated as a boolean in template
      todos: [],
      new_todo: {
       task: "Add Todo",
      }
   }
 },
 async created() {
   await this.load();
  },
  methods: {
    async create() {
      const query = `
          mutation { 
            createTodo( payload :{task: "${this.new_todo.task}"}) { _id }
          }`;

      const json = await this.query(query);
      await this.load();
      this.new_todo.task = "Haha now do another one";
    },
    getTodo(id: string): TodoInterface | undefined{
      return this.todos.find(({ _id }) => id === _id);
    },
    async load() {
      const query = `query {todos { _id task completed updated_at created_at }}`;
      const todosData = await this.query(query);
      this.todos = ref(todosData.data.todos);
      console.log('this.todos;', this.todos);
    },
    async update(id) {
      const todo = this.getTodo(id);
      //Yeah bigbrain this one
      const query = `mutation {
            updateTodo(payload: { 
                _id: "${id}",
                task: "${todo.task}" 
              }){
            _id task completed
              }
          }`;
      const res = await this.query(query);
      
      todo.edit = false;
    },
    async deleteTodo(id) {
      const query = `mutation { 
          deleteTodo(payload: { _id: "${id}"}) {
            _id 
          }
        }`;
      const res = await this.query(query);
      
      this.todos = this.todos.filter(({ _id }) => _id !== id);
    },
    toggleEdit(id) {
      const todo = this.getTodo(id);
      todo.edit = !todo.edit;
    },
    async toggleCompleted(id) {
      const todo = this.getTodo(id);
      todo.completed = !todo.completed;
      
      //Toggle server
      const query =  `mutation {
            updateTodo(payload: { 
                _id: "${id}",
                completed: ${todo.completed}
              }){
                _id task completed
              }
          }`;

      const res = await this.query(query);
    },
    getDateDiff(todo){
      return todo.updated_at ? todo.updated_at : 'Fuck'
    },
    async query(query: string): Promise<any> {
      const q = { query: query };
      const options = {
        ...base_options,
        body: JSON.stringify(q),
      };
      const res = await fetch(endpoint, options);
      return await res.json();
    },
    async handleKeyEvent(event: KeyboardEvent){
      if(event.keyCode === 13){
        event.preventDefault();
        if(this.createFocused) await this.create();
        // if(this.updateFocused) await this.update(this.updateFocused);        
      }
    },
    
  },
})
</script>

<template>
  <main>
    <TodoList />
    <div
      class="
        container
        grid-cols-1
        place-content-center place-items-center
        overflow-y-scroll
        h-5/6
      "
    >
      <span v-for="todo in todos" :key="todo._id">
        <Todo :todo="todo" />
      </span>
      <span class="">
        <input
          type="text"
          v-model="new_todo.task"
          class="text-gray-900"
          autofocus
          @keypress="handleKeyEvent($event)"
          @focus="createFocused = true"
          @blur="createFocused = false"
        />
        <button @click="create()">
          <img class="invert" src="../assets/icons/solid/bxs-plus-square.svg" />
        </button>
      </span>
    </div>
  </main>
</template>
