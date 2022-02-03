import Image from 'next/image'
import eventSrcDesktop from 'public/img/banner/event2-desktop.webp'
import eventSrcMobile from 'public/img/banner/event2-mobile.webp'

export const LocalEvent = () => (
  <div className='h-full'>
    <div className='hidden sm:block'>
      <Image
        src={eventSrcDesktop}
        alt='La Casa de mi Padre - Servicio de Dedicación'
        layout='fill'
        objectFit="cover"
        quality={100}
        placeholder='blur'
      />
    </div>

    <div className='sm:hidden'>
      <Image
        src={eventSrcMobile}
        alt='La Casa de mi Padre - Servicio de Dedicación'
        layout='fill'
        objectFit="cover"
        quality={100}
        placeholder='blur'
      />
    </div>
  </div>
)
