# sexp

The [S-expression][] builder written in pure JavaScript, which lets you write a s-expression builder
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

[`S-expression`]: https://en.wikipedia.org/wiki/S-expression