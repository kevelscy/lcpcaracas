import Head from 'next/head'

import { Page, ReactNode } from 'lib/types'

import MainLayout from 'layouts/Main'
import { config } from 'config'
import { FormEDCReservations } from 'components/pages/eventos/EDC/FormReservations'

export const EventosPage: Page = () => {
  return (
    <>
      <Head>
        <title>{config.PAGE_INFO.SEO.pageTitle} - EDC</title>
      </Head>

      <div className='min-h-screen w-full flex justify-center items-center pt-24'>
        <FormEDCReservations />
      </div>
    </>
  )
}

EventosPage.getLayout = (page: ReactNode) => (
  <MainLayout>
    {page}
  </MainLayout>
)

export default EventosPage
