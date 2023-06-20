import VueRouter from "vue-router"
import NotesView from "@/views/NotesView.vue"
import HomeView from "@/views/HomeView.vue"

const routes = [
  { path: '/', component: HomeView },
  { path: '/notes', component: NotesView },
]

const router = new VueRouter({
  routes
})

export default router;
