/* eslint-disable */
// require('core-js/stable');
// require('regenerator-runtime/runtime');

const log = console.log;

const createKey = (string, index) => {
  return string.toLowerCase().replace(/\s/g, '') + '_' + index;
};

const getTrueMiddle = (min, max) => {
  return min + Math.round((max - min) / 2);
};

const Order = {
  ASC: 1,
  DESC: -1,
};
Object.freeze(Order);

const query = (model, key, order) => {
  return model
    .find({})
    .sort({ [key]: order })
    .limit(1)
    .then(data => data[0][key]);
};

const getMinMax = async (model, field) => {
  let min = await query(model, field, Order.ASC);
  let max = await query(model, field, Order.DESC);

  min = Promise.resolve(min);
  console.log('in Min/Max');
  console.log(min, max);

  return {
    min,
    max,
  };
};

module.exports = { getMinMax, createKey, getTrueMiddle };
