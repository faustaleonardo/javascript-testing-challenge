exports.arrayMirroring = numberList => {
  const newNumberList = [...numberList];

  for (let i = numberList.length - 1; i >= 0; i--) {
    newNumberList.push(numberList[i]);
  }

  return newNumberList;
};
