import { TextField } from '@material-ui/core'
import Layout from '../../components/layout'

export default function Step1 ( { values, handleChange } ) {
  return (
    <Layout
      title='Welcome'
      actions={ { buttons: [ 'continue' ], step: 0 } }
    >
      <p>Please fill out your details in the following form</p>
    </Layout>
  )
}
