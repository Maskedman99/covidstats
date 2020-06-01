export const formatNumber = num => {
  return num === undefined ? '' : num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
