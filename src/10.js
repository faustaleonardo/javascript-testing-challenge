const generateAsterisk = (length, symbol) => {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += symbol;
  }
  return result;
};

exports.censor = (text, censorWords, censorSymbol = '#') => {
  const words = text.split(' ');
  for (let key in words) {
    let censorWord = censorWords.find(
      censorWord => censorWord === words[key].toLowerCase()
    );
    if (censorWord) {
      words[key] = generateAsterisk(words[key].length, censorSymbol);
    }
  }

  return words.join(' ');
};
