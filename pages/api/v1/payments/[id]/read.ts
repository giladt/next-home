import {NextApiRequest, NextApiResponse} from 'next'
import { readFile } from 'utils/fileActions'
import { Payment, Payments } from 'types/payments'

export default (req: NextApiRequest, res:NextApiResponse) => { 
  if(req.method!==`GET`) return res.status(500).json({ error: `Invalid call to the API` })
  if(!req.query.id || !req.query.startDate || !req.query.endDate) return res.status(404).json({ error: `Missing 'startDate' and 'endDate' in the query` })

  try {
    const contractId: number = parseInt(req.query.id.toString())
    const startDate: Date = req.query.startDate? new Date(req.query.startDate.toString()) : new Date(`1900-01-01`)
    const endDate: Date = req.query.endDate? new Date(req.query.endDate.toString()): new Date()
    
    readFile( raw_data => {
      const payments:Payments = JSON
        .parse( raw_data ).items
        .filter( 
          (p:Payment) => {
            return p.contractId === contractId &&
            new Date(p.time) >= startDate && 
            new Date(p.time) <= endDate &&
            !p.isDeleted 
          }
        )

      return res.status( 200 ).json( payments )
    } )
  } catch (e) {
    return res.status(500).json({ error: e.message })
  }

}
