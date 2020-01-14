import React, { useState, useEffect } from 'react';
import InputRange from 'react-input-range';

import axios from 'axios';

const { getTrueMiddle } = require('../utils/util');
import { serverPath } from '../utils/API';

import { CookingTimeIcon, ServingSizeIcon } from '../assets/SVG/svg';
import '../assets/CSS/components/Filters.scss';
import '../assets/CSS/components/inputRange.css';

const Filters = props => {
  // TODO: pass down state...
  // const { handleFilterUpdate, data } = props;
  const { handleFilterUpdate } = props;

  const [cookingTimeValues, setCookingTimeValues] = useState({
    min: 0,
    max: 120,
    sliderMinMax: { min: 0, max: 60 },
  });

  const [servingSizeValues, setServingSizeValues] = useState({
    min: 1,
    max: 12,
    sliderMinMax: { min: 1, max: 6 },
  });

  useEffect(() => {
    // console.log('USE_EFFECT');
    // console.log('data');
    // console.log(data);

    async function fetchData() {
      return await axios.get(`${serverPath}/recipe/all`);
    }

    fetchData().then(res => {
      const cookingTimeValues = findValues(res.data, 'cookingTime');
      const servingSizeValues = findValues(res.data, 'servingSize');

      setCookingTimeValues(cookingTimeValues);
      setServingSizeValues(servingSizeValues);
    }, console.error);
  }, [setCookingTimeValues, setServingSizeValues]);

  const findValues = (array, key) => {
    const sorted = array.map(item => item[key]).sort((a, b) => a - b);

    const min = sorted[0];
    const max = sorted[sorted.length - 1];

    const sliderMinMax = {
      min,
      max: getTrueMiddle(min, max),
    };

    return { min, max, sliderMinMax };
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const cookingTimeSlider = cookingTimeValues.sliderMinMax;
    const servingSizeSlider = servingSizeValues.sliderMinMax;

    let query = {
      cookingTime: {
        $gte: cookingTimeSlider.min,
        $lte: cookingTimeSlider.max,
      },
      servingSize: {
        $gte: servingSizeSlider.min,
        $lte: servingSizeSlider.max,
      },
    };

    let res;

    try {
      res = await axios.get(`${serverPath}/recipe/`, {
        params: query,
      });
      await handleFilterUpdate(res.data);
    } catch (err) {
      // if NO results, pass up an empty array
      res = [];
      await handleFilterUpdate(res);
    }
  };

  return (
    <aside id={'recipe-filter'}>
      <h2>Filters</h2>

      <form onSubmit={handleSubmit}>
        <div className={'cooking-time'}>
          <div className="filter-title icon-with-text">
            <CookingTimeIcon />
            <label htmlFor="filter-cooking-time">
              <h6>Cooking Time</h6>
            </label>
          </div>

          <div className="filter-slider">
            <InputRange
              name="filter-cooking-time"
              formatLabel={value => `${value}m`}
              step={1}
              minValue={cookingTimeValues.min}
              maxValue={cookingTimeValues.max}
              value={cookingTimeValues.sliderMinMax}
              onChange={value => {
                setCookingTimeValues({
                  ...cookingTimeValues,
                  sliderMinMax: value,
                });
              }}
              allowSameValues={true}
              aria-labelledby={String}
            />
          </div>
        </div>

        <div className={'serving-size'}>
          <div className="filter-title icon-with-text">
            <ServingSizeIcon />
            <label htmlFor="filter-serving-size">
              <h6>Serving Size</h6>
            </label>
          </div>
          <div className="filter-slider">
            <InputRange
              name="filter-serving-size"
              step={1}
              minValue={servingSizeValues.min}
              maxValue={servingSizeValues.max}
              value={servingSizeValues.sliderMinMax}
              onChange={value => {
                setServingSizeValues({
                  ...servingSizeValues,
                  sliderMinMax: value,
                });
              }}
              allowSameValues={true}
              aria-labelledby={String}
            />
          </div>
        </div>

        <input type="submit" value={'Submit'} className={'btn primary'} />
      </form>
    </aside>
  );
};

export default Filters;
