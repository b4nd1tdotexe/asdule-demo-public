import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import styles from '@/styles/Instructors.module.css';
import FacebookIcon from './icons/FacebookIcon';
import InstagramIcon from './icons/InstagramIcon';
import Link from 'next/link';

const Instructor = ({
  name,
  role,
  img,
  fb,
  ig
}: {
  name: string,
  role: string,
  img: string | StaticImport,
  fb?: string,
  ig?: string
}) => {
  let cnt = 0;
  if (fb) ++cnt;
  if (ig) ++cnt;

  return (
    <div className={`${styles.grid} bg-white group`}>
      <div className='relative'>
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-[.5] transition-all' />
        <div className={`absolute flex gap-2 top-[calc(50%-12px)] ${cnt === 2 && 'left-[calc(50%-28px)]'} ${cnt === 1 && 'left-[calc(50%-12px)]'} opacity-0 group-hover:opacity-[1] transition-opacity`}>
          {fb &&
            <Link href={fb} target='_blank'>
              <FacebookIcon className='w-[24px] h-[24px] fill-white opacity-1' />
            </Link>
          }
          {ig &&
            <Link href={ig} target='_blank'>
              <InstagramIcon className='w-[24px] h-[24px] fill-white opacity-1' />
            </Link>
          }
        </div>
        <Image src={img} alt={name} />
      </div>
      <div className='flex flex-col gap-2 p-8 text-center relative group-hover:bg-[red] transition-all'>
        <div className='w-[24px] h-[24px] rotate-45 bg-white group-hover:bg-[red] transition-all absolute top-[-12px] left-[calc(50%-12px)]' />
        <p className='text-[#48606E] text-2xl font-semibold group-hover:text-white transition-all'>{name}</p>
        <p className='uppercase font-bold text-xs group-hover:text-white transition-all'>{role}</p>
      </div>
    </div>
  )
}

export default Instructor;