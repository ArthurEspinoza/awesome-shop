import {createRouter, createWebHistory} from "vue-router"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "products",
            component: () => import("../views/ProductsView.vue")
        },
        {
            path: "/cart",
            name: "cart",
            component: () => import("../views/CartView.vue")
        },
        {
            path: "/details/:id",
            name: "Details",
            component: () => import("../views/DetailsView.vue")
        }
    ]
})

export default router;