export default function hasValuesFromArray(set, arr) {
  if (!(set instanceof Set)) {
    throw new TypeError('set should be instance of Set');
  }
  if (!(arr instanceof Array)) {
    throw new TypeError('arr should beinstance of Array');
  }
  for (el of arr) {
    if (!(set.has(el))){
      return false
    }
  }
  return true 
}
// console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1]));
// console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [10]));
// console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1, 10]));
