import Image from 'next/image'

import headerHomeDefault from 'public/img/headerHomeDefault.webp'
import headerHomeMobileDefault from 'public/img/headerHomeMobileDefault.webp'

export const DefaultItem = () => (
  <div className='h-full'>
    <div className='hidden sm:block'>
      <Image
        src={headerHomeDefault}
        alt='La Casa de mi Padre'
        placeholder='blur'
        layout='fill'
        objectFit="cover"
        quality={100}
      />
    </div>

    <div className='sm:hidden'>
      <Image
        src={headerHomeMobileDefault}
        alt='La Casa de mi Padre'
        placeholder='blur'
        layout='fill'
        objectFit="cover"
        quality={100}
      />
    </div>

    {/* <div css={titleWrapper}>
      <div css={titleContainer}>
        <span>BIENVENIDOS A</span> <br />
        <span>LA CASA DE MI PADRE</span> <br />

        <div css={slogan}>
          <span>DONDE TODOS <Br Hidden='md' /> TIENEN UN LUGAR</span>
        </div>
      </div>
    </div> */}
  </div>
)
