import React from 'react';
import PropTypes from 'prop-types';

const Marker = ({ text, onClick }) => (
  <i role="button" onClick={onClick} className="marker" aria-hidden="true" alt={text} />
);

Marker.defaultProps = {
  onClick: null,
};

Marker.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default Marker;
