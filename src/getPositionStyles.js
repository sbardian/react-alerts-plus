const getPositionStyles = (position, offset, isMobile) => {
  const POSITION = 'fixed';
  const ZINDEX = 100;
  const TRANSFORM = 'translate(-50%, 0%)';
  const CENTER_PERCENT = `50%`;

  switch (position) {
    case 'topLeft':
      if (!isMobile) {
        return {
          position: POSITION,
          top: `${offset}`,
          left: `${offset}`,
          zIndex: ZINDEX,
        };
      }
      return {
        position: POSITION,
        top: '0px',
        right: '0px',
        left: '0px',
        zIndex: ZINDEX,
      };
    case 'topRight':
      if (!isMobile) {
        return {
          position: POSITION,
          top: `${offset}`,
          right: `${offset}`,
          zIndex: ZINDEX,
        };
      }
      return {
        position: POSITION,
        top: '0px',
        right: '0px',
        left: '0px',
        zIndex: ZINDEX,
      };
    case 'bottomLeft':
      if (!isMobile) {
        return {
          position: POSITION,
          bottom: `${offset}`,
          left: `${offset}`,
          zIndex: ZINDEX,
        };
      }
      return {
        position: POSITION,
        bottom: '0px',
        right: '0px',
        left: '0px',
        zIndex: ZINDEX,
      };
    case 'bottomRight':
      if (!isMobile) {
        return {
          position: POSITION,
          bottom: `${offset}`,
          right: `${offset}`,
          zIndex: ZINDEX,
        };
      }
      return {
        position: POSITION,
        bottom: '0px',
        right: '0px',
        left: '0px',
        zIndex: ZINDEX,
      };
    case 'topCenter':
      if (!isMobile) {
        return {
          position: POSITION,
          top: `${offset}`,
          left: CENTER_PERCENT,
          transform: TRANSFORM,
          zIndex: ZINDEX,
        };
      }
      return {
        position: POSITION,
        top: '0px',
        right: '0px',
        left: '0px',
        zIndex: ZINDEX,
      };
    case 'bottomCenter':
      if (!isMobile) {
        return {
          position: POSITION,
          bottom: `${offset}`,
          left: CENTER_PERCENT,
          transform: TRANSFORM,
          zIndex: ZINDEX,
        };
      }
      return {
        position: POSITION,
        bottom: '0px',
        right: '0px',
        left: '0px',
        zIndex: ZINDEX,
      };
    default:
      return null;
  }
};

export default getPositionStyles;
