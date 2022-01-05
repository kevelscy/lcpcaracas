import Head from 'next/head'
import Image from 'next/image'

import { config } from 'config'
import { Page, ReactNode } from 'lib/types'
import MainLayout from 'layouts/Main'
import { EmailContact } from 'components/pages/contactanos/FormContact'

import contactanosBg from 'public/img/contactanosBg.webp'

export const ContactanosPage: Page = () => {
  return (
    <>
      <Head>
        <title>{config.PAGE_INFO.SEO.pageTitle} - Contáctanos</title>
        <meta name='description' content='Contacta a La Casa de mi Padre' />
      </Head>

      <div className='min-h-screen-14 w-full'>
        <Image
          src={contactanosBg}
          placeholder='blur'
          layout='fill'
          objectFit="cover"
          quality={100}
          alt='LCP Contactanos'
        />

        <div className='w-full h-full flex justify-center items-center absolute text-white pt-20 md:pt-16'>
          <section className='w-4/5 max-w-3xl 3xl:max-w-5xl'>
            <EmailContact />
          </section>
        </div>
      </div>
    </>
  )
}

ContactanosPage.getLayout = (page: ReactNode) => (
  <MainLayout>
    {page}
  </MainLayout>
)

export default ContactanosPage
