import React from 'react';
import axios from 'axios';

const serverPath = process.env.REACT_APP_API_URL || 'http://localhost:3000';

import HeartTag from '../HeartTag';
import { CookingTimeIcon, ServingSizeIcon } from '../../assets/SVG/svg';
import '../../assets/CSS/pages/Recipe.scss';

class Recipe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
      recipe: {
        versions: [],
      },
      img: '',
      version: {
        directions: [],
        notes: [],
        ingredients: [],
      },
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      // get recipe data
      let res = await axios.get(`${serverPath}/recipe/${this.state.id}`);
      const recipe = res.data;
      const currentVersion = recipe.versions[0];

      // get img for recipe
      const img = await axios
        .get(`${serverPath}/recipe/${recipe._id}/img/${recipe.img}`, {
          responseType: 'arraybuffer',
        })
        .then(res => Buffer.from(res.data, 'binary').toString('base64'));

      this.setState({ recipe, img, version: currentVersion });
    } catch (err) {
      console.log(err);
    }
  };

  titles = {
    directions: 'Directions',
    ingredients: 'Ingredients',
    notes: 'Notes',
  };

  render() {
    const { recipe, img, version } = this.state;

    return (
      <div id={'recipe'} className={'recipe'}>
        {/*    T O P    */}
        <div className={'top'}>
          <div className="left">
            <h3>{recipe.title}</h3>

            <div className="icons">
              <div className="cooking-time icon-with-text">
                <CookingTimeIcon />
                <h6>
                  <span>{recipe.cookingTime}</span> min
                </h6>
              </div>
            </div>

            <div className="versions">
              <div className="version">
                <HeartTag favourite={recipe.favourite} />
                <h6>Version {recipe.versions.length}</h6>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="img">
              <img src={`data:image/jpeg;base64, ${img}`} alt="" />
            </div>
          </div>
        </div>

        {/*  B O T T O M  */}
        {/*  V E R S I O N  A R E A  */}
        <article className="bottom version">
          <div className="left">
            <div className="directions">
              <h4>{this.titles.directions}</h4>

              <div className="content">
                <ul>
                  {version.directions.map((direction, index) => {
                    return (
                      <li className={'direction'} key={`direction_${index}`}>
                        {direction}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="notes">
              <h4>{this.titles.notes}</h4>
              <div className="content">
                <ul>
                  {version.notes.map((note, index) => {
                    return (
                      <li className={'note'} key={`note${index}`}>
                        {note}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="ingredients">
              <h4>{this.titles.ingredients}</h4>

              <div className="icons">
                <div className="serving-size icon-with-text">
                  <ServingSizeIcon />
                  <h6>
                    <span>{recipe.servingSize}</span> Servings
                  </h6>
                </div>
              </div>

              <div className="content">
                <ul>
                  {version.ingredients.map((ingredient, index) => {
                    return (
                      <li className={'ingredient'} key={`ingredient${index}`}>
                        <input
                          type="checkbox"
                          name="ingredient"
                          id={'ingredient' + 1}
                        />
                        {ingredient}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Recipe;
