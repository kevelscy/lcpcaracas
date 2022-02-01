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

      <div className='min-h-screen-14 w-full flex flex-col md:flex-row justify-center items-center px-4 gap-5'>
        <div className='md:mt-20'>
          <img
            src='/img/local-events/edc.webp'
            className='rounded-md'
          />
        </div>

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
