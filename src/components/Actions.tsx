import Image from 'next/image';
import Action1 from '@/../public/action1.jpg';
import Action2 from '@/../public/action2.jpg';
import Action3 from '@/../public/action3.jpg';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Link from 'next/link';

const Action = ({
  title,
  desc,
  btnText,
  btnLink,
  img
}: {
  title: string,
  desc: string,
  btnText: string,
  btnLink: string,
  img: string | StaticImport
}) => (
  <div className='flex flex-col'>
    <div className='flex flex-col gap-5 bg-white p-3 rounded-xl h-full'>
      <div>
        <Image className='w-full aspect-[16/9] object-cover rounded-t-lg' src={img} alt='Prva' />
      </div>
      <div className='flex flex-col gap-3 text-center h-full justify-between'>
        <div className='flex flex-col gap-1 items-center'>
          <p className='uppercase text-[#54535F] max-w-[70%] break-words font-bold text-xl'>{title}</p>
          <p className='text-[#7A7A7A] text-sm max-w-[70%] break-words'>{desc}</p>
        </div>
        <div className='flex justify-center'>
          <Link href={btnLink} className='bg-[#D02325] max-w-[70%] text-white font-semibold py-3 px-4 rounded-xl w-fit break-words'>{btnText}</Link>
        </div>
      </div>
    </div>
  </div>
)

const Actions = () => {
  return (
    <div className='bg-[#D02325] p-4'>
      <div className='flex flex-col gap-6 md:grid-cols-3 md:grid md:py-20 max-w-[1500px] mx-auto'>
        <Action img={Action1} title='Online upis' desc='Upiši se brzo i lako jednim klikom.' btnText='Upiši se' btnLink='/upisi-se' />
        <Action img={Action2} title='Online predavanja' desc='Omogućili smo ti da sva predavanja možeš poslušati i odgledati od kuće koliko god puta ti je potrebno.' btnText='Online predavanja' btnLink='#' />
        <Action img={Action3} title='Nove grupe od septembra' desc='Klikni i popuni podatke.' btnText='Upiši se' btnLink='/upisi-se' />
      </div>
    </div>
  )
}

export default Actions;