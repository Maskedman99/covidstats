export const historicalToHeatMapData = historicalData => {
  let x = [];
  let y = [];

  let temp = 555;
  Object.entries(historicalData).map(obj => {
    x.push({date: fixDate(obj[0]), count: obj[1]});
    y.push({date: fixDate(obj[0]), count: obj[1] - temp});
    temp = obj[1];
  });

  return {cumilative: x, daily: y};
};

const fixDate = badDate => {
  let temp = `${badDate}20`.split('/');
  return `${temp[2]}-${temp[0]}-${temp[1]}`;
};

export const labelIndicesToHide = labelsCount => {
  let hideXLabels = [...Array(labelsCount).keys()];
  hideXLabels.splice(Math.floor(labelsCount / 4), 1);
  hideXLabels.splice(Math.floor(labelsCount / 2), 1);
  hideXLabels.splice(Math.floor((3 * labelsCount) / 4), 1);
  hideXLabels.splice(0, 1);
  hideXLabels.splice(labelsCount - 5, 1);

  return hideXLabels;
};
