import React from 'react';
import { Link } from '@reach/router';

import HeartTag from './HeartTag';
import defaultImage from '../../public/default.jpeg';

import '../assets/CSS/components/RecipeCard.css';

const RecipeCard = props => {
  const { id, img, title, favourite } = props;

  let hero = defaultImage;
  if (img) {
    hero = img;
  }

  return (
    <Link to={`recipe/${id}`} className="recipe-card">
      {/* make this a button */}
      {/* create a helper function to update / save state in the parent component? */}
      <HeartTag favourite={favourite} />

      <div className={'recipe-card-title'}>
        <p>{title}</p>
      </div>

      <div className={'recipe-thumb'}>
        <img src={`data:image/jpeg;base64, ${hero}`} alt="a dish" />
      </div>
    </Link>
  );
};

export default RecipeCard;
