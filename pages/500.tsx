import Head from 'next/head'
import Link from 'next/link'
import { config } from 'config'

export default function Custom500 () {
  return (
    <>
      <Head>
        <title>{config.PAGE_INFO.SEO.pageTitle} - Server Error</title>
        <meta name='googlebot' content='noindex' />
      </Head>

      <div className='w-full h-screen flex flex-col justify-center items-center text-center'>
        <div>
          <span className='text-4xl font-black xl:text-5xl'>Hubo un error <br /> inesperado</span>
        </div>

        <br />

        <div>
          <Link href='/'>
            <a className='text-lg text-secondary-500 xl:text-xl'>Ir al inicio</a>
          </Link>
        </div>
      </div>
    </>
  )
}
