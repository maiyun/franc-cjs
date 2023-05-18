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

自然言語検出ライブラリの CommonJS バージョン。

## インストール

### NPM

npm コマンドを使用して直接インストールすることができます。

```sh
$ npm i franc-cjs --save
```

### CDN

ブラウザで使用する場合は、CDNモードを使用できます：

```html
<script src="https://cdn.jsdelivr.net/npm/@litert/loader@3.5.0/dist/loader.min.js?path=index&npm={'franc-cjs':'6.1.0.0'}"></script>
```

## 使用

デモコードは TypeScript で書かれています。

```typescript
import * as franc from './index';

franc.francAll('Сегодня погода такая хорошая, ты что думаешь? Я думаю, что просто так.');  // [['rus', 0.988008623012665], ['bos', 0.9611964430072757], ... ]
franc.franc('O tempo está realmente bom hoje, o que você acha? Eu acho que é isso.');  // por
franc.franc('The weather is really nice today, don\'t you think? I think it\'s just perfect.');  // eng
franc.franc('今日の天気はとてもいいですね、どう思いますか？私はこれがちょうどいいと思います。');  // jpn
franc.franc('今天的天气真好，你觉得呢？我觉得就是这样。');  // cmn
```

## サンプル

### Node

正しくコンパイルした後、ターミナルで `node ./dist/test-node` を使用してサンプルコードを実行できます。

### ブラウザ

ブラウザで `test/` ディレクトリにアクセスしてサンプルを表示できます。

[ここをクリックしてオンラインでサンプルを表示](https://maiyun.github.io/franc-cjs/test/)

## オリジナル

このライブラリは [franc](https://github.com/wooorm/franc) ライブラリの CommonJS バージョンです。ESM only のバージョンが必要な場合は、オリジナルのライブラリを直接使用してください。このライブラリは [franc](https://github.com/wooorm/franc) ライブラリと同期して更新されます。

## ライセンス

このライブラリは [MIT](../LICENSE) ライセンスで提供されています。