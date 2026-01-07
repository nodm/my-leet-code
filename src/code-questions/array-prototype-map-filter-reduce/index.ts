// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Array<T> {
  customMap<U>(
    callback: (value: T, index: number, array: T[]) => U,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    thisArg?: any,
  ): U[];
  customReduce<U>(
    callback: (accumulator: U, value: T, index: number, array: T[]) => U,
    initialValue?: U,
  ): U;
  customFilter(
    callback: (value: T, index: number, array: T[]) => boolean,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    thisArg?: any,
  ): T[];
}

/**
 * Array.prototype.map
 */
Array.prototype.customMap = function map<T, U>(
  callback: (value: T, index: number, array: T[]) => U,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  thisArg?: any,
): U[] {
  if (typeof callback !== 'function') {
    throw new TypeError(`${typeof callback} ${callback}  is not a function`);
  }

  const o = Object(this);
  const length = o.length >>> 0;

  const result: U[] = new Array<U>(length);

  for (let i = 0; i < length; i += 1) {
    if (i in o) {
      result[i] = callback.call(thisArg, o[i], i, o);
    }
  }

  return result;
};

/**
 * Array.prototype.filter
 */
Array.prototype.customFilter = function filter<T>(
  callback: (value: T, index: number, array: T[]) => boolean,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  thisArg?: any,
): T[] {
  if (typeof callback !== 'function') {
    throw new TypeError(`${typeof callback} ${callback}  is not a function`);
  }

  const o = Object(this);
  const length = o.length >>> 0;

  const result: T[] = [];

  for (let i = 0; i < length; i += 1) {
    if (i in o) {
      if (callback.call(thisArg, o[i], i, o)) {
        result.push(o[i]);
      }
    }
  }

  return result;
};

/**
 * Array.prototype.reduce
 */
Array.prototype.customReduce = function reduce<T, U>(
  callback: (accumulator: U, value: T, index: number, array: T[]) => U,
  initialValue?: U,
): U {
  if (typeof callback !== 'function') {
    throw new TypeError(`${typeof callback} ${callback}  is not a function`);
  }

  const o = Object(this);
  const length = o.length >>> 0;

  let accumulator: U;
  let k = 0;

  if (arguments.length > 1) {
    accumulator = initialValue!; // guaranteed by the check above
  } else {
    while (k < length && !(k in o)) {
      k += 1;
    }

    if (k === length) {
      throw new TypeError('Reduce of empty array with no initial value');
    }

    accumulator = o[k];
    k += 1;
  }
  for (; k < length; k += 1) {
    if (k in o) {
      accumulator = callback(accumulator, o[k], k, o);
    }
  }

  return accumulator;
};
