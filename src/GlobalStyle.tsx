import * as React from 'react';
import { Global, css } from '@emotion/core';

const GlobalStyle: React.FC = () => {
  return (
    <Global
      styles={css`
        .ant-form-item-label {
          > label {
            &::after {
              content: '' !important;
            }
          }
        }
      `}
    />
  );
};

export default GlobalStyle;
