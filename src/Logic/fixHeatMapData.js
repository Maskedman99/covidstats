export const historicalToHeatMapData = historicalData => {
  let x = [];
  Object.entries(historicalData).map(obj => {
    x.push({date: fixDate(obj[0]), count: obj[1]});
  });

  return x;
};

const fixDate = badDate => {
  let temp = `${badDate}20`.split('/');
  return `${temp[2]}-${temp[0]}-${temp[1]}`;
};
