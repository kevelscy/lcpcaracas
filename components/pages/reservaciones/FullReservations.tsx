import Head from 'next/head'
import Link from 'next/link'

import { config } from 'config'

export const FullReservations = () => (
  <>
    <Head>
      <title>{config.PAGE_INFO.SEO.pageTitle} - Reservaciones Sin Cupos</title>
      <meta name="robots" content="noindex" />
    </Head>

    <div className='w-full h-screen flex flex-col justify-center items-center text-center'>
      <span className='text-4xl md:text-7xl font-black text-gray-900 uppercase'>Sin Cupos</span>
      <br />
      <Link href='/'>
        <a className='text-lg text-secondary-500 xl:text-xl underline underline-offset-1'>Ir al inicio</a>
      </Link>
    </div>
  </>
)
