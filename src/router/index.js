import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let routes = [
    {
        // will match everything
        path: '*',
        component: () => import('../views/404.vue'),
    },
    {
        path: '/',
        name: 'Home',
        redirect: '/dashboard',
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        layout: "dashboard",
        meta: {
            auth: true,
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
    },
    {
        path: '/layout',
        name: 'Layout',
        layout: "dashboard",
        component: () => import('../views/Layout.vue'),
    },
    {
        path: '/tables',
        name: 'Tables',
        layout: "dashboard",
        component: () => import('../views/Tables.vue'),
    },
    {
        path: '/billing',
        name: 'Billing',
        layout: "dashboard",
        meta: {
            auth: true,
        },
        component: () => import('../views/Billing.vue'),
    },
    {
        path: '/rtl',
        name: 'RTL',
        layout: "dashboard-rtl",
        meta: {
            layoutClass: 'dashboard-rtl',
        },
        component: () => import('../views/RTL.vue'),
    },
    {
        path: '/Profile',
        name: 'Profile',
        layout: "dashboard",
        meta: {
            layoutClass: 'layout-profile',
        },
        component: () => import('../views/Profile.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        redirect: '/sign-in',

    },

    {
        path: '/sign-in',
        name: 'Sign-In',
        // layout: "dashboard",
        meta: {
            auth: false,
        },
        component: () => import('../views/Sign-In.vue'),
    },
    {
        path: '/sign-up',
        name: 'Sign-Up',
        meta: {
            layoutClass: 'layout-sign-up',
        },
        meta: {
            auth: false,
        },
        component: () => import('../views/Sign-Up.vue'),
    },
]

// Adding layout property from each route to the meta
// object so it can be accessed later.
function addLayoutToRoute(route, parentLayout = "default") {
    route.meta = route.meta || {};
    route.meta.layout = route.layout || parentLayout;

    if (route.children) {
        route.children = route.children.map((childRoute) => addLayoutToRoute(childRoute, route.meta.layout));
    }
    return route;
}

routes = routes.map((route) => addLayoutToRoute(route));

Vue.router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.history) {
            return {
                selector: to.history,
                behavior: 'smooth',
            }
        }
        return {
            x: 0,
            y: 0,
            behavior: 'smooth',
        }
    }
})

export default Vue.router