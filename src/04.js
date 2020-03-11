exports.isLeapYear = number => {
  const checkFirstCondition = number => number % 400 === 0;
  const checkSecondCondition = number =>
    number % 100 !== 0 && number % 400 !== 0 && number % 4 === 0;

  return checkFirstCondition(number) || checkSecondCondition(number);
};
