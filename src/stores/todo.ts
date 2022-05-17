import { defineStore } from 'pinia';
import type { Todo  } from '../interfaces/Todo';

export const useTodoList = defineStore('todolist', {
    state: (): { todolist:Todo[] } => {
        const raw = localStorage.getItem('todolist');
        const todolist = raw ? JSON.parse(raw) : [];
        return {
            todolist
        }
    }
})
