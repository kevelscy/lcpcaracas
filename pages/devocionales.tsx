import MainLayout from 'layouts/Main'
import { Page, ReactNode } from 'lib/types'
import { useEffect, useState } from 'react'

const DevocionalesPage: Page = () => {
  const [files, setFiles] = useState([])

  const getFiles = async () => {
    const res = await fetch('/devotionals/Aleluya Por Siempre Bateria.pdf')

    const fileRes = {
      title: decodeURI(res.url),
      url: res.url
    }

    setFiles(prevState => ([...prevState, fileRes]))
  }

  useEffect(() => {
    getFiles()
  }, [])

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
