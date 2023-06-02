import { createTheme } from '@mui/material/styles';

const { palette } = createTheme();
const { augmentColor } = palette;

const theme = createTheme({
  palette: {
    primary: {
      main: '#373063',
    },
    secondary: {
      main: '#0f1a34',
    },
    tertiary: augmentColor({ color: { main: '#5886ff' } }),
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
      // 'Kanit',
      'Lato',
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
  },
  // components: {
  //   MuiButton: {
  //     styleOverrides: {
  //       root: {
  //         backgroundColor: '#373063',
  //       },
  //     },
  //   },
  // },
});

export default theme;
