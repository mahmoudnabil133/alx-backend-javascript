export default function appendToEachArrayValue(array, appendString) {
  for (const el of array) {
    array[idx] = appendString + el;
  }

  return array;
}
  