const loadFishes = require('./fishes');
const writeFishes = require('./fishDom');

const whenFishesLoad = (data) => {
  console.log('data', data);
  $('#available').append(writeFishes(data.fishes)); // selecting the div element and appending the writeFishfunction

};

const whenFishesDontLoad = (error) => {
  console.error('error!', error);
};

const initializer = () => {
  loadFishes(whenFishesLoad, whenFishesDontLoad);
};

module.exports = initializer;
