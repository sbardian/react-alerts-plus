import React from 'react';
import AlertContainer from '../base/AlertContainer';
import AlertHeader from '../base/AlertHeader';
import AlertImage from '../base/AlertImage';
import AlertBody from '../base/AlertBody';
import AlertProgressBar from '../base/AlertProgressBar';

const CardAlert = ({ render }) => {
  const bag = {
    AlertContainer,
    AlertHeader,
    AlertImage,
    AlertBody,
    AlertProgressBar,
  };

  return render(bag);
};

export default CardAlert;
