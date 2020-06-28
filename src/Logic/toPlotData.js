export const toPlotDataFormat = historicalData => {
  let x = [];
  let y = [];

  let temp = 0;
  Object.entries(historicalData).map(obj => {
    x.push({date: obj[0], count: obj[1]});
    y.push({date: obj[0], count: obj[1] - temp});
    temp = obj[1];
  });

  return {cumilative: x, daily: y};
};

export const labelIndicesToHide = labelsCount => {
  if (labelsCount < 15) {
    return [];
  }

  let hideXLabels = [...Array(labelsCount).keys()];
  hideXLabels.splice(labelsCount - 1, 1);
  hideXLabels.splice(Math.floor((labelsCount - 2) / 4), 1);
  hideXLabels.splice(Math.floor((labelsCount - 3) / 2), 1);
  hideXLabels.splice(Math.floor((3 * (labelsCount - 4)) / 4), 1);
  hideXLabels.splice(0, 1);

  return hideXLabels;
};
