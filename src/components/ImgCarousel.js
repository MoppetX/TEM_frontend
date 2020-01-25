import React from 'react';

import defaultImg from '../assets/img/default.jpeg';

class ImgCarousel extends React.Component {
  state = {
    photos: [],
    active: 0,
  };

  static getDerivedStateFromProps({ media }) {
    let photos = [defaultImg];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  handleIndexClick = event => {
    // the arrow function keeps the scope of where it was defined (this)
    this.setState({
      // '+' coerces the string that's returned from the DOM to a number
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { photos, active } = this.state;
    return (
      <div className={'carousel'}>
        <img src={photos[active]} alt="the dish" />
        <div className={'carousel-smaller'}>
          {photos.map((photo, index) => (
            // eslint-disable-next-line
            <img
              alt="thumbnail"
              className={index === active ? 'active' : ''}
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ImgCarousel;
