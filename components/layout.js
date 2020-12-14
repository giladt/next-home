import { useRouter } from 'next/router'
import { MuiThemeProvider } from 'material-ui/styles'
import { makeStyles } from '@material-ui/core/styles'

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Avatar,
  LinearProgress,
  Box,
  Button,
  Container
} from '@material-ui/core'

const useStyles = makeStyles( ( theme ) => ( {
  cardContainer: {
    minWidth: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 345,
    height: 500,
  },
  cardContent: {
    height: 'calc(100% - 8rem)',
  },
  buttons: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: '2rem',
    '&:hover': {
      backgroundColor: 'rgb(149, 208, 119)',
    },
  },
  right: {
    justifyContent: 'flex-end',
  },
  left: {
    justifyContent: 'flex-start',
  }

} ) )

const steps = [
  'full-name',
  'email',
  'phone-number',
  'salary-indication',
  'confirm',
]

export default function Layout ( { title, children, actions } ) {
  const classes = useStyles()
  const router = useRouter()

  const btnContinue = e => {
    e.preventDefault()
    router.push( `/user-form/${ steps[ actions.step ] }` )
  }

  const btnBack = e => {
    e.preventDefault()
    router.push( `/user-form/${ steps[ actions.step - 2 ] }` )
  }

  return (
    <MuiThemeProvider>
      <Container maxWidth="xs" className={ classes.cardContainer }>
        <Card className={ classes.card }>
          <CardHeader
            avatar={
              <Avatar alt="HOME.ht" src="/home-logo.svg" />
            }
            title={
              ( actions.step > 0 ) &&
              <Box display="flex" justifyContent="center" alignItems="center">
                <Box width="100%" mr={ 1 }>
                  <LinearProgress variant="determinate" value={ ( ( actions.step - 1 ) / ( steps.length - 1 ) ) * 100 } />
                </Box>
                <Box minWidth={ 35 }>
                  <Typography variant="body2" color="textSecondary">{ `${ Math.round(
                    ( ( actions.step - 1 ) / ( steps.length - 1 ) ) * 100,
                  ) }%` }</Typography>
                </Box>
              </Box>
            }
          />
          <CardContent className={ classes.cardContent }>
            <Typography variant="h5">
              { title }
            </Typography>
            { children }

          </CardContent>
          <CardActions>
            { ( actions.buttons.includes( 'back' ) ) && (
              <div className={ `${ classes.buttons } ${ classes.left }` }>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={ btnBack }
                  className={ classes.button }
                >
                  Go Back
                </Button>
              </div>
            ) }
            { ( actions.buttons.includes( 'continue' ) ) && (
              <div className={ `${ classes.buttons } ${ classes.right }` }>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={ btnContinue }
                  className={ classes.button }
                >
                  Continue
                </Button>
              </div>
            ) }
          </CardActions>
        </Card>
      </Container>
    </MuiThemeProvider>
  )
}