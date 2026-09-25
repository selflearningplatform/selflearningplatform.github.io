import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://selflearningplatform.github.io',
  build: { format: 'file' },
  trailingSlash: 'never',
  redirects: { '/docs': '/docs/overview', '/docs/cli': '/docs/deploy' },
});
