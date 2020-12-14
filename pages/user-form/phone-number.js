import {
  TextField,
} from '@material-ui/core'
import Layout from '../../components/layout'

export default function Step3 ( { values, handleChange } ) {
  return (
    <Layout
      title="Phone Number"
      actions={ { buttons: [ 'continue', 'back' ], step: 3 } }
    >
      <TextField
        label="Enter your phone number"
        floatinglabeltext="Phone"
        value={ values.phoneNumber }
        onChange={ e => handleChange( 'phoneNumber', e ) }
      />
    </Layout>
  )
}
