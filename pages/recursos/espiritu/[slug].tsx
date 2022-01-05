import { GetServerSideProps, ReactNode } from 'lib/types'
import { getArticleBySlug } from 'lib/utils/blog/getArticles'

import MainLayout from 'layouts/Main'
import { ArticleDetailLayout } from 'layouts/ArticleDetail'
import { ArticleNotFounded } from 'components/pages/recursos/common/ArticleNotFounded'

export const SpiritArticleDetail = ({ article }) => {
  if (!article) return <ArticleNotFounded />

  return (
    <ArticleDetailLayout
      image={article.imageSrc}
      tag={article.tag}
      title={article.title}
      author={article.authorName || 'Desconocido'}
      authorProfesion={article.authorProfesion}
      publishied={article.date}
    >
      {article && article.content}
    </ArticleDetailLayout>
  )
}

SpiritArticleDetail.getLayout = (page: ReactNode) => (
  <MainLayout>
    {page}
  </MainLayout>
)

export default SpiritArticleDetail

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const article = await getArticleBySlug(params.slug)

  return {
    props: { article }
  }
}
