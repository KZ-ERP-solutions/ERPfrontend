import { createTheme } from '@mui/material/styles'

const { palette } = createTheme()
const { augmentColor } = palette

let theme = createTheme({
  palette: {
    primary: {
      main: '#48466d',
    },
    secondary: {
      main: '#3d84a8',
    },
    tertiary: augmentColor({ color: { main: '#b3b1cd' } }),
    background: {
      paper: '#f9f7f7',
    },
    text: {
      primary: '#222222',
    },
  },
})

export default theme
