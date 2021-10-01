import PropTypes from 'prop-types';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

AnyReactComponent.defaultProps = {
  text: '',
};

AnyReactComponent.propTypes = {
  text: PropTypes.string,
};

export default AnyReactComponent;
