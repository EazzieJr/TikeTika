import Vue from 'vue';
import Cookies from 'js-cookie';

// Inject the Cookies library into Vue instances
Vue.prototype.$cookies = Cookies;
