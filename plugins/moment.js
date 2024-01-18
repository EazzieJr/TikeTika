import Vue from 'vue';
import moment from 'moment';

// You can configure Moment.js here if needed
moment.locale('en'); // Set the default locale

Vue.prototype.$moment = moment;