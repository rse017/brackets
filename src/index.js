module.exports = function check(str, bracketsConfig) {
  const val = bracketsConfig.reduce((a, b) => {
    a[b[0]] = b[1];
    return a;
  }, {})

  const arr = [];
  for (let i = 0; i < str.length; i++) {
    const c = arr[arr.length - 1];
    const d = str[i];
    if (val[c] == d) {
      arr.pop();
      continue;
    } if (val[d]) {
      arr.push(d);
      continue;
    } if (arr.length == 0) {
      return false;
    }
  }
  return arr.length == 0
}