import { defineStore } from 'pinia';
import type { Book } from '../interfaces/Book'

export const useBook = defineStore('book', {
    state: (): { book: Book | null } =>  {
        const activeBook = localStorage.getItem('activeBook');
        return { book: activeBook ? JSON.parse(activeBook) : null }
    }
});