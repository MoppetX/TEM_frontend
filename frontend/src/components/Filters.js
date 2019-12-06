import React, { Component } from 'react';
import InputRange from 'react-input-range';

// const getMinMax = require('../utils/util');
import axios from 'axios';

const serverPath = 'http://localhost:3000';
import { AXIOS } from '../utils/util';

import { CookingTimeIcon, ServingSizeIcon } from '../assets/SVG/svg';
import '../assets/CSS/components/Filters.scss';
import '../assets/CSS/components/inputRange.css';


class Filters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // min is for the left thumb
      // value: { min: 0, max: 20 },
      minValueCookingTime: 0,
      maxValueCookingTime: 120,
      cookingTimeValue: { min: 0, max: 60 },

      minValueServingSize: 1,
      maxValueServingSize: 12,
      servingSizeValue: { min: 1, max: 6 },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  sortLowToHigh(array, key) {
    return array
      .map(item => item[key])
      .sort((a, b) => a - b);
  }

  getTrueMiddle(min, max){
    return min + Math.round((max - min) / 2)
  }

  async componentDidMount() {
    let res = await AXIOS.recipe.GET_ALL;
    const recipes = res.data;

    const sortedCookingTimes = this.sortLowToHigh(recipes, 'cookingTime');
    const sortedServingSize = this.sortLowToHigh(recipes, 'servingSize');


    let minValueCookingTime = sortedCookingTimes[0];
    let maxValueCookingTime = sortedCookingTimes[sortedCookingTimes.length - 1];

    let minValueServingSize = sortedServingSize[0];
    let maxValueServingSize = sortedServingSize[sortedServingSize.length - 1];

    this.setState({
      minValueCookingTime,
      maxValueCookingTime,

      cookingTimeValue: {
        min: minValueCookingTime,
        max: this.getTrueMiddle(minValueCookingTime, maxValueCookingTime),
      },

      minValueServingSize,
      maxValueServingSize,

      servingSizeValue: {
        min: minValueServingSize,
        max: this.getTrueMiddle(minValueServingSize, maxValueServingSize),
      },
    })
    ;
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  async handleSubmit(event) {
    console.log('Sth was submitted: ');
    console.log(this.state.servingSizeValue.min, this.state.servingSizeValue.max);
    console.log(this.state.cookingTimeValue.min, this.state.cookingTimeValue.max);
    event.preventDefault();

    let query = {
      servingSize: { $gte: this.state.servingSizeValue.min, $lte: this.state.servingSizeValue.max },
      cookingTime: { $gte: this.state.cookingTimeValue.min, $lte: this.state.cookingTimeValue.max },
    };

    let res = await axios.get(`${serverPath}/recipe/`, {
      params: query,
    });

    // let res = await AXIOS.recipe.GET_ALL;
    console.log(res.data);

    //   const returned = await RecipeModel.find({
    //     servingSize: {$gte:this.state.servingSizeValue.min, $lte: this.state.servingSizeValue.max}
    //   });

    // console.log(returned);
  }

  render() {
    const {
      cookingTimeValue,
      minValueCookingTime,
      maxValueCookingTime,

      servingSizeValue,
      minValueServingSize,
      maxValueServingSize,
    } = this.state;

    return (
      <aside id={'recipe-filter'}>
        <h2>Filters</h2>

        {/*<form action="submit">*/}
        <form onSubmit={this.handleSubmit}>

          <div className={'cooking-time'}>
            <div className="filter-title icon-with-text">
              <CookingTimeIcon/>
              <label htmlFor="filter-cooking-time">
                <h6>Cooking Time</h6>
              </label>
            </div>

            <div className="filter-slider">
              <InputRange
                name="filter-cooking-time"
                formatLabel={value => `${value}m`}
                step={1}
                minValue={minValueCookingTime}
                maxValue={maxValueCookingTime}
                value={cookingTimeValue}
                onChange={cookingTimeValue =>
                  this.setState({ cookingTimeValue })
                }
                allowSameValues={true}
                aria-labelledby={String}
              />
            </div>
          </div>

          <div className={'serving-size'}>
            <div className="filter-title icon-with-text">
              <ServingSizeIcon/>
              <label htmlFor="filter-serving-size">
                <h6>Serving Size</h6>
              </label>
            </div>
            <div className="filter-slider">
              <InputRange
                name="filter-serving-size"
                // formatLabel={value => `${value}`}
                step={1}
                minValue={minValueServingSize}
                maxValue={maxValueServingSize}
                value={servingSizeValue}
                onChange={servingSizeValue =>
                  this.setState({ servingSizeValue })
                }
                allowSameValues={true}
                aria-labelledby={String}
              />
            </div>
          </div>

          <input type="submit" value={'Submit'} className={'btn primary'}/>
        </form>
      </aside>
    );
  }
}

export default Filters;
