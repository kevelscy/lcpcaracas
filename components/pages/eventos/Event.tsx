import Image from 'next/image'
import Link from 'next/link'

interface IEventProps {
  imgSrc: string
  title?: string
  description?: string
  redirectTo?: string
  redirectLabel?: string
  date?: string
  imageRef?: string
  schedule?: string
  id?: string
}

export const Event = ({ imgSrc, title, description, redirectTo, redirectLabel, schedule, date }: IEventProps) => {
  return (
    <article className='event_item'>
      <div className={`event_content ${redirectTo ? 'cursor-default' : 'cursor-pointer'}`}>
        <Image
          src={imgSrc}
          alt={title || 'Evento LCP'}
          layout='fill'
          objectFit="cover"
        />

        {
          (redirectTo && redirectLabel) && (
            <Link href={redirectTo}>
              <a>{redirectLabel}</a>
            </Link>
          )
        }
        {/* <div className='event_overlay'></div>

        <div className='event_content--text'>
          { title && <h5 className='font-bold text-xl text-secondary-500'>{title}</h5> }

          { description && <p>{description}</p> }

          { title && <span className=' font-bold text-secondary-500'>{date} | {schedule} </span> }

          {
            (redirectTo && redirectLabel) && (
              <Link href={redirectTo}>
                <a>{redirectLabel}</a>
              </Link>
            )
          }
        </div>
      */}
      </div>
    </article>
  )
}
