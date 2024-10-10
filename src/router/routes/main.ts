export default [
  {
    path: '/',
    component: () => import('@/views/Main.vue'),
    redirect: { name: 'list' },
    children: [
      {
        path: '/list',
        name: 'list',
        component: () => import('@/views/CountryList.vue'),
      },
      {
        path: '/country/:name',
        name: 'country',
        component: () => import('@/views/CountryPage.vue'),
      },
    ],
  },
];
