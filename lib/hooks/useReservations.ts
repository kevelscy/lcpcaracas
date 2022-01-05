import { useEffect, useState } from 'react'
import { onSnapshot } from 'firebase/firestore'

import { RESERVATIONS_DB_REF, USERS_RESERVATION_DB_REF } from 'lib/services/firebase/utils/refs'
import { IUseReservations } from 'lib/types'
import { config } from 'config'
// import { getReservations } from 'lib/utils/reservations/getReservations'

const {
  WORSHIPS: { FIRST_WORSHIP, SECOND_WORSHIP, THIRD_WORSHIP },
  MAX_RESERVATIONS
} = config.RESERVATIONS

const initialReservations = {
  status: false,
  MAX_RESERVATIONS,
  usersReservation: [],
  FIRST_WORSHIP: {
    ...FIRST_WORSHIP,
    total: 0,
    totalKids: 0
  },
  SECOND_WORSHIP: {
    ...SECOND_WORSHIP,
    total: 0,
    totalKids: 0
  },
  THIRD_WORSHIP: {
    ...THIRD_WORSHIP,
    total: 0,
    totalKids: 0
  }
}

export const useReservations = (): IUseReservations => {
  const [reservations, setReservations] = useState(initialReservations)
  const [isLoading, setIsLoading] = useState(true)
  const [error] = useState('')

  useEffect(() => {
    onSnapshot(USERS_RESERVATION_DB_REF, (snapshot) => {
      const usersReservation = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))

      setReservations(prevState => ({
        ...prevState,
        usersReservation
      }))
    })
  }, [])

  useEffect(() => {
    onSnapshot(RESERVATIONS_DB_REF, (snapshot) => {
      snapshot.docs.forEach(doc => {
        if (doc.id === 'status') {
          setReservations(prevState => ({
            ...prevState,
            status: doc.data().isActive
          }))
        }

        if (doc.id === FIRST_WORSHIP.id) {
          setReservations(prevState => ({
            ...prevState,
            FIRST_WORSHIP: {
              ...prevState.FIRST_WORSHIP,
              ...doc.data()
            }
          }))
        }

        if (doc.id === SECOND_WORSHIP.id) {
          setReservations(prevState => ({
            ...prevState,
            SECOND_WORSHIP: {
              ...prevState.SECOND_WORSHIP,
              ...doc.data()
            }
          }))
        }

        if (doc.id === THIRD_WORSHIP.id) {
          setReservations(prevState => ({
            ...prevState,
            THIRD_WORSHIP: {
              ...prevState.THIRD_WORSHIP,
              ...doc.data()
            }
          }))
        }
      })

      setIsLoading(false)
    })
  }, [])

  return {
    reservations,
    reservationsIsLoading: isLoading,
    reservationsError: error
  }
}
