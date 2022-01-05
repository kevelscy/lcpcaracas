import Head from 'next/head'
import Link from 'next/link'
import { config } from 'config'

export default function Custom404 () {
  return (
    <>
      <Head>
        <title>{config.PAGE_INFO.SEO.pageTitle} - 404</title>
        <meta name='googlebot' content='noindex' />
      </Head>

      <div className='w-full h-screen flex flex-col justify-center items-center'>
        <div>
          <span className='text-4xl font-black xl:text-5xl'>Pagina no existente</span>
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
