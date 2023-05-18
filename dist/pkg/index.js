"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.francAll = exports.franc = void 0;
const trigram_utils_1 = require("./trigram-utils");
const expressions_js_1 = require("./expressions.js");
const data_js_1 = require("./data.js");
const MAX_LENGTH = 2048;
const MIN_LENGTH = 10;
const MAX_DIFFERENCE = 300;
const own = {}.hasOwnProperty;
let script;
const numericData = {};
for (script in data_js_1.data) {
    if (own.call(data_js_1.data, script)) {
        const languages = data_js_1.data[script];
        let name;
        numericData[script] = {};
        for (name in languages) {
            if (own.call(languages, name)) {
                const model = languages[name].split('|');
                const trigrams = {};
                let weight = model.length;
                while (weight--) {
                    trigrams[model[weight]] = weight;
                }
                numericData[script][name] = trigrams;
            }
        }
    }
}
function franc(value, options) {
    return francAll(value, options)[0][0];
}
exports.franc = franc;
function francAll(value, options = {}) {
    const only = [...(options.whitelist || []), ...(options.only || [])];
    const ignore = [...(options.blacklist || []), ...(options.ignore || [])];
    const minLength = options.minLength !== null && options.minLength !== undefined
        ? options.minLength
        : MIN_LENGTH;
    if (!value || value.length < minLength) {
        return und();
    }
    value = value.slice(0, MAX_LENGTH);
    const script = getTopScript(value, expressions_js_1.expressions);
    if (!script[0] || !(script[0] in numericData)) {
        if (!script[0] || script[1] === 0 || !allow(script[0], only, ignore)) {
            return und();
        }
        return singleLanguageTuples(script[0]);
    }
    return normalize(value, getDistances((0, trigram_utils_1.asTuples)(value), numericData[script[0]], only, ignore));
}
exports.francAll = francAll;
function normalize(value, distances) {
    const min = distances[0][1];
    const max = value.length * MAX_DIFFERENCE - min;
    let index = -1;
    while (++index < distances.length) {
        distances[index][1] = 1 - (distances[index][1] - min) / max || 0;
    }
    return distances;
}
function getTopScript(value, scripts) {
    let topCount = -1;
    let topScript;
    let script;
    for (script in scripts) {
        if (own.call(scripts, script)) {
            const count = getOccurrence(value, scripts[script]);
            if (count > topCount) {
                topCount = count;
                topScript = script;
            }
        }
    }
    return [topScript, topCount];
}
function getOccurrence(value, expression) {
    const count = value.match(expression);
    return (count ? count.length : 0) / value.length || 0;
}
function getDistances(trigrams, languages, only, ignore) {
    languages = filterLanguages(languages, only, ignore);
    const distances = [];
    let language;
    if (languages) {
        for (language in languages) {
            if (own.call(languages, language)) {
                distances.push([language, getDistance(trigrams, languages[language])]);
            }
        }
    }
    return distances.length === 0 ? und() : distances.sort(sort);
}
function getDistance(trigrams, model) {
    let distance = 0;
    let index = -1;
    while (++index < trigrams.length) {
        const trigram = trigrams[index];
        let difference = MAX_DIFFERENCE;
        if (trigram[0] in model) {
            difference = trigram[1] - model[trigram[0]] - 1;
            if (difference < 0) {
                difference = -difference;
            }
        }
        distance += difference;
    }
    return distance;
}
function filterLanguages(languages, only, ignore) {
    if (only.length === 0 && ignore.length === 0) {
        return languages;
    }
    const filteredLanguages = {};
    let language;
    for (language in languages) {
        if (allow(language, only, ignore)) {
            filteredLanguages[language] = languages[language];
        }
    }
    return filteredLanguages;
}
function allow(language, only, ignore) {
    if (only.length === 0 && ignore.length === 0) {
        return true;
    }
    return ((only.length === 0 || only.includes(language)) && !ignore.includes(language));
}
function und() {
    return singleLanguageTuples('und');
}
function singleLanguageTuples(language) {
    return [[language, 1]];
}
function sort(a, b) {
    return a[1] - b[1];
}
