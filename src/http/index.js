import Vue from 'vue';

const APP_API_URL = process.env.VUE_APP_API_URL || 'http://localhost:8000/api'

// Vue Resource
// import VueResource from 'vue-resource';

// Vue.use(VueResource);
// Vue.http.options.root = process.env.VUE_APP_API_URL;

// Axios
import axios from 'axios';
import VueAxios from 'vue-axios';

axios.defaults.baseURL = APP_API_URL;

Vue.use(VueAxios, axios);

export default {
    root: APP_API_URL
};