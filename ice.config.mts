import { defineConfig } from '@ice/app';

// The project config, see https://v3.ice.work/docs/guide/basic/config
const minify = false;
export default defineConfig(() => ({
  // Set your configs here.
  minify,
  outputDir: 'dist',
  publicPath: '/for-love/',
}));
