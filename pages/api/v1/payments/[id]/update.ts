import {NextApiRequest, NextApiResponse} from 'next'
import { readFile, writeFile } from 'utils/fileActions'
import { Payment, Payments } from 'types/payments'

export default (req: NextApiRequest, res:NextApiResponse) => {
  if(req.method!==`PUT`) return res.status(500).json({ error: `Invalid call to the API` })

  try {
    const id: number = parseInt(req.query.id.toString())
    const now:Date = new Date()
    const {
      contractId,
      description,
      value,
      time,
      isImported,
    }:Payment = req.body

    readFile( raw_data => {
      const payments:Payments = raw_data
      const prev_payment_index:number = payments.items.findIndex( item => item.id === id )
      if ( prev_payment_index === -1 ) return res.status( 404 ).json( {
        message: `Error: Payment item ${ id } does not exists`
      } )

      const payment:Payment = { ...payments.items[ prev_payment_index ] }
      if ( contractId ) payment.contractId = contractId
      if ( description ) payment.description = description
      if ( value ) payment.value = value
      if ( time ) payment.time = time
      if ( isImported ) payment.isImported = isImported
      payment.updatedAt = now

      const updated_payments:Payments = { ...payments }
      updated_payments.sum -= updated_payments.items[prev_payment_index].value
      updated_payments.sum += value
      updated_payments.items[ prev_payment_index ] = payment

      writeFile( JSON.stringify( updated_payments ), () => {
        res.status( 204 ).json( payment )
        return
      } )
    }, true )
  } catch(e) {
    return res.status(500).json({ error: e.message})
  }
}
