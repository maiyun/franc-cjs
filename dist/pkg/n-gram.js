"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nGram = exports.trigram = exports.bigram = void 0;
exports.bigram = nGram(2);
exports.trigram = nGram(3);
function nGram(n) {
    if (typeof n !== 'number' ||
        Number.isNaN(n) ||
        n < 1 ||
        n === Number.POSITIVE_INFINITY) {
        throw new Error('`' + n + '` is not a valid argument for `n-gram`');
    }
    return grams;
    function grams(value) {
        const nGrams = [];
        if (value === null || value === undefined) {
            return nGrams;
        }
        const source = typeof value.slice === 'function' ? value : String(value);
        let index = source.length - n + 1;
        if (index < 1) {
            return nGrams;
        }
        while (index--) {
            nGrams[index] = source.slice(index, index + n);
        }
        return nGrams;
    }
}
exports.nGram = nGram;
