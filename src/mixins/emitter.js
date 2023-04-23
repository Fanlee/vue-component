/*
 * @Author: lihuan
 * @Date: 2023-04-23 17:26:25
 * @LastEditors: lihuan
 * @LastEditTime: 2023-04-23 17:53:10
 * @Description:
 */

function broadcast(componentName, eventName, params) {
  this.$children.forEach(child => {
    const name = child.$options.name;
    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      broadcast.apply(child, [componentName, eventName].concat(params));
    }
  });
}

export default {
  methods: {
    // 派发事件
    dispatch(componentName, eventName, params) {
      let parent = this.$parent || this.$root;
      let name = parent.$options.name;
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;
        if (parent) {
          name = parent.$options.name;
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    // 广播事件
    broadcast(componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params);
    }
  }
};
