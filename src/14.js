exports.isIsogram = text => {
  const uniqueChars = {};

  const chars = text.split('');
  let isUnique = true;
  chars.forEach(el => {
    if (!uniqueChars[el]) uniqueChars[el] = true;
    else {
      isUnique = false;
      return;
    }
  });

  return isUnique;
};
