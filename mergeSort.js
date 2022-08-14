const mergeSort = (array) => {
  if (array.length < 3) {
    if (array.length == 2 && array[0] > array[1]) {
      let value = array[0];
      array[0] = array[1];
      array[1] = value;
    }
    return array;
  } else {
    let leftArray = mergeSort(array.slice(0, array.length / 2));
    let rightArray = mergeSort(array.slice(array.length / 2, array.length));
    let newArray = [];
    newArray = merge(leftArray, rightArray);
    return newArray;
  }
};

const merge = (left = [], right = []) => {
  let newArray = [];

  if (left[0] <= right[0]) {
    newArray.push(left[0]);
    left.splice(0, 1);
  } else {
    newArray.push(right[0]);
    right.splice(0, 1);
  }

  if (left.length > 0 && right.length > 0) {
    newArray.push(...merge(left, right));
    return newArray;
  }
  if (left.length < 1) {
    newArray.push(...right);
    return newArray;
  }
  if (right.length < 1) {
    newArray.push(...left);
    return newArray;
  }
};
console.log(merge([1, 3], [0, 2]));

console.log(mergeSort([6, 9, 2, 1, 5, 0, 19, 4, 6, 12, 3]));

console.log(mergeSort([4, 3, 1, 2, 0]));
