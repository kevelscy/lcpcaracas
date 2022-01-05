import { ArticleDetailLayout } from 'layouts/ArticleDetail'
import { ReactNode } from 'lib/types'

import MainLayout from 'layouts/Main'
import { ArticleNotFounded } from 'components/pages/recursos/common/ArticleNotFounded'
import { useArticles } from 'lib/hooks/useArticles'
import { Spinner } from 'components/common/Loaders'

export const AlmaArticleDetail = () => {
  const { articles, articlesIsLoading } = useArticles('alma')

  if (articlesIsLoading) return <Spinner />

  if (!articles[0]) return <ArticleNotFounded />

  return (
    <ArticleDetailLayout
      image={articles[0].imageSrc}
      tag={articles[0].tag}
      title={articles[0].title}
      author={articles[0].authorName || 'Desconocido'}
      publishied={articles[0].date}
      authorProfesion={articles[0].authorProfesion}
    >
      {articles[0] && articles[0].content}
    </ArticleDetailLayout>
  )
}

AlmaArticleDetail.getLayout = (page: ReactNode) => (
  <MainLayout>
    {page}
  </MainLayout>
)

export default AlmaArticleDetail
