import constructCacheableFunction from './../src/';


describe('constructCacheableFunction', function () {

  it('should exist', function () {
    expect(constructCacheableFunction).toBeDefined();
    expect(typeof constructCacheableFunction).toEqual('function');
  });

  it('should return correct result', function () {
    const fn = function (input) {return input;};
    const cacheable_fn = constructCacheableFunction(fn);
    expect(cacheable_fn('aaa')).toEqual('aaa');
  });

  it('should return cached result', function () {
    const spy = jasmine.createSpy('sub_function');
    const fn = function (input) {
      spy();
      return input;
    };
    const cacheable_fn = constructCacheableFunction(fn);

    // make two calls
    // both should return correct result
    expect(cacheable_fn('aaa')).toEqual('aaa');
    expect(cacheable_fn('aaa')).toEqual('aaa');
    // only one should go through original function
    expect(spy).toHaveBeenCalledTimes(1);

  });

});
