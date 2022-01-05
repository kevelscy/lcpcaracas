import Head from 'next/head'

import MainLayout from 'layouts/Main'

import { ReactNode } from 'lib/types'
import { Slider, WorshipSchedule, Resources, Devotionals, PrayRequest } from 'components/pages/home'

export const Home = () => {
  return (
    <>
      <Head>
        <meta name='description' content='Somos una iglesia cristiana, alegre, sencilla, con corazón de familia, donde todos tienen un lugar.' />
      </Head>

      <Slider />
      <WorshipSchedule />
      <Resources />
      <Devotionals />
      <PrayRequest />
    </>
  )
}

Home.getLayout = (page: ReactNode) => (
  <MainLayout>
    {page}
  </MainLayout>
)

export default Home
