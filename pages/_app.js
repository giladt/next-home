import '../styles/globals.css'
import { useState } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../styles/theme'
import CssBaseline from '@material-ui/core/CssBaseline';

function MyApp({ Component, pageProps }) {
  const [ values, setValues ] = useState( {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    salaryIndication: 0,
  } )

  const handleChange = ( input, e ) => {
    setValues( {
      ...values,
      [ input ]: ( input !== 'salaryIndication' ) ? e.target.value : e
    } )
  }
  return (
    <ThemeProvider theme={ theme }>
      <CssBaseline />
      <Component { ...pageProps } values={ values } handleChange={ handleChange } />
    </ThemeProvider>
  )
}

export default MyApp
