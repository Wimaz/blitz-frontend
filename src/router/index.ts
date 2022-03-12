import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TodoView from '../views/TodoView.vue'
import ComposeView from '../views/ComposeView.vue';
import LibraryView from '../views/LibraryView.vue';
import BlitzView from '../views/BlitzView.vue';
import ReaderView from '../views/ReaderView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Todo',
      component: TodoView
    },
    {
      path: '/edit',
      name: 'edit',
      component: ComposeView
    },
    {
      path: '/reader',
      name: 'reader',
      component: ReaderView
    },
    {
      path: '/blitz',
      name: 'blitz',
      component: BlitzView
    },
    {
      path: '/library',
      name: 'library',
      component: LibraryView
    }
  ]
})

export default router
