/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-indent */
/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
import { Icon } from 'react-icons-kit';
import { ic_close as closeIcon } from 'react-icons-kit/md/ic_close';

class MyAlert extends React.PureComponent {
  render() {
    const {
      close,
      title,
      message,
      imageUri,
      transitionStyle,
      showProgressBar,
      progressBarColor,
      alertTimeout,
      state,
    } = this.props;

    // console.log('rest = ', props);
    const progressStyle = {
      transition: `width ${alertTimeout}ms ease-in-out`,
      width: '0px',
    };

    const progressTransitionStyles = {
      entering: { width: '0px' },
      entered: { width: '100%' },
    };
    return (
      <div
        key="someRandomKey"
        css={css`
          display: grid;
          grid-gap: 10px;
          grid-template-rows: 40px 1fr 10px;
          border: 1px solid lavenderblush;
          justify-content: center;
          padding: 20px;
          margin: 15px;
          background-color: cadetblue;
          box-shadow: 1px 1px 8px 1px #666;
        `}
        style={{
          ...transitionStyle,
        }}
      >
        <div
          css={css`
            display: grid;
            grid-gap: 20px;
            grid-template-columns: 1fr 20px;
          `}
        >
          <header
            css={css`
              font-size: 18pt;
              color: white;
            `}
          >
            {title}
          </header>
          <div>
            <Icon size={20} icon={closeIcon} onClick={close} />
          </div>
        </div>
        <div
          css={css`
            display: grid;
            grid-gap: 15px;
            grid-template-columns: 200px 1fr;
          `}
        >
          <img height="200" width="200" src={imageUri} alt="pic" />
          <article
            css={css`
              color: #141414;
            `}
          >
            {message}
          </article>
        </div>
        {alertTimeout === 0
          ? null
          : showProgressBar && (
              <div
                style={{
                  height: '10px',
                  backgroundColor: `${progressBarColor}`,
                  ...progressStyle,
                  ...progressTransitionStyles[state],
                }}
              />
            )}
      </div>
    );
  }
}

MyAlert.propTypes = {
  close: PropTypes.func,
  title: PropTypes.string,
  message: PropTypes.string,
  imageUri: PropTypes.string,
};

MyAlert.defaultProps = {
  close: () => {},
  title: 'Default Title',
  message: 'Default Message',
  imageUri: '',
};

export default MyAlert;
