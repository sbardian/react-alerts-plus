const getPositionStyles = (position, offset, isMobile, zIndex = 100) => {
  const POSITION = 'fixed';
  const TRANSFORM = 'translate(-50%, 0%)';
  const CENTER_PERCENT = `50%`;

  switch (position) {
    case 'topLeft':
      if (!isMobile) {
        return {
          position: POSITION,
          top: `${offset}`,
          left: `${offset}`,
          zIndex,
        };
      }
      return {
        position: POSITION,
        top: '0px',
        right: '0px',
        left: '0px',
        zIndex,
      };
    case 'topRight':
      if (!isMobile) {
        return {
          position: POSITION,
          top: `${offset}`,
          right: `${offset}`,
          zIndex,
        };
      }
      return {
        position: POSITION,
        top: '0px',
        right: '0px',
        left: '0px',
        zIndex,
      };
    case 'bottomLeft':
      if (!isMobile) {
        return {
          position: POSITION,
          bottom: `${offset}`,
          left: `${offset}`,
          zIndex,
        };
      }
      return {
        position: POSITION,
        bottom: '0px',
        right: '0px',
        left: '0px',
        zIndex,
      };
    case 'bottomRight':
      if (!isMobile) {
        return {
          position: POSITION,
          bottom: `${offset}`,
          right: `${offset}`,
          zIndex,
        };
      }
      return {
        position: POSITION,
        bottom: '0px',
        right: '0px',
        left: '0px',
        zIndex,
      };
    case 'topCenter':
      if (!isMobile) {
        return {
          position: POSITION,
          top: `${offset}`,
          left: CENTER_PERCENT,
          transform: TRANSFORM,
          zIndex,
        };
      }
      return {
        position: POSITION,
        top: '0px',
        right: '0px',
        left: '0px',
        zIndex,
      };
    case 'bottomCenter':
      if (!isMobile) {
        return {
          position: POSITION,
          bottom: `${offset}`,
          left: CENTER_PERCENT,
          transform: TRANSFORM,
          zIndex,
        };
      }
      return {
        position: POSITION,
        bottom: '0px',
        right: '0px',
        left: '0px',
        zIndex,
      };
    default:
      return null;
  }
};

export default getPositionStyles;
