export const historicalToHeatMapData = historicalData => {
  let x = [];
  let y = [];

  let temp = 555;
  Object.entries(historicalData).map(obj => {
    x.push({date: fixDate(obj[0]), count: obj[1]});
    y.push({date: fixDate(obj[0]), count: obj[1] - temp});
    temp = obj[1];
  });

  return {cumilative: x, actual: y};
};

const fixDate = badDate => {
  let temp = `${badDate}20`.split('/');
  return `${temp[2]}-${temp[0]}-${temp[1]}`;
};
