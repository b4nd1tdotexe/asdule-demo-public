'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Logo from '@/../public/Untitled.png';
import Image from 'next/image';
import { CSSTransition } from 'react-transition-group';

const categories = [
  {
    title: 'A',
    link: '/a-kategorija'
  },
  {
    title: 'A1',
    link: '/a1-kategorija'
  },
  {
    title: 'A2',
    link: '/a2-kategorija'
  },
  {
    title: 'AM',
    link: '/am-kategorija'
  },
  {
    title: 'B',
    link: '/b-kategorija'
  },
  {
    title: 'BE',
    link: '/be-kategorija'
  }, {
    title: 'C',
    link: '/c-kategorija'
  },
  {
    title: 'CE',
    link: '/ce-kategorija'
  }
];

const MobileCategories = ({
  CloseNav
}: {
  CloseNav: () => void
}) => {
  const [open, setOpen] = useState(false);
  const elRef = useRef<HTMLUListElement | null>(null);

  return (
    <>
      <div className='flex items-center gap-2 py-2' onClick={() => { setOpen((o) => !o); }}>
        <p>Kategorije</p>
        <svg className={`w-[18px] h-[18px] ${open && 'rotate-[180deg]'} transition-all`} xmlns="http://www.w3.org/2000/svg" color='currentColor' viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
      </div>
      <CSSTransition nodeRef={elRef} in={open} timeout={500} unmountOnExit classNames='headerSlide'>
        <ul ref={elRef} className={`flex flex-col gap-2 pl-6`}>
          {categories.map((category, index) => (
            <li key={index}>
              <Link href={category.link} onClick={CloseNav}>
                <div className=''>
                  <p>{category.title}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </CSSTransition>
    </>
  )
}

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const elRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [open]);

  const CloseNav = () => setOpen(false);

  return (
    <>
      <button onClick={() => setOpen((o) => !o)} className='relative bg-[#444444] px-2 py-3 rounded-md cursor-pointer md:hidden'>
        <div className='flex flex-col gap-1 items-center w-[30px]'>
          <div className='flex flex-col gap-[6px] items-center w-full'>
            <div className={`w-[90%] h-[2px] bg-white transition-transform duration-200 ${open && 'translate-y-[8px] rotate-45'}`} />
            <div className={`w-[90%] h-[2px] bg-white transition-opacity duration-150 ${open && 'opacity-0'}`} />
            <div className={`w-[90%] h-[2px] bg-white transition-transform duration-200 ${open && 'translate-y-[-8px] -rotate-45'}`} />
          </div>
        </div>
      </button>
      <CSSTransition nodeRef={elRef} in={open} timeout={500} unmountOnExit classNames='appear'>
        <div ref={elRef} className='fixed top-0 left-0 w-full h-full bg-white'>
          <Link onClick={CloseNav} href='/' className='absolute top-[12px] left-4'>
            <Image src={Logo} alt='Logo' width={72} />
          </Link>
          <button onClick={CloseNav} className='absolute top-[27px] right-4 h-[42px] w-[46px] bg-[#444444] px-2 py-3 rounded-md cursor-pointe'>
            <div className='flex flex-col gap-[6px] items-center w-full'>
              <div className={`w-[90%] h-[2px] bg-white transition-transform duration-200 ${open && 'translate-y-[8px] rotate-45'}`} />
              <div className={`w-[90%] h-[2px] bg-white transition-opacity duration-150 ${open && 'opacity-0'}`} />
              <div className={`w-[90%] h-[2px] bg-white transition-transform duration-200 ${open && 'translate-y-[-8px] -rotate-45'}`} />
            </div>
          </button>
          <div className='py-[128px] px-4'>
            <ul className='flex flex-col'>
              <Link onClick={CloseNav} href='/instruktori'>
                <p className='py-2'>Naš tim</p>
              </Link>
              <MobileCategories CloseNav={CloseNav} />
              <Link onClick={CloseNav} href='/cenovnik'>
                <p className='py-2'>Cenovnik</p>
              </Link>
              <Link onClick={CloseNav} href='/galerija'>
                <p className='py-2'>Galerija</p>
              </Link>
              <Link onClick={CloseNav} href='/o-nama'>
                <p className='py-2'>O nama</p>
              </Link>
              <Link onClick={CloseNav} href='/kontakt'>
                <p className='py-2'>Kontakt</p>
              </Link>
            </ul>
          </div>
        </div>
      </CSSTransition>
    </>
  )
}

export default MobileNav;