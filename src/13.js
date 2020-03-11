const getMode = dataset => {
  const numbers = {};
  let mode = {};

  dataset.forEach(el => {
    if (!numbers[el]) numbers[el] = 1;
    else numbers[el]++;
  });

  for (let keys in numbers) {
    if (numbers[keys] > 1) {
      if (Object.keys(mode).length === 0) mode[keys] = numbers[keys];
      else {
        const count = Object.values(mode)[0];
        if (count === numbers[keys]) mode[keys] = numbers[keys];
        else if (numbers[keys] > count) {
          mode = {};
          mode[keys] = numbers[keys];
        }
      }
    }
  }

  return mode;
};

exports.stats = dataset => {
  const sum = dataset.reduce((acc, cur) => acc + cur, 0);

  const count = dataset.length;

  const mean = (sum / count).toFixed(12) * 1;

  const mid = dataset.length / 2;

  const median =
    dataset.length % 2 !== 0
      ? dataset[Math.floor(mid)]
      : (dataset[mid - 1] + dataset[mid]) / 2;

  const largest = Math.max(...dataset);

  const smallest = Math.min(...dataset);

  const range = largest - smallest;

  const modeData = getMode(dataset);

  const mode = `${Object.keys(modeData).join(', ')}, each appeared ${
    Object.values(modeData)[0]
  } times`;

  return {
    mean,
    median,
    range,
    mode,
    largest,
    smallest,
    sum,
    count
  };
};
