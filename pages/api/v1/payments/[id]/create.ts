import {NextApiRequest, NextApiResponse} from 'next'
import { readFile, writeFile } from 'utils/fileActions'
import { Payment, Payments } from 'types/payments'

export default (req: NextApiRequest, res:NextApiResponse) => { 
  if(req.method!==`POST`) return res.status(500).json({ error: `Invalid call to the API` })

  try {
    const contractId: number = parseInt(req.query.id.toString())
    const now:Date = new Date()

    const {
      value,
      description,
      time = now,
      isImported = false,
    }:Payment = req.body

    readFile( raw_data => {
      const payments:Payments = raw_data
      const id:number = payments.items.sort( ( a:Payment, b:Payment ) => b.id - a.id )[ 0 ].id + 1
      const payment:Payment = {
        id,
        contractId,
        description,
        value,
        time,
        isImported,
        createdAt: now,
        updatedAt: now,
        isDeleted: false
      }

      payments.sum += value
      payments.items.unshift( payment )

      writeFile( JSON.stringify( { ...payments } ), () => {
        return res.status( 200 ).json( payments.items[0] )
      } )
    }, true )
  } catch(e) {
    return res.status(500).json({ error: e.message})
  }
}
