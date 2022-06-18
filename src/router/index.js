import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import TasksView from "../views/TasksView.vue"
import TaskAddView from "../views/TaskAddView.vue"
import TaskEditView from "../views/TaskEditView.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/tasks",
    name: "tasks",
    component: TasksView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/tasks/add",
    name: "addtask",
    component: TaskAddView,
  },
  {
    path: "/tasks/edit/:id",
    name: "edittask",
    component: TaskEditView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
