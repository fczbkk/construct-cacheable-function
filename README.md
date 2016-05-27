# constructCacheableFunction

Converts regular function into cacheable one, which returns result for known arguments immediately, without calling the original function first.

## Documentation

### constructCacheableFunction

Converts function into cacheable version. It remembers result of all calls of the function. If a call is made with known parameters, it immediately returns cached result, without calling the original function.

**Parameters**

-   `fn` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** Original function.

Returns **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** Cacheable version of original function.

## Bug reports, feature requests and contact

If you found any bugs, if you have feature requests or any questions, please, either [file an issue at GitHub](https://github.com/fczbkk/construct-cacheable-function/issues) or send me an e-mail at <a href="mailto:riki@fczbkk.com">riki@fczbkk.com</a>.

## License

constructCacheableFunction is published under the [MIT license](https://github.com/fczbkk/construct-cacheable-function/blob/master/LICENSE).
