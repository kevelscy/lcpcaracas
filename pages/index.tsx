import Head from 'next/head'

import MainLayout from 'layouts/Main'

import { IHomeProps, ReactNode } from 'lib/types'
import { getArticles } from 'lib/utils/blog/getArticles'
import { getAllBannerImages } from 'lib/utils/banner/getAllBannerImages'
import { Slider, WorshipSchedule, Resources, Devotionals, PrayRequest } from 'components/pages/home'

export const Home = ({ articles, sliderItems }: IHomeProps) => {
  return (
    <>
      <Head>
        <meta name='description' content='Somos una iglesia cristiana, alegre, sencilla, con corazón de familia, donde todos tienen un lugar.' />
      </Head>

      <Slider
        topicOfTheMonth={sliderItems.topicOfTheMonth}
        events={sliderItems.events}
      />
      <WorshipSchedule />
      <Resources />
      <Devotionals articles={articles} />
      <PrayRequest />
    </>
  )
}

Home.getLayout = (page: ReactNode) => (
  <MainLayout>
    {page}
  </MainLayout>
)

export const getStaticProps = async () => {
  const articles = await getArticles()
  const { events, topicOfTheMonth } = await getAllBannerImages()

  return {
    props: {
      articles,
      sliderItems: { topicOfTheMonth, events }
    }
  }
}

export default Home
