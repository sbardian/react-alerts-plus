/* eslint-disable import/no-extraneous-dependencies */
/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
import { Icon } from 'react-icons-kit';
import { ic_close as closeIcon } from 'react-icons-kit/md/ic_close';

export const MyAlert = ({ close, title, message, imageUri, ...props }) => {
  console.log('rest = ', props);
  return (
    <div
      key="someRandomKey"
      css={css`
        display: grid;
        grid-gap: 10px;
        grid-template-rows: 40px 1fr;
        border: 1px solid lavenderblush;
        justify-content: center;
        padding: 20px;
        width: 400px;
        margin: 15px;
        background-color: cadetblue;
        box-shadow: 1px 1px 8px 1px #666;
      `}
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
    </div>
  );
};

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
