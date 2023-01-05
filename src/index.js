module.exports = function reverse (n) {

  if(n < 0){
    n = n * (-1);
  }

  let arr = Array.from(String(n));

  for (let i = 0; i < (arr.length / 2); i++){
    let x = arr.at(-1-i);
    arr[arr.length-(1+i)] = arr[i];
    arr[i] = x;
  }
  
  return Number(arr.join(''));
}
