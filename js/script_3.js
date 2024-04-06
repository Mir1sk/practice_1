


function calculete(num, howMuch) {
  res = num;
  for (let i = 1; i < howMuch; i++) {
    res *= num
    console.log(res);
  }
  return res;
}

console.log(calculete(2, 12));


function factorial(n) {
  if (typeof n == 'string' || !Number.isInteger(n)) {
      return 'Sosi';
  }
  // let result = 1;
  // for (let i = 1; i < n; i++) {
  //     result *= (i + 1);
  // }
  // return result;
  if (n >= 1) {
      return n * factorial(n - 1);
  } else {
      return 1;
  }

}