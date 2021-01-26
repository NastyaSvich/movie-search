const data = require('./sum');

// polyfill for older nodejs
Object.values = (obj) => Object.keys(obj).map((k) => obj[k]);

module.exports = {
  getStatesAbbrList: () => Object.keys(data.getStatesAbbrList()),
  getStatesTypeAhead: (input) => {
    if (typeof input === 'undefined' || !input.length) {
      return [];
    }
    return Object.values(data.getStatesAbbrList()).filter((state) => state.indexOf(input) === 0).slice(0, 3);
  },
  zipLookup: (zip) => {
    if (typeof zip === 'undefined' || !zip.length) {
      return Promise.reject('Zip code is required');
    }

    return data.zipLookup(zip).then((result) => result.state);
  },
};
