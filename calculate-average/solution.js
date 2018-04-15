function find_average(array) {
  let total = 0;
  return array.reduce((total, array) => total + array) / array.length;
}