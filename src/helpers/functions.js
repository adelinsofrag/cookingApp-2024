/**
 * format incoming price to requested currency
 * @param {*} price
 * @param {*} currency
 * @returns
 */
function formatPrice(price, currency = "$") {
  return `${currency} ${price}`;
}

/**
 *
 * currency conversion
 * 12.99 > 12.99 * 0.93
 * @param {*} price
 * @param {*} conversionRate
 * @param {*} currency
 * @returns
 */
function convertToCurrency(price, conversionRate = "0.93", currency = "EUR") {
  return (price * conversionRate).toFixed(2) + " " + currency;
}

export { formatPrice, convertToCurrency };
