import Link from 'next/link'
import Image from 'next/image'

import logoImg from 'public/img/logo.webp'

export const Logo = ({ onClick }: { onClick?: () => void }) => {
  return (
    <figure className='logo__figure'>
      <Link href='/'>
        <a>
          <Image
            onClick={onClick}
            src={logoImg}
            alt='La Casa de mi Padre'
            layout='fixed'
            width={70}
            height={40}
          />
        </a>
      </Link>
    </figure>
  )
}
