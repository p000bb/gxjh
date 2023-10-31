const toString = Object.prototype.toString;

/*
 判断是否为boolean类型
*/
export const isBoolean = (val: unknown): val is boolean => {
  return toString.call(val) === "[object Boolean]";
};

/*
 判断是否为function
*/
export const isFunction = (val: unknown): val is Function => {
  return toString.call(val) === "[object Function]";
};
