/*
 * @Description:
 * @Author: 安知鱼
 * @Email: anzhiyu-c@qq.com
 * @Date: 2022-09-10 11:25:15
 * @LastEditTime: 2022-11-29 17:38:19
 * @LastEditors: 安知鱼
 */
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

import "@varlet/ui/es/style.js";

import Varlet from "@varlet/ui";
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Varlet);

app.mount("#app");
