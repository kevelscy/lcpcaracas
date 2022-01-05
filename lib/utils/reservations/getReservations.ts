import { config } from 'config'
import { getReservationsDB } from 'lib/services/firebase/utils/getData'

const { FIRST_WORSHIP, SECOND_WORSHIP, THIRD_WORSHIP } = config.RESERVATIONS.WORSHIPS

type TWorship = {
  total: number,
  totalKids: number
}

export const getReservations = async () => {
  let firstWorship: TWorship, secondWorship: TWorship, thirdWorship: TWorship
  const data = await getReservationsDB()

  data.docs.forEach((doc) => {
    if (doc.id === FIRST_WORSHIP.id) firstWorship = JSON.parse(JSON.stringify(doc.data()))
    if (doc.id === SECOND_WORSHIP.id) secondWorship = JSON.parse(JSON.stringify(doc.data()))
    if (doc.id === THIRD_WORSHIP.id) thirdWorship = JSON.parse(JSON.stringify(doc.data()))
  })

  return {
    firstWorship,
    secondWorship,
    thirdWorship
  }
}
