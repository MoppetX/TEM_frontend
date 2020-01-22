import React, { Component } from 'react';
import pet from '@frontendmasters/pet';

import Carousel from '../Carousel';
// import { DebugDump } from '../../utils/snippets';

class Details extends Component {
  state = {
    loading: true,
    name: '',
  };

  // runs only on the first start-up
  componentDidMount() {
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false,
      });
    });
  }

  render() {
    if (this.state.loading) {
      return <h3>Loading...</h3>;
    }
    const { animal, breed, location, description, name, media } = this.state;

    return (
      <div className={'details'}>
        <Carousel media={media} />

        <div>
          <h2>{name}</h2>
          <h3>{`${animal} - ${breed} - ${location}`}</h3>
          <button>Adopt {name}</button>
          <p>{description}</p>
          {/*<DebugDump props={props}/>*/}
        </div>
      </div>
    );
  }
}

export default Details;
