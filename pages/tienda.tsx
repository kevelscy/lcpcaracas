import Head from 'next/head'
import Link from 'next/link'

import { Page, ReactNode } from 'lib/types'
import MainLayout from 'layouts/Main'
import { Product } from 'components/common/Product'
import { useProducts } from 'lib/hooks/useProducts'
import { config } from 'config'

export const TiendaPage: Page = () => {
  const { products } = useProducts()

  return (
    <>
      <Head>
        <title>{config.PAGE_INFO.SEO.pageTitle} - Tienda</title>
        <meta name='description' content='Tienda de La Casa de mi Padre' />
      </Head>

      <div className='min-h-screen w-full text-center pt-36 px-4'>
        {
          products.length !== 0
            ? <>
              <h5 className='text-5xl font-black text-gray-900'>Tienda LCP</h5>

              <ul className='flex flex-wrap w-full h-full max-w-5xl mx-auto'>
                {
                  products.map(product => (
                    <>
                      <li className='max-w-xs w-full mr-6 my-4'>
                        <Product product={product} />
                      </li>
                      <li className='max-w-xs w-full mr-6 my-4'>
                        <Product product={product} />
                      </li>
                    </>
                  ))
                }
              </ul>
            </>
            : <div className='pt-20 text-center'>
              <span className='text-3xl font-black'>Sin Productos</span>
              <br />
              <Link href='/'>
                <a className='text-lg text-secondary-500 xl:text-xl'>Ir al inicio</a>
              </Link>
            </div>
        }
      </div>
    </>
  )
}

TiendaPage.getLayout = (page: ReactNode) => (
  <MainLayout>
    {page}
  </MainLayout>
)

export default TiendaPage
