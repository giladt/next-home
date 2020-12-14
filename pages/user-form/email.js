import {
  TextField,
} from '@material-ui/core'
import Layout from '../../components/layout'

export default function Step2 ( { values, handleChange } ) {

  return (
    <Layout
      title="E-Mail"
      actions={ { buttons: [ 'continue', 'back' ], step: 2 } }
    >
      <TextField
        label="Enter your EMail"
        floatinglabeltext="EMail"
        value={ values.email }
        onChange={ e => handleChange( 'email', e ) }
      />
    </Layout>
  )
}