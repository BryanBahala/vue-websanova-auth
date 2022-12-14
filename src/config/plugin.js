import Vue from 'vue'

import auth from '@websanova/vue-auth/src/v2.js';
import driverAuthBearer from '@websanova/vue-auth/src/drivers/auth/bearer.js';
import driverHttpAxios from '@websanova/vue-auth/src/drivers/http/axios.1.x.js';
// import driverHttpVueResource from '@websanova/vue-auth/src/drivers/http/vue-resource.1.x.js';
import driverRouterVueRouter from '@websanova/vue-auth/src/drivers/router/vue-router.2.x.js';
import driverOAuth2Google from '@websanova/vue-auth/src/drivers/oauth2/google.js';
import driverOAuth2Facebook from '@websanova/vue-auth/src/drivers/oauth2/facebook.js';

// driverOAuth2Google.params.client_id = '547886745924-4vrbhl09fr3t771drtupacct6f788566.apps.googleusercontent.com';
// driverOAuth2Facebook.params.client_id = '196729390739201';

Vue.use(auth, {
    plugins: {
        http: Vue.axios, // Axios
        // http: Vue.http, // Vue Resource
        router: Vue.router,
    },
    drivers: {
        auth: driverAuthBearer,
        http: driverHttpAxios, // Axios
        // http: driverHttpVueResource, // Vue Resource
        router: driverRouterVueRouter,
        oauth2: {
            google: driverOAuth2Google,
            facebook: driverOAuth2Facebook,
        }
    },
    options: {
        rolesKey: 'type',
        fetchData: { url: '/v1/auth/user' },
        refreshData: { url: '/v1/auth/refresh' },
        logoutData: { url: '/v1/auth/logout' },
        notFoundRedirect: { name: 'Home' },

    },
});