import Vue from "vue";
import Router from "vue-router";

// page components
import LayoutMain from '../views/layouts/LayoutMain.vue'
import main from '../components/main/main_index.vue'

Vue.use(Router);


export default new Router({
    routes : [
        {
            path: "/",
            component: LayoutMain,
            children : [
                {
                    path : "/",
                    redirect : "/main"
                },
                {
                    path : "/main",
                    name : "main",
                    component: main,
                }
            ]
        }
    ]
});