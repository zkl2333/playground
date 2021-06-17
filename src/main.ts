import { createApp } from "vue";
import App from "./App.vue";
import { registerMicroApps, start } from "qiankun";
import { appList } from "./applist";

registerMicroApps(appList);

start({
  sandbox: {
    experimentalStyleIsolation: true,
  },
});

createApp(App).mount("#app");
