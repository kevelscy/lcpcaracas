import Head from 'next/head'
import Link from 'next/link'

import { Page, ReactNode } from 'lib/types'
import { Event } from 'components/pages/eventos/Event'
import { useEvents } from 'lib/hooks/useEvents'

import MainLayout from 'layouts/Main'
import { config } from 'config'

export const EventosPage: Page = () => {
  const { events } = useEvents()

  return (
    <>
      <Head>
        <title>{config.PAGE_INFO.SEO.pageTitle} - Eventos</title>
        <meta name='description' content='Eventos de La Casa de mi Padre' />
      </Head>

      <div className='min-h-screen w-full'>
        <div className='w-full h-full flex flex-col justify-center items-center pt-32'>
          {
            events.length !== 0
              ? <>
                <span className='text-3xl md:text-5xl font-black text-gray-900'>Eventos</span>
                <br />

                <ul className='flex flex-wrap justify-center items-center max-w-5xl gap-x-2'>
                  {
                    events.map(event => (
                      <li key={event.id}>
                        <Event
                          key={event.title}
                          imgSrc={event.imgSrc}
                          title={event.title}
                          description={event.description}
                          redirectTo={event.redirectTo}
                          redirectLabel={event.redirectLabel}
                          date={event.date}
                          schedule={event.schedule}
                        />
                      </li>
                    ))
                  }
                </ul>
              </>
              : <div className='pt-20 text-center'>
                <span className='text-4xl md:text-7xl font-black text-gray-900'>Sin Eventos</span>
                <br />
                <Link href='/'>
                  <a className='text-lg text-secondary-500 xl:text-xl underline underline-offset-1'>Ir al inicio</a>
                </Link>
              </div>
          }
        </div>
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
