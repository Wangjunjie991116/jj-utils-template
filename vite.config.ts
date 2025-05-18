import { defineConfig } from "vite";
import vue2 from "@vitejs/plugin-vue2";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    vue2(),
    dts({
      // 指定需要打包的文件和目录
      include: ["src/**/*.ts", "src/**/*.vue"],
      // 排除不需要打包的文件和目录
      exclude: ["src/components/**", "src/examples/**"],
      // 在写入文件之前进行处理
      beforeWriteFile: (filePath, content) => ({
        filePath: filePath.replace(/src\//, ""),
        content,
      }),
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "jj-utils-template",
      fileName: (format) => `jj-utils-template.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  // 添加开发服务器配置
  server: {
    port: 3333,
    host: true, // 允许局域网访问
    watch: {
      usePolling: true, // 使用轮询监听文件变化
    },
  },
});
