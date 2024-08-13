/**
 * Creates a deep copy of the arg. Remember that the arg can be nested with infinite levels.
 * Use case: List copy. Object copy.
 *
 * @param {JSON serializable value} arg Any JSON serializable value
 *
 * @returns An Literal exact copy of the arg
 */
function deepClone(arg) {
  // TODO: Implement here

  if (!isObject(arg)) return {};
  
  const newObj = {};
  Object.keys(arg).forEach((key) => {
    newObj[key] = isObject(key) ? deepClone(arg[key]) : arg[key];
  });
  
  return newObj;
}

function isObject(obj) {
  const proto = Object.getPrototypeOf(obj);
  return (
    proto === null || Object.prototype.toString.call(obj) === "[object Object]"
  );
}

console.log(deepClone({ user: "sep" , address: {city: 'teh',phone:'090000000'}}));
