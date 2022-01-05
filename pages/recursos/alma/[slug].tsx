import { ArticleDetailLayout } from 'layouts/ArticleDetail'
import { GetServerSideProps, IArticle, ReactNode } from 'lib/types'
import { getArticleBySlug } from 'lib/utils/blog/getArticles'

import MainLayout from 'layouts/Main'
import { ArticleNotFounded } from 'components/pages/recursos/common/ArticleNotFounded'

export const AlmaArticleDetail = ({ article }: { article: IArticle }) => {
  if (!article) return <ArticleNotFounded />

  return (
    <ArticleDetailLayout
      image={article.imageSrc}
      tag={article.tag}
      title={article.title}
      author={article.authorName || 'Desconocido'}
      publishied={article.date}
      authorProfesion={article.authorProfesion}
    >
      {article && article.content}
    </ArticleDetailLayout>
  )
}

AlmaArticleDetail.getLayout = (page: ReactNode) => (
  <MainLayout>
    {page}
  </MainLayout>
)

export default AlmaArticleDetail

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const article: IArticle = await getArticleBySlug(params.slug)

  return {
    props: { article }
  }
}
