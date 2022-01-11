import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import vant from 'vant';
import 'vant/lib/index.css'; //引入vant样式组件

import axios from './axios/axiosConfig';

const app = createApp(App);
app.config.globalProperties.$http=axios; //挂载到项目上

app.use(store).use(router).use(vant).mount('#app')
