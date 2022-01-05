import Head from 'next/head'
import Image from 'next/image'

import MainLayout from 'layouts/Main'
import { useReservations } from 'lib/hooks/useReservations'
import { Page, ReactNode } from 'lib/types'
import { config } from 'config'

import { Spinner } from 'components/common/Loaders/Spinner'
import { NewFormReservation } from 'components/pages/reservaciones/FormReservation'
import { DisabledReservations } from 'components/pages/reservaciones/DisabledReservations'
import { FullReservations } from 'components/pages/reservaciones/FullReservations'

import reservacionesBg from 'public/img/reservacionesBg.webp'

export const ReservacionesPage: Page = () => {
  const { reservations, reservationsIsLoading } = useReservations()

  if (!reservations.status && !reservationsIsLoading) return <DisabledReservations />

  if (
    !reservationsIsLoading &&
    // reservations.FIRST_WORSHIP.total >= reservations.MAX_RESERVATIONS &&
    reservations.SECOND_WORSHIP.total >= reservations.MAX_RESERVATIONS &&
    reservations.THIRD_WORSHIP.total >= reservations.MAX_RESERVATIONS
  ) return <FullReservations />

  return (
    <>
      <Head>
        <title>{config.PAGE_INFO.SEO.pageTitle} - Reservaciones</title>
        <meta name='description' content='Reserva en los servicios de La Casa de mi Padre' />
      </Head>

      <div className='min-h-screen-14 w-full'>
        <Image
          src={reservacionesBg}
          placeholder='blur'
          layout='fill'
          objectFit='cover'
          quality={100}
          priority
          className='headerPage__nosotros--BgImg '
          alt='Reservaciones LCP'
        />

        <div className='w-full h-full flex justify-center items-center absolute text-white px-4 pt-20 md:pt-16'>
          {
            reservationsIsLoading
              ? <Spinner />
              : <NewFormReservation reservations={reservations} />
          }
        </div>
      </div>
    </>
  )
}

ReservacionesPage.getLayout = (page: ReactNode) => (
  <MainLayout>
    {page}
  </MainLayout>
)

export default ReservacionesPage
