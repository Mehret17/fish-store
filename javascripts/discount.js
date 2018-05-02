const discount = 0.2;

const applySale = () => {
  $('.on-sale').each((i, fishCard) => {
    const basePriceElem = $(fishCard).find('.price'); // wrapping fishCard in an a
    const basPrice = basePriceElem.html() * 1;
    const newPrice = (basPrice * (1 - discount)).toFixed(2);
    basePriceElem.html(newPrice);
  });
};

module.exports = applySale;
