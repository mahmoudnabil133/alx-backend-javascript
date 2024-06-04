export default function setFromArray(nums) {
  if (!(nums instanceof Array)) {
    throw new TypeError('nums should beinstance of number');
  }
  const uniqueNums = new Set();
  nums.forEach((el) => uniqueNums.add(el));
  return uniqueNums;
}

// console.log(setFromArray([1,1,2,4,5,3,2,2]))
