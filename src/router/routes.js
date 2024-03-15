const routes = [
  {
    path: '/',
    redirect: '/question1',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/question-1', component: () => import('pages/Question1.vue') },
      { path: '/question-2', component: () => import('pages/Question2.vue') },
      { path: '/question-3', component: () => import('pages/Question3.vue') },
      { path: '/question-4', component: () => import('pages/Question4.vue') },
      { path: '/question-5', component: () => import('pages/Question5.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes;
