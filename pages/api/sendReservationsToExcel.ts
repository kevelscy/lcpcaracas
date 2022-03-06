// import { veryfyBasicAuth } from 'lib/utils/verifyBasicAuth'
import { NextApiRequest, NextApiResponse } from 'lib/types'
import fetch from 'node-fetch'
import { getUsersReservationsDB } from 'lib/services/firebase/utils/getData'
import { config } from 'config'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const usersReservationsDB = await getUsersReservationsDB()

  const usersReservations = usersReservationsDB.docs.map(doc => {
    return Object.values({
      date: doc.data().date,
      fullName: doc.data().fullName,
      phone: doc.data().phone,
      email: doc.data().email,
      reservations: doc.data().reservations,
      schedule: config.RESERVATIONS.WORSHIPS[doc.data().worship]?.label
    })
  })

  const sendReservationsToExcelRes = await fetch('https://enwaablcmxwvagn.m.pipedream.net', {
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
