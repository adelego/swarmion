import svgrPlugin from 'esbuild-plugin-svgr';
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  clean: true,
  silent: true,
  format: ['cjs', 'esm'],
  outDir: 'dist',
  esbuildPlugins: [svgrPlugin()],
});
