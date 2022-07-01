import {extendTheme} from '@chakra-ui/react';
import {colors} from "./colors";

const fonts = {
    body: `'Roboto', sans-serif`,
    heading: `'Roboto', sans-serif`,
};

const textStyles = {
    h1: {
        color: colors.darkBlue,
        fontSize: '60px',
        fontWeight: 700,
        lineHeight: '70px',
    },
    h2: {
        color: colors.darkBlue,
        fontSize: '36px',
        lineHeight: '40px',
    },
    h3: {
        color: colors.darkBlue,
        fontSize: '18px',
        lineHeight: '18px',
    },
    h4: {
        color: colors.white,
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: '16px',
    },
    h5: {
        color: colors.darkBlue,
        fontSize: '14px',
        lineHeight: '16px',
    },
    h6: {
        color: colors.darkBlue,
        fontSize: '13px',
        lineHeight: '13px',
    },
};

const breakpoints = {
    sm: '480px',
    md: '762px',
    lg: '992px',
    xl: '1280px',
};
const globalStyles = {
    global: () => ({
        'html, #__next': {
            height: '100%',
        },
        '#__next': {
            display: 'flex',
            flexDirection: 'column',
        },
        body: {
            color: colors.darkBlue,
            fontFamily: 'Roboto',
        },
        '.body': {
            overflowY: 'scroll',
        },
        html: {
            scrollBehavior: 'smooth',
        },
    }),
};

const theme = extendTheme({breakpoints, colors, fonts, textStyles, styles: globalStyles.global()});

export {theme}
