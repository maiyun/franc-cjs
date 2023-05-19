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

自然語言檢測庫 CommonJS 版本。

## 安裝

### NPM

你可以直接使用 npm 命令進行安裝。

```sh
$ npm i franc-cjs --save
```

### CDN

如果你在瀏覽器中使用，可以使用 CDN 模式：

```html
<script src="https://cdn.jsdelivr.net/npm/@litert/loader@3.5.0/dist/loader.min.js?path=index&npm={'franc-cjs':'6.1.0.0'}"></script>
```

## 使用

演示代碼使用 TypeScript 語言編寫。

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

## 範例

### Node

在正確編譯之後，你可以在終端中使用 `node ./dist/test-node` 執行範例代碼。

### 瀏覽器

在瀏覽器中訪問 `test/` 目錄即可查看範例。

[點擊此處在線查看範例](https://maiyun.github.io/franc-cjs/test/)

## 原始

此庫是 [franc](https://github.com/wooorm/franc) 庫的 CommonJS 版本。如果您需要 ESM only 的版本，請直接使用原始庫。此庫將與 [franc](https://github.com/wooorm/franc) 庫同步更新。

## 許可

此庫使用 [MIT](../LICENSE) 許可。