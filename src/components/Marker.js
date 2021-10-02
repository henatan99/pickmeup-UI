import React from 'react';
import PropTypes from 'prop-types';

const Marker = ({ text, onClick }) => (
  <button type="button" className="marker-btn" onClick={onClick}>
    <i className="marker" alt={text} />
  </button>
);

Marker.defaultProps = {
  onClick: null,
};

Marker.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default Marker;
