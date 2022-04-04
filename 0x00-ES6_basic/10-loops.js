export default function appendToEachArrayValue(array, appendString) {
  const newArr = [];
  for (let idx of array) {
    const value = idx;
    idx = appendString + value;
    newArr.push(idx);
  }

  return newArr;
}
