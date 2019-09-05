function squareDigits(num) {
  let strNum = num.toString().split("");
  return strNum.reduce((acc, cur) => {
    return acc += cur * cur;
  }, "") * 1;
}