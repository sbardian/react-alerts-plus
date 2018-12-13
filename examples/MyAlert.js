/* eslint-disable import/no-extraneous-dependencies */
/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';
import { Icon } from 'react-icons-kit';
import { ic_close as closeIcon } from 'react-icons-kit/md/ic_close';

export const MyAlert = ({ close /* ...props */ }) => {
  // console.log('rest = ', props);
  return (
    <div
      key="someRandomKey"
      css={css`
        display: grid;
        grid-gap: 10px;
        grid-template-rows: 40px 1fr;
        border: 1px solid black;
        justify-content: center;
        padding: 20px;
        width: 400px;
        margin: 10px;
        background-color: cadetblue;
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
          Lorem ipsum
        </header>
        <div>
          <Icon size={20} icon={closeIcon} onClick={close} />
        </div>
      </div>
      <div
        css={css`
          display: grid;
          grid-gap: 10px;
          grid-template-columns: 200px 1fr;
        `}
      >
        <img
          height="200"
          width="200"
          src="https://source.unsplash.com/random/200x200"
          alt="pic"
        />
        <article
          css={css`
            color: #141414;
          `}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fugit
          perferendis, beatae qui voluptatem soluta quos optio expedita nemo
          culpa amet! Recusandae a natus fugiat est vel nulla quos fuga. Lorem
          ipsum, dolor sit amet consectetur adipisicing elit.
        </article>
      </div>
    </div>
  );
};

MyAlert.propTypes = {
  close: PropTypes.func,
};

MyAlert.defaultProps = {
  close: () => {},
};

export default MyAlert;
