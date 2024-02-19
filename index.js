import query from './src/query.js';

'use strict';

function clone(obj) {
  const result = Object.prototype.toString.call(obj)
    .match(/\s([a-zA-Z]+)/)[1].toLowerCase() === "array" ? [] : {};
  for (const [key, value] of Object.entries(obj)) {
    result[key] = typeof(value) === "object" && value !== null ? clone(value) : value;
  }
  return result;
}

function spread(obj, seperator) {
  if (!seperator) {
    seperator = "/";
  }

  function A(value) {
    const result = {};
    for (const [_key, _value] of Object.entries(value)) {
      for (const [__key, __value] of B(_key, _value)) {
        result[__key] = __value;
      }
    }
    return result;
  }

  function B(key, value) {
    let result = [];
    if (typeof(value) === "object" && value !== null) {
      for (const [_key, _value] of Object.entries(value)) {
        result = result.concat(B(key+seperator+_key, _value));
      }
    } else {
      result.push([key, value]);
    }
    return result;
  }

  return A(obj);
}

export default {
  clone: clone,
  spread: spread,
  query: query,
}
