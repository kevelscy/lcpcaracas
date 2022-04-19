import MainLayout from 'layouts/Main'
import { Page, ReactNode } from 'lib/types'

const CARD_WIDTH_SIZE_PX = 300

const DevocionalesPage: Page = () => {
  return (
    <div className="w-full h-full mt-20">
      <ul style={{ gridTemplateColumns: `repeat(auto-fit, minmax(${CARD_WIDTH_SIZE_PX}px, 1fr)` }} className='grid items-center justify-center justify-items-center gap-4 py-8 px-4'>
        <li className={`h-24 w-[${CARD_WIDTH_SIZE_PX}px] bg-[#F7F7F7] rounded shadow-md flex items-center justify-center`}>
          <div className='bg-green-500 h-7 w-7 mr-2' />
          <h1 className="text-xl truncate">Hello, World!</h1>
        </li>
        <li className={`h-24 w-[${CARD_WIDTH_SIZE_PX}px] bg-[#F7F7F7] rounded shadow-md flex items-center justify-center`}>
          <div className='bg-green-500 h-7 w-7 mr-2' />
          <h1 className="text-xl truncate">Hello, World!</h1>
        </li>
        <li className={`h-24 w-[${CARD_WIDTH_SIZE_PX}px] bg-[#F7F7F7] rounded shadow-md flex items-center justify-center`}>
          <div className='bg-green-500 h-7 w-7 mr-2' />
          <h1 className="text-xl truncate">Hello, World!</h1>
        </li>
        <li className={`h-24 w-[${CARD_WIDTH_SIZE_PX}px] bg-[#F7F7F7] rounded shadow-md flex items-center justify-center`}>
          <div className='bg-green-500 h-7 w-7 mr-2' />
          <h1 className="text-xl truncate">Hello, World!</h1>
        </li>
        <li className={`h-24 w-[${CARD_WIDTH_SIZE_PX}px] bg-[#F7F7F7] rounded shadow-md flex items-center justify-center`}>
          <div className='bg-green-500 h-7 w-7 mr-2' />
          <h1 className="text-xl truncate">Hello, World!</h1>
        </li>
        <li className={`h-24 w-[${CARD_WIDTH_SIZE_PX}px] bg-[#F7F7F7] rounded shadow-md flex items-center justify-center`}>
          <div className='bg-green-500 h-7 w-7 mr-2' />
          <h1 className="text-xl truncate">Hello, World!</h1>
        </li>
        <li className={`h-24 w-[${CARD_WIDTH_SIZE_PX}px] bg-[#F7F7F7] rounded shadow-md flex items-center justify-center`}>
          <div className='bg-green-500 h-7 w-7 mr-2' />
          <h1 className="text-xl truncate">Hello, World!</h1>
        </li>
        <li className={`h-24 w-[${CARD_WIDTH_SIZE_PX}px] bg-[#F7F7F7] rounded shadow-md flex items-center justify-center`}>
          <div className='bg-green-500 h-7 w-7 mr-2' />
          <h1 className="text-xl truncate">Hello, World!</h1>
        </li>
        <li className={`h-24 w-[${CARD_WIDTH_SIZE_PX}px] bg-[#F7F7F7] rounded shadow-md flex items-center justify-center`}>
          <div className='bg-green-500 h-7 w-7 mr-2' />
          <h1 className="text-xl truncate">Hello, World!</h1>
        </li>
        <li className={`h-24 w-[${CARD_WIDTH_SIZE_PX}px] bg-[#F7F7F7] rounded shadow-md flex items-center justify-center`}>
          <div className='bg-green-500 h-7 w-7 mr-2' />
          <h1 className="text-xl truncate">Hello, World!</h1>
        </li>
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
