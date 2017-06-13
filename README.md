# sexp

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]

The [`S-expression`][] builder written in pure JavaScript, which lets you write a s-expression builder
in JavaScript way like the following way:

```js
const sexp = require('sexp');
const func = sexp('func');
const memory = sexp('memory', 1);
const program = sexp('program', [memory, func]);
```

The above example will produce:

```
(module 
  (memory 1) (func))
```

### `S-expression`

The [`S-expression`][] is for symboltic expression that represents a nested list data.

### Installation

```sh
$ npm install sexp --save
```

### License

MIT

[npm-image]: https://img.shields.io/npm/v/sexp.svg?style=flat-square
[npm-url]: https://npmjs.org/package/sexp
[travis-image]: https://img.shields.io/travis/yorkie/node-sexp.svg?style=flat-square
[travis-url]: https://travis-ci.org/yorkie/node-sexp
[`S-expression`]: https://en.wikipedia.org/wiki/S-expression