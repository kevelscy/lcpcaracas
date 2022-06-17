import { ReactNode } from 'lib/types'

interface IBannerTopProps {
  children?: ReactNode
  color?: string
  message?: string
  type?: 'primary' | 'secondary'
}

export const BannerTop = ({ children, message, color, type }: IBannerTopProps) => {
  if (type === 'primary') {
    return (
      <section className='w-full rounded-3xl mt-8 mb-4 mx-auto py-1 px-2 bg-secondary-500 ml:max-w-xs 3xl:max-w-md'>
        <p className='flex justify-center items-center text-xs text-white text-center xs:text-sm md:text-xs'>
          {children}
          {message}
        </p>
      </section>
    )
  }

  return (
    <section
      className={`sm:mt-0 max-w-xl sm:rounded-t-none m-auto mt-2 py-1 px-4 rounded text-center ${
        color === 'secondary' ? 'bg-yellow-400' : 'bg-black'
      }`}
    >
      <p className='text-white flex justify-center items-center ml:text-xs'>
        {children}
        {message}
      </p>
    </section>
  )
}
