import { createApp } from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import { router} from './router'
createApp(App).use(Vant).use(router).mount('#app')
