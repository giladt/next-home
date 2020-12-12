import {NextApiRequest, NextApiResponse} from 'next'
import { readFile, writeFile } from 'utils/fileActions'
import { Payment, Payments } from 'types/payments'

export default (req: NextApiRequest, res:NextApiResponse) => {
  if(req.method!==`DELETE`) return res.status(500).json({ error: `Invalid call to the API` })

  try {
    const id: number = parseInt(req.query.id.toString())
    const now:Date = new Date()

    readFile( raw_data => {
      const payments:Payments = raw_data
      const prev_payment_index:number = payments.items.findIndex( item => item.id === id )
      if ( prev_payment_index === -1 ) return res.status( 404 ).json( {
        message: `Error: Payment item ${ id } does not exists`
      } )

      const payment:Payment = { ...payments.items[ prev_payment_index ] }
      payment.updatedAt = now
      payment.isDeleted = true

      const updated_payments:Payments = { ...payments }
      updated_payments.sum -= payment.value
      updated_payments.items[ prev_payment_index ] = payment

      writeFile( JSON.stringify( updated_payments ), () => {
        return res.status( 204 ).json( payment )
      } )
    }, true )
  } catch(e) {
    return res.status(500).json({ error: e.message})
  }
}
