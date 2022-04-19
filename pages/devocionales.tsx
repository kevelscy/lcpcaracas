import MainLayout from 'layouts/Main'
import { Page, ReactNode } from 'lib/types'

const DevocionalesPage: Page = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <h1 className="text-3xl">Hello, World!</h1>
    </div>
  )
}

DevocionalesPage.getLayout = (page: ReactNode) => (
  <MainLayout>
    {page}
  </MainLayout>
)

export default DevocionalesPage
