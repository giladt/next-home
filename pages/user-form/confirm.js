import {
  Typography,
} from '@material-ui/core'
import Layout from '../../components/layout'
import { useRouter } from 'next/router'

export default function Confirm ( { values, handleChange } ) {

  const router = useRouter()

  const back = e => {
    e.preventDefault()
    router.push( '/user-form/step4' )
  }

  return (
    <Layout
      title="Detail Overview"
      actions={ { buttons: [ 'back' ], step: 5 } }
    >
      <div>
        <Typography variant="h4">
          Overview
        </Typography>
        <Typography variant="h6">
          Full Name
        </Typography>
        <Typography>
          { values.firstName } { values.lastName }
        </Typography>
        <Typography variant="h6">
          Email
        </Typography>
        <Typography >
          { values.email }
        </Typography>
        <Typography variant="h6">
          Phone Number
        </Typography>
        <Typography >
          { values.phoneNumber }
        </Typography>
        <Typography variant="h6">
          Salary Indication
        </Typography>
        <Typography>
          { values.salaryIndication }
        </Typography>
      </div>
    </Layout>
  )
}
