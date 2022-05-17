<script setup lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import type { Todo } from '../interfaces/Todo';

const props = defineProps<{
  todo: Todo
}>()

const { todo } = toRefs(props)

const state = reactive({
  edit: false
});

const getDateDiff = () => {
  return todo.value.updated_at ? todo.value.updated_at : 'Fuck'
}

const toggleEdit = () => {
  state.edit = !state.edit;
}

const toggleCompleted = () => {
  todo.value.completed = !todo.value.completed;
}

const update = () => {
  //Look into if component should manage its own http
}

const deleteTodo = () => {

}

const handleKeyEvent = async (event: KeyboardEvent) => {
      if(event.keyCode === 13){
        console.log("Listening for Enter!");
        //Submit?
      }
}
</script>
<template>
  <span
    class="shadow mb-2 p-3 flex min-w-full justify-between"
    v-bind:class="todo.completed ? 'bg-green-800' : 'bg-white'"
    draggable
  >
    <p
      v-if="!state.edit"
      class="text-xl p-1"
      v-bind:class="todo.completed ? 'text-white-600' : 'text-gray-900'"
    >{{ todo.task }}</p>
    <p class="text-white-900 text-xl p-1">{{ getDateDiff() }}</p>
    <input
      v-if="state.edit"
      type="text"
      class="text-gray-700 p-1 rounded-sm border-2 w-2/3"
      v-model="todo.task"
      @keypress="handleKeyEvent($event)"
    />
    <span class="flex justify-between">
      <button @click="toggleEdit()" class="bg-green-500">
        <img class="invert" src="../assets/icons/regular/bx-edit.svg" v-if="!state.edit" />
        <img class="invert" src="../assets/icons/regular/bx-edit-alt.svg" v-if="state.edit" />
      </button>
      <button v-if="state.edit" @click="update()" class="bg-blue-500">
        <img class="invert" src="../assets/icons/regular/bx-check-square.svg" />
      </button>
      <button @click="toggleCompleted()" class="bg-red-500">
        <img class="invert" src="../assets/icons/regular/bx-check-square.svg" v-if="todo.completed" />
        <img class="invert" src="../assets/icons/solid/bxs-x-square.svg" v-if="!todo.completed" />
      </button>
      <button @click="deleteTodo()">Bye</button>
    </span>
  </span>
</template>

<style scoped>
</style>