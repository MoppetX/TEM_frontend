import React from 'react';
// import config from 'config';
// const serverPath = config.get('serverPath');
import axios from 'axios';

import { createKey } from '../../utils/util';
import { serverPath } from '../../utils/API';

import AddRecipeCard from '../AddRecipeCard';
import Filters from '../Filters';
import RecipeCard from '../RecipeCard';
import Loader from '../Loader';

import '../../assets/CSS/pages/Overview.scss';

class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      isLoading: true,
      recipes: [],
      recipeImages: [],
      cookingTimeValues: {},
      servingSizeValues: {},
    };

    this.handleFilterUpdate = this.handleFilterUpdate.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      let res;

      // fetch user
      res = await axios.get(`${serverPath}/user/all`);
      const user = res.data[0];

      // get recipes of user
      const recipes = await this.getRecipes(user);

      // get imgs for recipes
      const recipeImages = await this.getImages(recipes);

      // set up variables for Filters
      // const cookingTimeValues = this.findValues(recipes, 'cookingTime');
      // const servingSizeValues = this.findValues(recipes, 'servingSize');

      const isLoading = false;

      this.setState({
        user,
        recipes,
        recipeImages,
        isLoading,
        // cookingTimeValues,
        // servingSizeValues,
      });
    } catch (err) {
      // eslint-disable-next-line
      console.error(err.message);
    }
  };

  // fetch data from database
  getDataFromDbUsingFetch = () => {
    fetch(`${serverPath}/user/all`)
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };

  getImages = async recipes => {
    // it's not recipe.img anymore, but recipe.images.large -> array
    console.log(recipes[0].images.thumb);

    const promisedImages = recipes.map(async recipe => {
      // const res = await axios
      return await axios
        .get(`${serverPath}/recipe/${recipe._id}/img/${recipe.images.thumb}`, {
          responseType: 'arraybuffer',
        })
        .then(res => Buffer.from(res.data, 'binary').toString('base64'));
      // return res
    });

    return Promise.all(promisedImages);
  };

  getRecipes = async user => {
    const promisedRecipes = user.recipes.map(async recipeId => {
      const res = await axios.get(`${serverPath}/recipe/${recipeId}`);
      return res.data;
    });
    return Promise.all(promisedRecipes);
  };

  // F I L T E R  setup

  // cookingTimeValues = {};
  // servingSizeValues = {};

  // findValues(array, key) {
  //   const sorted = array.map(item => item[key]).sort((a, b) => a - b);
  //
  //   const min = sorted[0];
  //   const max = sorted[sorted.length - 1];
  //
  //   const sliderMinMax = {
  //     min,
  //     max: getTrueMiddle(min, max),
  //   };
  //
  //   return { min, max, sliderMinMax };
  // }

  async handleFilterUpdate(recipes) {
    let images = [];

    if (recipes.length === 0) {
      //  TODO: UI error message for NO results
    } else {
      images = await this.getImages(recipes);
    }

    this.setState({ recipeImages: images, recipes });
  }

  render() {
    const {
      recipes,
      recipeImages,
      isLoading,
      // cookingTimeValues,
      // servingSizeValues,
    } = this.state;

    return (
      <div id={'overview'} className={'recipes-and-filter'}>
        <Filters
          handleFilterUpdate={this.handleFilterUpdate}
          data={recipes}
          // cookingTimeValues={cookingTimeValues}
          // servingSizeValues={servingSizeValues}
        />

        <article id="recipes" className={'user-recipes'}>
          <h2>
            Your Recipes
            <span>{isLoading ? 'loading...' : `${recipes.length} found`}</span>
          </h2>
          <div className={'recipe-grid'}>
            <AddRecipeCard />
            {isLoading ? (
              <Loader />
            ) : recipes.length === 0 ? (
              <h3>No Recipes found</h3>
            ) : (
              recipes.map((recipe, index) => {
                return (
                  <RecipeCard
                    id={recipe._id}
                    img={recipeImages[index]}
                    title={recipe.title}
                    favourite={recipe.favourite}
                    key={createKey(recipe.title, index)}
                  />
                );
              })
            )}
          </div>
        </article>
      </div>
    );
  }
}

export default Overview;
