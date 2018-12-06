const getPosition = position => {
  switch (position) {
    case 'top left':
      return {
        position: 'absolute',
        top: 0,
        right: 'auto',
        bottom: 'auto',
        left: 0,
        zIndex: 100,
      };
    case 'top right':
      return {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 'auto',
        left: 'auto',
        zIndex: 100,
      };
    case 'bottom left':
      return {
        position: 'absolute',
        top: 'auto',
        right: 'auto',
        bottom: 0,
        left: 0,
        zIndex: 100,
      };
    case 'bottom right':
      return {
        position: 'absolute',
        top: 'auto',
        right: 0,
        bottom: 0,
        left: 'auto',
        zIndex: 100,
      };
    case 'top center':
      return {
        position: 'absolute',
        top: 0,
        right: 'auto',
        bottom: 'auto',
        left: '50%',
        transform: 'translate(-50%, 0%)',
        zIndex: 100,
      };
    case 'bottom center':
      return {
        position: 'absolute',
        top: 'auto',
        right: 'auto',
        bottom: 0,
        left: '50%',
        transform: 'translate(-50%, 0%)',
        zIndex: 100,
      };
    default:
      return {
        position: 'absolute',
        top: 0,
        right: 'auto',
        bottom: 'auto',
        left: 0,
        zIndex: 100,
      };
  }
};

export default getPosition;
