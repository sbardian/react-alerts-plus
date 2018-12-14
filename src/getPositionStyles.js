const getPositionStyles = (position, offset) => {
  const POSITION = 'fixed';
  const ZINDEX = 100;
  const TRANSFORM = 'translate(-50%, 0%)';
  const CENTER_PERCENT = `50%`;

  switch (position) {
    case 'topLeft':
      return {
        position: POSITION,
        top: `${offset}`,
        left: `${offset}`,
        zIndex: ZINDEX,
      };
    case 'topRight':
      return {
        position: POSITION,
        top: `${offset}`,
        right: `${offset}`,
        zIndex: ZINDEX,
      };
    case 'bottomLeft':
      return {
        position: POSITION,
        bottom: `${offset}`,
        left: `${offset}`,
        zIndex: ZINDEX,
      };
    case 'bottomRight':
      return {
        position: POSITION,
        bottom: `${offset}`,
        right: `${offset}`,
        zIndex: ZINDEX,
      };
    case 'topCenter':
      return {
        position: POSITION,
        top: `${offset}`,
        left: CENTER_PERCENT,
        transform: TRANSFORM,
        zIndex: ZINDEX,
      };
    case 'bottomCenter':
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

export default getPositionStyles;
