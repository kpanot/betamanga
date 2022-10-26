import './app.css';
import App from './App.svelte';
import { AuthApi, Configuration } from '@betamanga/sdk';

const app = new App({
  target: document.getElementById('app'),
});

// test to get bearer
void (async () => {
  const authApi = new AuthApi(
    new Configuration({
      basePath: 'http://localhost:3000',
    }),
  );

  const { accessToken } = await authApi.authLogin({
    postBasicAuthParameter: { password: 'test', username: 'kilian' },
  });
  console.log(`bearer token: ${accessToken}`);
})();

export default app;
