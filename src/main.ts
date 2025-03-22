import { VueQueryPlugin } from '@tanstack/vue-query';
import { createApp } from 'vue';

import App from './App.vue';
import { router } from './router';

const app = createApp(App);

app.use(router);

app.use(VueQueryPlugin, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  },
});

app.mount('#app');
