export interface Book {
    _id: string;
    title: string;
    author?: string;
    blurb?: string;
    pages: Page[]
}

export interface Page {
    _id: string;
    content: string;
    page_num: number;
}