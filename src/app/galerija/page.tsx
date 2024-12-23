import Galerija1 from '@/../public/galerija1.jpg';
import Galerija2 from '@/../public/galerija2.jpg';
import Galerija3 from '@/../public/galerija3.jpg';
import Galerija4 from '@/../public/galerija4.jpg';
import Galerija5 from '@/../public/galerija5.jpg';
import Galerija6 from '@/../public/galerija6.jpg';
import Galerija7 from '@/../public/galerija7.jpg';
import Galerija8 from '@/../public/galerija8.jpg';
import Galerija9 from '@/../public/galerija9.jpg';
import Galerija10 from '@/../public/galerija10.jpg';
import Galerija11 from '@/../public/galerija11.jpg';
import Image from 'next/image';
import styles from '@/styles/Gallery.module.css';
import ZoomInIcon from '@/components/icons/ZoomIn';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const list = [Galerija1, Galerija2, Galerija3, Galerija4, Galerija5, Galerija6, Galerija7, Galerija8, Galerija9, Galerija10, Galerija11];

const Galerija = () => {
  return (
    <main className='bg-[#F8F8F8] px-6 py-12'>
      <div className='flex justify-center'>
        <div className='w-full grid grid-row gap-12 max-w-[1000px] sm:grid-cols-4 lg:grid-cols-6'>
          {list.map((img, index) => (
            <Dialog key={index}>
              <DialogTrigger className={`${styles.grid} relative group`}>
                <div>
                  <div className='absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-[1] transition-opacity bg-[rgba(0,0,0,0.5)] cursor-pointer rounded-lg'>
                    <ZoomInIcon className='w-[36px] h-[36px] fill-white absolute top-[calc(50%-18px)] left-[calc(50%-18px)]' />
                  </div>
                  <Image className='aspect-[1/1] object-cover rounded-lg' src={img} alt='Slika' />
                </div>
              </DialogTrigger>
              <DialogContent className='max-w-[90%] md:max-w-fit p-8'>
                <Image className='rounded-lg object-cover' src={img} alt='Slika' />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Galerija;