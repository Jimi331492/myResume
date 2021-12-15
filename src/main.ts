/*
 * @Author: 龙际妙
 * @Date: 2021-12-06 18:19:32
 * @Description:
 * @FilePath: \resume-ts-template\src\main.ts
 * @LastEditTime: 2021-12-16 00:14:52
 * @LastEditors: Please set LastEditors
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import ElementPlus from 'element-plus'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import './assets/style/global.less'
import './assets/style/index.less'

createApp(App).use(store, key).use(router).use(ElementPlus, { locale }).mount('#app')
