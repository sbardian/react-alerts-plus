const getPosition = (position, offset) => {
  const POSITION = 'fixed';
  const ZINDEX = 100;
  const TRANSFORM = 'translate(-50%, 0%)';
  const CENTER_PERCENT = `50%`;

  switch (position) {
    case 'top left':
      return {
        position: POSITION,
        top: `${offset}`,
        left: `${offset}`,
        zIndex: ZINDEX,
      };
    case 'top right':
      return {
        position: POSITION,
        top: `${offset}`,
        right: `${offset}`,
        zIndex: ZINDEX,
      };
    case 'bottom left':
      return {
        position: POSITION,
        bottom: `${offset}`,
        left: `${offset}`,
        zIndex: ZINDEX,
      };
    case 'bottom right':
      return {
        position: POSITION,
        bottom: `${offset}`,
        right: `${offset}`,
        zIndex: ZINDEX,
      };
    case 'top center':
      return {
        position: POSITION,
        top: `${offset}`,
        left: CENTER_PERCENT,
        transform: TRANSFORM,
        zIndex: ZINDEX,
      };
    case 'bottom center':
      return {
        position: POSITION,
        bottom: `${offset}`,
        left: CENTER_PERCENT,
        transform: TRANSFORM,
        zIndex: ZINDEX,
      };
    default:
      return null;
  }
};

export default getPosition;
