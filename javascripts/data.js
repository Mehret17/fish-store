const loadFishes = require('./fishes');
const writeFishes = require('./fishDom');
const bindEvents = require('./events');
const applySale = require('./discount');

const whenFishesLoad = (data) => {
  console.log('data', data);
  $('#available').append(writeFishes(data.fishes)); // selecting the div element and appending the writeFishfunction
  bindEvents();
  applySale();
};

const whenFishesDontLoad = (error) => {
  console.error('error!', error);
};

const initializer = () => {
  loadFishes(whenFishesLoad, whenFishesDontLoad);
};

module.exports = initializer;
