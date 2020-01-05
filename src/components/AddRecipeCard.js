import React from 'react';
import { AddIcon, PlateAndCutleryIcon } from '../assets/SVG/svg';

import '../assets/CSS/components/AddRecipeCard.css';

const AddRecipeCard = () => {
  return (
    <a href={'/'} id={'add-recipe'} className="recipe-card">
      <div className={'add-recipe-title'}>
        <h3>
          Add a <br /> Recipe
        </h3>
      </div>
      <div className={'add-recipe-icons'}>
        <PlateAndCutleryIcon className={'svg-plate-cutlery'} />
        <AddIcon />
      </div>
    </a>
  );
};

export default AddRecipeCard;
