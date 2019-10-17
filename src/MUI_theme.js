import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import deepPurple from '@material-ui/core/colors/deepPurple';
import yellow from '@material-ui/core/colors/yellow';
import cyan from '@material-ui/core/colors/cyan';

const theme = createMuiTheme({
  palette: {
    blue: {
      light: blue['A100'],
      main: blue['A500'],
      dark: blue['A700'],
      contrastText: blue['A50'],
    },
    red: {
      light: red['A100'],
      main: red['A500'],
      dark: red['A800'],
      contrastText: red['A50'],
    },
    cyan: {
      light: cyan['A100'],
      main: cyan['A400'],
      dark: cyan['A600'],
      contrastText: cyan['A50'],
    },
    yellow: {
      light: yellow['A100'],
      main: yellow['A500'],
      dark: yellow['A700'],
      contrastText: yellow['A50'],
    },
    deepPurple: {
      light: deepPurple['A100'],
      main: deepPurple['A500'],
      dark: deepPurple['A700'],
      contrastText: deepPurple['A50'],
    }
  },
});

export default theme;