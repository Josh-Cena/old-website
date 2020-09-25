import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/editor",
    name: "Editor",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Editor.vue")
  },
  {
    path: "/music",
    name: "Music",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Music.vue")
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import(/* webpackChunkName: "about" */ "../views/Blog.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
