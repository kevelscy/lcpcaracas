import Image from 'next/image'
import eventSrcDesktop from 'public/img/banner/event-desktop.webp'
import eventSrcMobile from 'public/img/banner/event-mobile.webp'

export const LocalEvents = () => (
  <div className='h-full'>
    <div className='hidden sm:block'>
      <Image
        src={eventSrcDesktop}
        alt='La Casa de mi Padre'
        layout='fill'
        objectFit="cover"
        quality={100}
      />
    </div>

    <div className='sm:hidden'>
      <Image
        src={eventSrcMobile}
        alt='La Casa de mi Padre'
        layout='fill'
        objectFit="cover"
        quality={100}
      />
    </div>
  </div>
)
