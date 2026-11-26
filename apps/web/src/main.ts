import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import vuetify from './plugins/vuetify';
import { initAuth } from './auth/keycloak';

try {
  await initAuth();
} catch (e) {
  console.error('Init auth error', e);

  document.getElementById('app')!.textContent =
    'Login service unavailable. Please try again later.';

  throw e;
}

const { default: router } = await import('./router');

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);

app.mount('#app');
