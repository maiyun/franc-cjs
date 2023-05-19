# Franc CJS

<p align="center">
    <a href="https://github.com/maiyun/franc-cjs/blob/master/LICENSE">
        <img alt="License" src="https://img.shields.io/github/license/maiyun/franc-cjs?color=blue" />
    </a>
    <a href="https://www.npmjs.com/package/franc-cjs">
        <img alt="NPM stable version" src="https://img.shields.io/npm/v/franc-cjs?color=brightgreen&logo=npm" />
    </a><br>
    <a href="https://github.com/maiyun/franc-cjs/releases">
        <img alt="GitHub releases" src="https://img.shields.io/github/v/release/maiyun/franc-cjs?color=brightgreen&logo=github" />
    </a>
    <a href="https://github.com/maiyun/franc-cjs/issues">
        <img alt="GitHub issues" src="https://img.shields.io/github/issues/maiyun/franc-cjs?color=blue&logo=github" />
    </a>
</p>

自然语言检测库 CommonJS 版。

## 安装

### NPM

你可以直接通过 npm 命令进行安装。

```sh
$ npm i franc-cjs --save
```

### CDN

如果你在浏览器中使用，可以使用 CDN 模式：

```html
<script src="https://cdn.jsdelivr.net/npm/@litert/loader@3.5.0/dist/loader.min.js?path=index&npm={'franc-cjs':'6.1.0-patch.3'}"></script>
```

## 使用

演示代码使用 Typescript 语言编写。

```typescript
import * as franc from './index';

franc.francAll('Сегодня погода такая хорошая, ты что думаешь? Я думаю, что просто так.', {
    'only': ['cmn', 'rus', 'jpn']
});  // [['rus', 1]]
franc.franc('O tempo está realmente bom hoje, o que você acha? Eu acho que é isso.');  // por
franc.franc('The weather is really nice today, don\'t you think? I think it\'s just perfect.');  // eng
franc.franc('今日の天気はとてもいいですね、どう思いますか？私はこれがちょうどいいと思います。');  // jpn
franc.franc('今天的天气真好，你觉得呢？我觉得就是这样。');  // cmn
```

## 示例

### Node

正确编译后，在终端中使用 `node ./dist/test-node` 就可以运行示例代码。

### 浏览器

在浏览器中访问 `test/` 目录即可查看示例。

[点击此处在线查看示例](https://maiyun.github.io/franc-cjs/test/)

## 原始

本库是 [franc](https://github.com/wooorm/franc) 库的 CommonJS 版。如果你需要 ESM only 的版本，请直接使用原始库。本库与 [franc](https://github.com/wooorm/franc) 库同步更新。

## 许可

本库使用 [MIT](../LICENSE) 许可。