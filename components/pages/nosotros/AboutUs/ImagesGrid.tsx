import Image from 'next/image'

export const ImagesGrid = ({ src = [], classes = '' }) => (
  <div className={`imagesWrapper ${classes}`}>
    <Image
      src={src[0]}
      placeholder="blur"
      alt="Inicios de La Casa de mi Padre"
      width={550}
      height={350}
      layout='responsive'
      objectFit='cover'
    />
    <div className='flex mt-2'>
      <Image
        src={src[1]}
        placeholder="blur"
        alt="Inicios de La Casa de mi Padre"
        width={550}
        height={350}
      />
      <div className='flex mt-2'>
        <Image
          src={src[2]}
          placeholder="blur"
          alt="Inicios de La Casa de mi Padre"
          width={550}
          height={350}
        />
      </div>
    </div>
  </div>
)
