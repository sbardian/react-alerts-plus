import React from 'react';
import PropTypes from 'prop-types';

const AlertImage = ({ height, width, alt, imageSrc, ...props }) => (
  <img height={height} width={width} src={imageSrc} alt={alt} {...props} />
);

AlertImage.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  imageSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

AlertImage.defaultProps = {
  height: 200,
  width: 200,
};

export default AlertImage;
