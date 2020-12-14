import {
  Slider,
} from '@material-ui/core'
import Layout from '../../components/layout'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles( ( theme ) => ( {
  sliderContainer: {
    height: '20rem',
    padding: '1rem',
  },
} ) )

const marks = [
  {
    value: 1000,
    label: '0 € - 1000 €',
  },
  {
    value: 2000,
    label: '1000 € - 2000 €',
  },
  {
    value: 3000,
    label: '2000 € - 3000 €',
  },
  {
    value: 4000,
    label: '3000 € - 4000 €',
  },
  {
    value: 6000,
    label: 'Mehr als 4000 €',
  },
]

export default function Step4 ( { values, handleChange } ) {
  const classes = useStyles()

  return (
    <Layout
      title="Salary Indication"
      actions={ { buttons: [ 'continue', 'back' ], step: 4 } }
    >
      <div className={ classes.sliderContainer }>
        <Slider
          value={ values.salaryIndication }
          orientation="vertical"
          aria-labelledby="vertical-slider"
          step={ null }
          marks={ marks }
          min={ 1000 }
          max={ 6000 }
          onChange={ ( e, val ) => handleChange( 'salaryIndication', val ) }
        />
      </div>
    </Layout>
  )
}
