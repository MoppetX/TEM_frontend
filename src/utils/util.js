/* eslint-disable */
// require('core-js/stable');
// require('regenerator-runtime/runtime');

import axios from 'axios';
const serverPath = process.env.REACT_APP_API_URL || 'http://localhost:3000';

const log = console.log;

// const connectDB = require('../../../backend/config/db');
// connectDB();

// await axios.get(`${serverPath}/user/all`);

const AXIOS = {
  user: {
    GET_ALL: axios.get(`${serverPath}/user/all`),
  },
  recipe: {
    GET_ALL: axios.get(`${serverPath}/recipe/all`),
  },
};

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

// let field;
// field = 'servingSize';
// field = 'cookingTime';
//
// let minnieMaxie = getMinMax(model, field).then(data => console.log(data));
// let testMin = RecipeModel
//   .findAll()
// .sort({ [field]: Order.ASC })
// .limit(1)
// .then(data => data[0][field]);

// console.log('minnieMaxie');
// console.log(Promise.resolve(minnieMaxie));
// console.log(Promise.resolve(testMin));

// let minMax;
// minMax = Promise.all([
//   query(model, field),
//   query(model, field, Order.DESC),
// ]).then(stuff => {
//   return {
//     min: stuff[0],
//     max: stuff[1],
//   };
// });
// minMax.then(results => console.log('m1', results));
//
// minMax = Promise.all([
//   query(model, field),
//   query(model, field, Order.DESC),
// ]).then(records => {
//   const [min, max] = records;
//
//   return {
//     min,
//     max,
//   };
// });
// minMax.then(results => console.log('m2', results));

// const getMinMax = async (model, field) => {
//   const min = await query(model, field, Order.ASC);
//   const max = await query(model, field, Order.DESC);
//
//   return {
//     min,
//     max,
//   };
// };

// field = 'servingSize';
//
// const p1 = getMinMax(model, field);
//
// field = 'cookingTime';
// const p2 = getMinMax(model, field);
//
// Promise.all([p1, p2]).then(res => {
//   console.log(res);
//   process.exit(0);
// });

module.exports = { getMinMax, AXIOS, createKey, getTrueMiddle };
