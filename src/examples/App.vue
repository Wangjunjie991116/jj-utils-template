<template>
  <div id="app">
    <div>jj-utils-template</div>
    <div>
      <div>===={{ demo }}====</div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { add } from "../index";

export default defineComponent({
  data() {
    return {};
  },
  setup() {
    console.log("jj-utils-template");
    const demo = add(1, 5);
    return {
      abc: 123,
      demo,
    };
  },
});
</script>
