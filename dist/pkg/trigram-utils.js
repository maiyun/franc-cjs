"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tuplesAsDictionary = exports.asTuples = exports.asDictionary = exports.trigrams = exports.clean = void 0;
const n_gram_1 = require("./n-gram");
const collapse_white_space_1 = require("./collapse-white-space");
const own = {}.hasOwnProperty;
function clean(value) {
    if (value === null || value === undefined) {
        return '';
    }
    return (0, collapse_white_space_1.collapseWhiteSpace)(String(value).replace(/[\u0021-\u0040]+/g, ' '))
        .trim()
        .toLowerCase();
}
exports.clean = clean;
function trigrams(value) {
    return (0, n_gram_1.trigram)(' ' + clean(value) + ' ');
}
exports.trigrams = trigrams;
function asDictionary(value) {
    const values = trigrams(value);
    const dictionary = {};
    let index = -1;
    while (++index < values.length) {
        if (own.call(dictionary, values[index])) {
            dictionary[values[index]]++;
        }
        else {
            dictionary[values[index]] = 1;
        }
    }
    return dictionary;
}
exports.asDictionary = asDictionary;
function asTuples(value) {
    const dictionary = asDictionary(value);
    const tuples = [];
    let trigram;
    for (trigram in dictionary) {
        if (own.call(dictionary, trigram)) {
            tuples.push([trigram, dictionary[trigram]]);
        }
    }
    tuples.sort(sort);
    return tuples;
}
exports.asTuples = asTuples;
function tuplesAsDictionary(tuples) {
    const dictionary = {};
    let index = -1;
    while (++index < tuples.length) {
        dictionary[tuples[index][0]] = tuples[index][1];
    }
    return dictionary;
}
exports.tuplesAsDictionary = tuplesAsDictionary;
function sort(a, b) {
    return a[1] - b[1];
}
