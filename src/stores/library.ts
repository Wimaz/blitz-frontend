import { defineStore } from 'pinia'

let books: any[] = [];
export const useLibraryStore = defineStore({
    id: 'library',
    state: () => ({
        library: [...books]
    }),
    getters: {
        getBooks: (state) => state.library
    }
})

interface Book {
    title: string;
    pages: Page[];
    author: string; //credit yourself you earned it idgaf
    created_at: string;
    updated_at: string;
    cover_img?: string;
}

interface Page {
    text: string;
    images?: File[];// or url if s3 bucket is used
    page_number: number;
    created_at: string;
    updated_at: string;
    highlights: Highlight[];
    page_img?: string;//Like maybe probs could/would be nice
}

interface Highlight {
    text: string;
    start: number;
    end: number;
    created_at: string;
    updated_at: string;
}