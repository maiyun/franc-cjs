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

Natural language detection library for CommonJS.

## Languages

[简体中文](doc/README.sc.md) | [繁體中文](doc/README.tc.md) | [日本語](doc/README.ja.md)

## Installation

### NPM

You can install it directly through the npm command.

```sh
$ npm i franc-cjs --save
```

### CDN

If you're using it in a browser, you can utilize the CDN mode.

```html
<script src="https://cdn.jsdelivr.net/npm/@litert/loader@3.5.0/dist/loader.min.js?path=index&npm={'franc-cjs':'6.1.0.0'}"></script>
```

## Usage

Demo code is written using TypeScript.

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

## Test

### Node

Once it's compiled correctly, you can run the sample code in the terminal by using `node ./dist/test-node`.

### Browser

To view the examples, simply access the `test/` directory in your browser.

[Click here to view the examples online](https://maiyun.github.io/franc-cjs/test/)

## Original

This library is the CommonJS version of [franc](https://github.com/wooorm/franc) library. If you need the ESM-only version, please use the original version directly. This library will be updated in sync with [franc](https://github.com/wooorm/franc) library.

## License

This library is published under [MIT](./LICENSE) license.