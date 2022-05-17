import { defineStore } from 'pinia'
import type { Book } from '../interfaces';


export const useLibrary = defineStore('library', {
    state: (): { library: Book[] | null} => {
        const raw: null | string = localStorage.getItem('library');
        const library = raw ? JSON.parse(raw) : null;
            return {
                library
            }
        }
});