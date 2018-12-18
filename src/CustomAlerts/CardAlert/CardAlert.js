import React from 'react';
import AlertHeader from '../base/AlertHeader';
import AlertImage from '../base/AlertImage';
import AlertBody from '../base/AlertBody';
import AlertProgressBar from '../base/AlertProgressBar';

const CardAlert = ({ render }) => {
  const bag = {
    AlertHeader,
    AlertImage,
    AlertBody,
    AlertProgressBar,
  };

  return render(bag);
};

export default CardAlert;
