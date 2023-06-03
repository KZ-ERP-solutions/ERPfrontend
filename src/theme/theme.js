import { createTheme } from '@mui/material/styles';

const { palette } = createTheme();
const { augmentColor } = palette;

const theme = createTheme({
  palette: {
    primary: {
      main: '#19376D',
    },
    secondary: {
      main: '#0B2447',
    },
    tertiary: augmentColor({ color: { main: '#576CBC' } }),
    gray: {
      light: '#F8F8F8',
    },
    background: {
      paper: '#f9f7f7',
    },
    text: {
      primary: '#222222',
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),

    h1: {
      fontSize: '48px',
      lineHeight: 1.5,
      fontWeight: 500,
    },
    h2: {
      fontSize: '38px',
      lineHeight: 1.5,
      fontWeight: 500,
    },
    h3: {
      fontSize: '30px',
      lineHeight: 1.5,
      fontWeight: 500,
    },
    h4: {
      fontSize: '24px',
      lineHeight: 1.5,
      fontWeight: 500,
    },
    h5: {
      fontSize: '20px',
      lineHeight: 1.5,
      fontWeight: 500,
    },
    h6: {
      fontSize: '18px',
      lineHeight: 1.5,
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: '18px',
      lineHeight: 1.5,
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: '16px',
      lineHeight: 1.5,
      fontWeight: 300,
    },
    body1: {
      fontSize: '16px',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '14px',
      lineHeight: 1.5,
    },
    caption: {
      fontSize: '12px',
      lineHeight: 1.2,
    },
    overline: { fontSize: '16px', lineHeight: 1.5 },
    button: { fontSize: '16px', fontWeight: 500 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
  },
});

export default theme;
