const charToNumber = char => {
  switch (char) {
    case 'I':
      return 1;
    case 'V':
      return 5;
    case 'X':
      return 10;
    case 'L':
      return 50;
    case 'C':
      return 100;
    case 'D':
      return 500;
    case 'M':
      return 1000;
    default:
      break;
  }
};

exports.roman = text => {
  let num = charToNumber(text[0]);
  let cur;

  for (let i = 1; i < text.length; i++) {
    cur = charToNumber(text[i]);
    num += cur;
  }

  return num;
};
