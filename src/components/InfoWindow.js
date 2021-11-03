import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const InfoWindow = (props) => {
  const { address, error } = props;
  return (
    <Card className="info-window">
      <h1>Details</h1>
      <h3>{address || 'This is formatted address'}</h3>
      <h2>{error}</h2>
    </Card>
  );
};

InfoWindow.defaultProps = {
  address: {},
  error: '',
};

InfoWindow.propTypes = {
  address: PropTypes.objectOf(PropTypes.string),
  error: PropTypes.string,
};

export default InfoWindow;
