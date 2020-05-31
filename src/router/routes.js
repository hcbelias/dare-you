const routes = [
  {
    path: '/dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/DashboardPage.vue') }],
    meta: {
      auth: true
    }
  },
  {
    path: '/me',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/UserAccountPage.vue') }
    ],
    meta: {
      auth: true
    }
  },
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [{ path: '', component: () => import('pages/LoginPage.vue') }],
    meta: {
      guest: true
    }
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    children: [{ path: '', component: () => import('pages/HomePage.vue') }],
    component: () => import('layouts/HomeLayout.vue')
  })
}

export default routes
