import { veryfyBasicAuth } from 'lib/utils/verifyBasicAuth'
import { NextApiRequest, NextApiResponse } from 'lib/types'
import fetch from 'node-fetch'
import { getEventInscriptionsEDC } from 'lib/services/firebase/utils/getData'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
      return res.status(401).json({ data: null, error: 'Missing Authorization Header' })
    }

    const { isAuthenticated } = veryfyBasicAuth({ req })

    if (!isAuthenticated) {
      return res.status(401).json({
        data: null,
        error: 'Invalid Authentication Credentials'
      })
    }

    const usersReservationsDB = await getEventInscriptionsEDC()

    const usersReservations = usersReservationsDB.docs.map(doc => {
      return Object.values({
        date: doc.data().date,
        ci: doc.data().ci,
        fullName: doc.data().fullName,
        email: doc.data().email,
        levelEDC: doc.data().levelEDC,
        sector: doc.data().sector
      })
    })

    const sendReservationsToExcelRes = await fetch('https://enjy8lvy9j8xen5.m.pipedream.net', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ reservations: usersReservations })
    })

    if (!sendReservationsToExcelRes.ok) {
      return res.status(500).json({
        data: null,
        error: 'Error al enviar las inscripcciones a pipedream'
      })
    }

    res.status(200).json({
      data: 'inscripcciones registradas en pipedream!',
      error: null
    })
  } else {
    res.status(405).json({
      data: null,
      error: 'No Permitido'
    })
  }
}
