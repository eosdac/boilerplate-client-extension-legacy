const routes_extension = [
  {
    path: "/",
    component: () => import("layouts/dacLayout.vue"),
    children: [
      {
        path: "example",
        component: () => import("../pages/example")
      },
      {
        path: "credits",
        component: () => import("../pages/credits.vue")
      }
    ]
  },
  {
    path: "/your_app",
    component: () => import("../layouts/appLayout.vue"),
    children: [
      { path: "", component: () => import("../pages/app_page_1.vue") },
      {
        path: "app_page1",
        component: () => import("../pages/app_page_1.vue")
      }
    ]
  }
];

export default routes_extension;
