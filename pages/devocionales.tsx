import { IconPDF } from 'components/common/Icons'
import MainLayout from 'layouts/Main'
import { Page, ReactNode } from 'lib/types'
import { useEffect, useState } from 'react'

const DevocionalesPage: Page = () => {
  const [devotionals, setDevotionals] = useState([])

  const getFiles = async () => {
    const res = await fetch('/api/devotionals')
    const { data } = await res.json()

    setDevotionals(data)
  }

  useEffect(() => {
    getFiles()
  }, [])

  return (
    <div className='w-full h-full mt-36 text-center px-4'>
      <h3 className='font-black text-5xl text-secondary-500'>Devocionales</h3>
      <span>Descarga los devocionales de La Casa de mi Padre haciendo click sobre ellas</span>

      <ul className='grid grid-cols-3 gap-x-10 grid-flow-row max-w-7xl mx-auto mt-4'>
        {
          devotionals.map((file, idx) => (
            <li key={idx}>
              <a href={file.url} download className='h-24 w-full bg-[#F7F7F7] rounded shadow-sm flex items-center justify-start px-4 hover:bg-secondary-500 hover:bg-opacity-40 border-2 border-secondary-500 border-opacity-25'>
                <IconPDF classes='h-7 w-7 mr-2' />
                <h1 className='text-lg text-left'>{file.title}</h1>
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

DevocionalesPage.getLayout = (page: ReactNode) => (
  <MainLayout>
    {page}
  </MainLayout>
)

export default DevocionalesPage
