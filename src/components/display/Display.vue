<!--
 * @Author: lihuan
 * @Date: 2023-04-24 15:35:46
 * @LastEditors: lihuan
 * @LastEditTime: 2023-04-24 16:03:46
 * @Description: 
-->
<template>
  <div ref="display"></div>
</template>

<script>
import randomStr from "../../utils/random.js";
export default {
  props: {
    code: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      id: randomStr(),
      component: null,
      html: "",
      js: "",
      css: "",
    };
  },
  methods: {
    getSource(source, type) {
      const regex = new RegExp(`<${type}[^>]*>`);
      let openingTag = source.match(regex);
      if (!openingTag) return "";
      else openingTag = openingTag[0];
      return source.slice(
        source.indexOf(openingTag) + openingTag.length,
        source.lastIndexOf(`</${type}>`)
      );
    },
    splitCode() {
      const script = this.getSource(this.code, "script").replace(
        /export default/,
        "return "
      );
      const style = this.getSource(this.code, "style");
      const template =
        '<div id="app">' + this.getSource(this.code, "template") + "</div>";
      this.js = script;
      this.css = style;
      this.html = template;
    },
    renderCode() {
      this.splitCode();
      if (this.html !== "" && this.js !== "") {
        const parseStrToFunc = new Function(this.js)();
        parseStrToFunc.template = this.html;
        const Component = Vue.extend(parseStrToFunc);
        this.component = new Component().$mount();
        this.$refs.display.appendChild(this.component.$el);
        if (this.css !== "") {
          const style = document.createElement("style");
          style.id = this.id;
          style.innerHTML = this.css;
          document.getElementsByTagName("head")[0].appendChild(style);
        }
      }
    },
    destroyCode() {
      const $target = document.getElementById(this.id);
      if ($target) $target.parentNode.removeChild($target);

      if (this.component) {
        this.$refs.display.removeChild(this.component.$el);
        this.component.$destroy();
        this.component = null;
      }
    },
  },
  mounted() {
    this.renderCode();
  },
  beforeDestroy() {
    this.destroyCode();
  },
  watch: {
    code() {
      this.destroyCode();
      this.renderCode();
    },
  },
};
</script>

<style  scoped>
</style>