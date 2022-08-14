const fibs = (number) => {
  let resultArray = [];

  for (i = 0; i < number; i++) {
    if (i == 0) {
      resultArray.push(0);
    } else if (i == 1) {
      resultArray.push(1);
    } else {
      resultArray.push(resultArray[i - 1] + resultArray[i - 2]);
    }
  }

  return resultArray;
};

console.log(fibs(8));
console.log(fibs(15));

const fibsTailRec = (length, arr = [0, 1]) =>
  length <= 2
    ? arr
    : fibsTailRec(
        length - 1,
        arr.concat(arr[arr.length - 1] + arr[arr.length - 2])
      );

console.log(fibsTailRec(4));
