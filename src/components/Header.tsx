import Image from 'next/image';
import Logo from '@/../public/Untitled.png';
import Link from 'next/link';
import HeaderCategories from './HeaderCategories';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <div className='sticky z-[50] top-0 bg-white px-4 py-3 border-b-[1px] border-b-[red]'>
      <div className='flex justify-between items-center h-full'>
        <Link href='/'>
          <Image src={Logo} alt='Logo' width={72} />
        </Link>
        <ul className='hidden md:flex gap-4'>
          <Link href='/instruktori'>
            <p className='font-semibold hover:opacity-[0.5] transition-opacity transition-duration-[1s]'>Naš tim</p>
          </Link>
          <HeaderCategories />
          <Link href='/cenovnik'>
            <p className='font-semibold hover:opacity-[0.5] transition-opacity transition-duration-[1s]'>Cenovnik</p>
          </Link>
          <Link href='/galerija'>
            <p className='font-semibold hover:opacity-[0.5] transition-opacity transition-duration-[1s]'>Galerija</p>
          </Link>
          <Link href='/o-nama'>
            <p className='font-semibold hover:opacity-[0.5] transition-opacity transition-duration-[1s]'>O nama</p>
          </Link>
          <Link href='/kontakt'>
            <p className='font-semibold hover:opacity-[0.5] transition-opacity transition-duration-[1s]'>Kontakt</p>
          </Link>
        </ul>
        <MobileNav />
      </div>
    </div>
  )
}

export default Header;