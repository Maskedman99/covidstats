export const formatNumber = num => {
  return num === undefined ? '' : num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const shortenCountryName = country => {
  let shortCountryName = country;

  switch (country) {
    case 'United States of America':
      shortCountryName = 'USA';
      break;
    case 'United Kingdom':
      shortCountryName = 'UK';
      break;
    case 'Russian Federation':
      shortCountryName = 'Russia';
      break;
  }

  return shortCountryName;
};
