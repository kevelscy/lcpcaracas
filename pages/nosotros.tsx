import Head from 'next/head'

import { Page, ReactNode } from 'lib/types'
import MainLayout from 'layouts/Main'
import { Header, Logos, AboutUs, OurFivePurposes, MisionAndVision, OurPastor, Video16Anniversary } from 'components/pages/nosotros'

import { config } from 'config'

export const NosotrosPage: Page = () => {
  return (
    <>
      <Head>
        <title>{config.PAGE_INFO.SEO.pageTitle} - Nosotros</title>
        <meta name='description' content='Conoce a La Casa de mi Padre' />
      </Head>

      <Header />
      <OurPastor />
      <Video16Anniversary />
      <AboutUs />
      <Logos />
      <MisionAndVision />
      <OurFivePurposes />
    </>
  )
}

NosotrosPage.getLayout = (page: ReactNode) => (
  <MainLayout>
    {page}
  </MainLayout>
)

export default NosotrosPage
