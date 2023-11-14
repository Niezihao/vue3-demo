import "./assets/main.css";

import { createApp, type DirectiveBinding } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.directive("demo",  {

    updated(el: HTMLInputElement,binding: DirectiveBinding) {
        if (!binding.value) {
            console.log('---------',el);
            console.log('---------1', el.parentNode);
            
            el.style.visibility  = "hidden";
            // el.parentNode && el.parentNode.removeChild && el.parentNode.removeChild(el)
          }
    },
});
app.mount("#app");
