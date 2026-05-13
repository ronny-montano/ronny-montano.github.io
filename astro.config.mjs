import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ronny-montano.github.io',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
