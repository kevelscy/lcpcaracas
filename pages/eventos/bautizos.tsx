import Head from 'next/head'
import { config } from 'config'
import { FormBautizos } from 'components/pages/eventos/bautizos/FormBautizos'

export default function Custom500 () {
  return (
    <>
      <Head>
        <title>{config.PAGE_INFO.SEO.pageTitle} - Bautizos</title>
      </Head>

      <div className='w-full py-10 min-h-screen flex flex-col justify-center items-center text-center'>
        <FormBautizos />
      </div>
    </>
  )
}
