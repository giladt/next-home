import { TextField } from '@material-ui/core'
import Layout from '../../components/layout'

export default function Step1 ( { values, handleChange } ) {
  return (
    <Layout
      title='Full Name'
      actions={ { buttons: [ 'continue' ], step: 1 } }
    >
      <TextField
        id='first-name'
        label="Enter your first name"
        floatinglabeltext="First Name"
        value={ values.firstName }
        onChange={ e => handleChange( 'firstName', e ) }
      />
      <br />
      <TextField
        id='last-name'
        label="Enter your last name"
        floatinglabeltext="Last Name"
        value={ values.lastName }
        onChange={ e => handleChange( 'lastName', e ) }
      />
    </Layout>
  )
}
