/*
 * @Author: lihuan
 * @Date: 2023-04-23 17:03:49
 * @LastEditors: lihuan
 * @LastEditTime: 2023-04-23 17:24:37
 * @Description:
 */
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  routes: [
    // {
    //   path: "/foo",
    //   component: component1
    // },
    // {
    //   name: "bar",
    //   path: "/bar/:userId",
    //   component: component2,
    //   props: route => ({ query: route.query.q })
    // },
    // {
    //   name: "baz",
    //   path: "/baz",
    //   component: component3
    // },
    // {
    //   path: "*",
    //   component: component4
    // }
  ]
});

// router.beforeEach((to, from, next) => {
//   console.log("to", to);
//   console.log("from", from);
//   console.log("next", next);
//   next();
// });

export default router;
