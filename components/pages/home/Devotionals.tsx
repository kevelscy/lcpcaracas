import { ArticleSkeletonList } from 'components/common/Loaders/Skeletons'
import { PostsList } from 'components/pages/recursos/common'

export const Devotionals = ({ articles }) => {
  return (
    <section className='py-8 px-4 text-center'>
      <h5 className='text-3xl text-primary-500 font-black lg:text-4xl 3xl:text-5xl'>
        Queremos ayudarte <br className='md:hidden' /> a crecer de manera integral
      </h5>
      <br />
      <span className='text-xl 3xl:text-2xl'>Lo mas reciente</span>
      <br />
      {
        articles.length !== 0
          ? <PostsList articles={articles.slice(0, 6)} />
          : <ArticleSkeletonList />
      }
    </section>
  )
}
