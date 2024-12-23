import cenovnik from '@/../public/cenovnik.png';
import Image from 'next/image';

const Cenovnik = () => {
  return (
    <main className='flex justify-center px-4 py-12 sm:py-[136px] sm:px-12'>
      <Image src={cenovnik} alt='Cenovnik' />
    </main>
  )
}

export default Cenovnik;