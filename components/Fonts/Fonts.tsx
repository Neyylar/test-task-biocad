import {Global} from '@emotion/react';

export const Fonts = () => (
    <Global
        styles={`
      @font-face {
        font-family: 'Roboto';
        font-weight: 400;
        src: url('/fonts/Roboto/Roboto-Regular.ttf') format('truetype');
      }
      @font-face {
        font-family: 'Roboto';
        font-weight: 500;
        src:  url('/fonts/Roboto/Roboto-Medium.ttf') format('truetype');
      }
      @font-face {
        font-family: 'Roboto';
        font-weight: 700;
        src: url('/fonts/Roboto/Roboto-Bold.ttf') format('truetype');
      }
      `}
    />
);
