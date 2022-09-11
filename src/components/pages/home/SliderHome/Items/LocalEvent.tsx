import Image from 'next/image'

import eventSrcDesktop from 'public/img/banner/bautizosDesktop.webp'
import eventSrcMobile from 'public/img/banner/bautizosMobile.webp'

// import bannerDesktopSrc from 'public/img/banner/banner-desktop.webp'
// import bannerMobileSrc from 'public/img/banner/banner-mobile.webp'


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
        src={eventSrcDesktop}
        // src='/img/banner/agosto-desktop.webp'
        alt='La Casa de mi Padre - Servicio Domingo'
        layout='fill'
        objectFit="cover"
        quality={100}
        placeholder='blur'
      />
    </div>

    <div className='sm:hidden'>
      <Image
        src={eventSrcMobile}
        // src='/img/banner/agosto-mobile.webp'
        alt='La Casa de mi Padre - Servicio de Domingo'
        layout='fill'
        objectFit="cover"
        quality={100}
        placeholder='blur'
      />
    </div>
  </div>
)
