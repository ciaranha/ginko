import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import { vercelEdgeAdapter } from '@builder.io/qwik-city-vercel-edge';
import tsconfigPaths from 'vite-tsconfig-paths';

import { SITE } from './src/config.mjs';

export default defineConfig(() => {
    return {
        base: SITE.basePathname,
        plugins: [
            qwikCity(),
            qwikVite(),
            vercelEdgeAdapter(),
            tsconfigPaths(),
        ],
        preview: {
            headers: {
                'Cache-Control': 'public, max-age=600',
            },
        }
    };
});
