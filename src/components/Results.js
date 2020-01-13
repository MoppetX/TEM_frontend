import React from 'react';
import Pet from './Pet';
// import PropTypes from 'prop-types';

const Results = ({ pets }) => {
  return (
    <div className={'search'}>
      {pets.length === 0 ? (
        <h2>No Pets found</h2>
      ) : (
        pets.map(pet => (
          <Pet
            key={pet.id}
            animal={pet.type}
            id={pet.id}
            name={pet.name}
            breed={pet.breeds.primary}
            media={pet.photos}
            location={`${pet.contact.address.city}, 
              ${pet.contact.address.state}`}
          />
        ))
      )}
    </div>
  );
};

// Results.propTypes = {};

export default Results;
