function cubeOdd(arr) {
  for(let i = 0; i < arr.length; i++)
    if(typeof arr[i] !== 'number')
      return undefined;
  return arr.filter(a => Math.abs(a%2) === 1).map(b => Math.pow(b, 3)).reduce((c,d) => c+d, 0);
}