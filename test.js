'use strict';

const sexp = require('./');
const assert = require('assert');

const func = sexp('func');
const memory = sexp('memory', 1);
const program = sexp('program', [memory, func]);

assert.equal(func.toString(), '(func)');
assert.equal(memory.toString(), '(memory 1)');
assert.equal(program.toString(), '(program (memory 1) (func))');
