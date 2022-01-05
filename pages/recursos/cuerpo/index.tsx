import Head from 'next/head'

import { config } from 'config'
import { Page, ReactNode } from 'lib/types'
import { useArticles } from 'lib/hooks/useArticles'

import MainLayout from 'layouts/Main'
import { HeaderPage, PostsList } from 'components/pages/recursos/common'
import { LoadArticles } from 'components/pages/recursos/common/LoadArticles'
import { EmptyArticles } from 'components/pages/recursos/common/EmptyArticles'

import cuerpoSrc from 'public/img/cuerpo.webp'

export const CuerpoPage: Page = () => {
  const { articles, articlesIsLoading } = useArticles('cuerpo')

  return (
    <>
      <Head>
        <title>{config.PAGE_INFO.SEO.pageTitle} - Cuerpo</title>
        <meta name='description' content='La Casa de mi Padre - Cuerpo' />
      </Head>

      <HeaderPage title='Cuerpo' img={cuerpoSrc} />

      {
        articlesIsLoading
          ? <LoadArticles />
          : articles.length !== 0

            ? <PostsList articles={articles} />
            : <EmptyArticles />
      }
    </>
  )
}

CuerpoPage.getLayout = (page: ReactNode) => (
  <MainLayout>
    {page}
  </MainLayout>
)

export default CuerpoPage
