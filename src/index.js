/**
 * Converts function into cacheable version. It remembers result of all calls of the function. If a call is made with known parameters, it immediately returns cached result, without calling the original function.
 * @name constructCacheableFunction
 * @param {Function} fn Original function.
 * @returns {Function} Cacheable version of original function.
 */
export default function (fn) {
  const memory = {};

  return function () {
    const key = JSON.stringify(arguments);
    if (typeof memory[key] === 'undefined') {
      memory[key] = fn.apply(fn, arguments);
    }
    return memory[key];
  }
}
