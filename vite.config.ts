import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import obfuscator from 'rollup-plugin-obfuscator';
const postcssPresetEnv = require("postcss-preset-env");
import obfuscatorPlugin from 'rollup-plugin-javascript-obfuscator';

const obfuscatorConfig: any = {
  global: false, // 是否禁用混淆全局作用域的代码
  options: {
    compact: true, // 启用代码的紧凑模式，删除不必要的空白字符和注释
    controlFlowFlattening: true, // 启用控制流混淆，使代码的控制流程变得更加复杂，从而增加代码的难以理解性
    controlFlowFlatteningThreshold: 0.75, // 控制流混淆的阈值，影响混淆程度
    numbersToExpressions: true, // 将数字转换为表达式，增加代码的复杂性
    simplify: true, // 启用简化，用于删除不必要的代码
    stringArrayShuffle: true, // 打乱字符串数组，使字符串更难以理解
    splitStrings: true, // 将字符串拆分成小块，增加代码的复杂性
    splitStringsChunkLength: 10, // 控制字符串拆分的块大小
    rotateUnicodeArray: true, // 旋转 Unicode 字符数组，增加代码的混淆度
    deadCodeInjection: true, // 开启膨胀，插入死代码，使代码更复杂，阻碍逆向工程
    deadCodeInjectionThreshold: 0.4, // 死代码注入的阈值
    debugProtection: false, // 启用调试保护
    debugProtectionInterval: 2000, // 控制调试保护的间隔
    // disableConsoleOutput: true, // 禁用控制台输出
    identifierNamesGenerator: 'hexadecimal',  // 控制混淆后的标识符名称生成方式
    log: false,
    // renameGlobals: true, // 重命名全局变量
    selfDefending: true, // 启用自我保护模式
    sourceMap: false, // 生成源映射文件
    stringArray: true, // 启用字符串数组混淆
    stringArrayEncoding: ["base64"], // 字符串数组的编码方式，如 "base64"
    stringArrayThreshold: 0.75, // 控制字符串数组混淆的阈值
    target: "browser", // 目标环境，如 "browser"
    transformObjectKeys: true, // 转换对象键名
    unicodeEscapeSequence: true, // 启用 Unicode 转义序列

    domainLockRedirectUrl: "about:blank", // 域名锁定重定向的URL
    forceTransformStrings: [], //强制转换字符串的列表
    identifierNamesCache: null, // 标识符名称的缓存
    identifiersDictionary: [], // 标识符字典，用于自定义标识符名称
    ignoreImports: true, // 是否忽略导入的模块
    optionsPreset: "default", // 预定义的配置选项集
    renameProperties: false, // 是否重命名对象属性
    renamePropertiesMode: "safe", // 对象属性重命名模式
    sourceMapSourcesMode: "sources-content", // 源映射的模式

    stringArrayCallsTransform: true, // 是否转换字符串数组调用
    stringArrayCallsTransformThreshold: 0.5, // 字符串数组调用转换的阈值

    stringArrayIndexesType: ["hexadecimal-number"], // 字符串数组索引的类型
    stringArrayIndexShift: true, // 是否进行字符串数组索引的位移
    stringArrayRotate: true, // 是否旋转字符串数组
    stringArrayWrappersCount: 1, // 字符串数组包装器的数量
    stringArrayWrappersChainedCalls: true, // 是否启用字符串数组包装器的链接调用
    stringArrayWrappersParametersMaxCount: 2, // 字符串数组包装器的参数最大数量
    stringArrayWrappersType: "variable", // 字符串数组包装器的类型
  },
};
//
export default defineConfig({
  plugins: [react(), svgr()], // ,obfuscator(obfuscatorConfig)
  css: {
    postcss: {
      plugins: [postcssPresetEnv()]
    }
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  build: {
    chunkSizeWarningLimit: 15000,
    rollupOptions: {
      output: {
        manualChunks(id: string, meta: any) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
            // return "vendor"
          }
          // return id.toString()
        },
        assetFileNames: (assetInfo: any) => {
          var info = assetInfo.name.split(".");
          var extType = info[info.length - 1];
          if (
            /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name)
          ) {
            extType = "media";
          } else if (/\.(png|jpe?g|gif|svg)(\?.*)?$/.test(assetInfo.name)) {
            extType = "img";
          } else if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/i.test(assetInfo.name)) {
            extType = "fonts";
          }
          return `assets/${extType}/[hash][extname]`;
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js"
      }
    },
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
    // watch: {}
  }
});
