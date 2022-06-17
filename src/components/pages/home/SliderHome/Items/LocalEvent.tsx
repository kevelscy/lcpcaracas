import Image from 'next/image'

// import eventSrcDesktop from 'public/img/banner/event-desktop.webp'
// import eventSrcMobile from 'public/img/banner/event-mobile.webp'
import temaDomingoDesktopSrc from 'public/img/banner/temaDesktop.webp'
import temaDomingoMobileSrc from 'public/img/banner/temaMobile.webp'

export const LocalEvent = () => (
  <div className='h-full'>
    {/* <div className='hidden sm:block'>
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
    </div> */}
  </div>
)

export const LocalEvent2 = () => (
  <div className='h-full'>
    <div className='hidden sm:block'>
      <Image
        src={temaDomingoDesktopSrc}
        alt='La Casa de mi Padre - Servicio de Dedicación'
        layout='fill'
        objectFit="cover"
        quality={100}
        placeholder='blur'
      />
    </div>

    <div className='sm:hidden'>
      <Image
        src={temaDomingoMobileSrc}
        alt='La Casa de mi Padre - Servicio de Dedicación'
        layout='fill'
        objectFit="cover"
        quality={100}
        placeholder='blur'
      />
    </div>
  </div>
)