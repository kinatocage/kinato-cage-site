import { defineConfig } from 'vite';

export default defineConfig({
  // 相対パスベースでビルドすることで、サブディレクトリ（/sim/ など）への配置にも柔軟に対応
  base: './',
  server: {
    port: 5173,
    host: true
  }
});
