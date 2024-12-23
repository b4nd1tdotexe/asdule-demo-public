'use client';
import Image from 'next/image';
import Prva from '@/../public/01.jpg';
import Druga from '@/../public/02.jpg';
import Treca from '@/../public/03.jpg';
import Cetvrta from '@/../public/04.jpg';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const slike = [Prva, Druga, Treca, Cetvrta];

const Child = () => {
  return (
    <Carousel
      className='w-full max-w-[1760px]'
      opts={{ loop: true }}
      plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
    >
      <CarouselContent>
        {slike.map(slika => (
          <CarouselItem key={slika.src} className='pl-0'>
            <Image className='w-full aspect-[4/3] md:aspect-[88/37] object-cover' src={slika} alt='Slika' />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

const PhotoCarousel = () => {

  return (
    <div className='pb-12'>
      <div className='flex justify-center items-center'>
        <Child />
      </div>
    </div>
  )
}

export default PhotoCarousel;