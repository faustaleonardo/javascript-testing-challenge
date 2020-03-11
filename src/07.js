exports.repeatLetter = (text, times) => {
  const char = text.split('');
  let str = '';

  for (let i = 0; i < char.length; i++) {
    if (char[i] === ' ') str += char[i];
    else {
      for (let j = 0; j < times; j++) {
        str += char[i];
      }
    }
  }

  return str;
};
