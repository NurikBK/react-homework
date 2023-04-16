import React from 'react';
import PropTypes from 'prop-types';

const Photos = ({ item }) => {
  return (
    <div key={item.id} className="img-container">
      <img src={item.url} alt={item.title} />
    </div>
  );
};

export default Photos;

Photos.propTypes = {
  item: PropTypes.object,
};
