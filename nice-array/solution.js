function isNice(arr){
  if (arr.length < 1){
    return false;
  }
  for(let i = 0; i < arr.length; i++){
    let num = arr[i];

    let hasLesser = arr.includes(num - 1);

    let hasGreater = arr.includes(num + 1);

    if(hasLesser === false && hasGreater === false){
      return false;
    }
  }
  return arr.length > 1;
}
