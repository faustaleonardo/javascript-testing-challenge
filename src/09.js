exports.symmetrical = value => {
  const chars = value.toString().split('');
  const arr = [];
  const length = Math.floor(chars.length / 2);

  for (let i = 0; i < length; i++) {
    arr.push(chars[i]);
  }

  let count = 1;
  let start = chars.length % 2 !== 0 ? length + 1 : length;
  for (let i = start; i < chars.length; i++) {
    if (chars[i] !== arr[arr.length - count]) {
      return false;
    }
    count++;
  }

  return true;
};
