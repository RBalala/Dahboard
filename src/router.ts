import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import LoginPage from './pages/LoginPage/index.vue'
import Dashboard from './pages/Dashboard/index.vue'
import { useAuthStore } from './stores/Auth'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/dashboard/:id',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const store = useAuthStore()
  if (to.meta.requiresAuth && !store.isAuthenticated) {
    next('/');
  } else {
    next();
  }
});

export default router;