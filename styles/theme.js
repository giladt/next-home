import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createMuiTheme( {
  palette: {
    primary: {
      main: 'rgb( 122, 196, 85 )',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
} )

export default theme