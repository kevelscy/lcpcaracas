import { getEventInscriptionsBautizos } from 'lib/services/firebase/utils/getData'
import { NextApiRequest, NextApiResponse } from 'lib/types'
import fetch from 'node-fetch'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const snapshot = await getEventInscriptionsBautizos()
  const usersReservations = snapshot.docs.map(doc => {
    return Object.values({
      date: doc.data().date,
      fullName: doc.data().fullName,
      phone: doc.data().phone,
      email: doc.data().email,
      zone: doc.data().zone,
      dateBirth: doc.data().dateBirth,
      civilState: doc.data().civilState,
      profestion: doc.data().profestion,
      timeConverted: doc.data().timeConverted,
      lcpAsisted: doc.data().lcpAsisted
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
      error: 'Error al enviar las reservaciones a pipedream'
    })
  }

  res.status(200).json({
    data: 'Reservaciones registradas en pipedream!',
    error: null
  })
}

// export default async (req: NextApiRequest, res: NextApiResponse) => {
// }
