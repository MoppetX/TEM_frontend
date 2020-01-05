import React from 'react';

import { HeartOutlineIcon, HeartFilledIcon } from '../assets/SVG/svg';
import '../assets/CSS/components/HeartTag.css';

const fill = '#fff';

const HeartTag = ({ favourite }) => {
  return (
    <div className={'heart-tag'}>
      <div className={'heart-outline-icon'}>
        {favourite ? (
          <HeartFilledIcon fill={fill} />
        ) : (
          <HeartOutlineIcon fill={fill} />
        )}
      </div>
    </div>
  );
};

export default HeartTag;
