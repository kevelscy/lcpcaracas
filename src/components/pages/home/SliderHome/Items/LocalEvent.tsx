import Image from 'next/image'

// import eventSrcDesktop from 'public/img/banner/event-desktop.webp'
// import eventSrcMobile from 'public/img/banner/event-mobile.webp'

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
        // src={bannerDesktopSrc}
        src='/img/banner/banner-desktop.webp'
        alt='La Casa de mi Padre - Servicio Domingo'
        layout='fill'
        objectFit="cover"
        quality={100}
        // placeholder='blur'
      />
    </div>

    <div className='sm:hidden'>
      <Image
        // src={bannerMobileSrc}
        src='/img/banner/banner-mobile.webp'
        alt='La Casa de mi Padre - Servicio de Domingo'
        layout='fill'
        objectFit="cover"
        quality={100}
        // placeholder='blur'
      />
    </div>
  </div>
)
