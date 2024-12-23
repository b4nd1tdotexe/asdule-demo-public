'use client';
import { useRef, useState } from "react";
import styles from '@/styles/HeaderCategories.module.css';
import Link from "next/link";
import { CSSTransition } from 'react-transition-group';

const categories = [
  {
    title: 'A kategorija',
    sub: [
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
      }
    ]
  },
  {
    title: 'B kategorija',
    sub: [
      {
        title: 'B',
        link: '/b-kategorija'
      },
      {
        title: 'BE',
        link: '/be-kategorija'
      }]
  },
  {
    title: 'C kategorija',
    sub: [{
      title: 'C',
      link: '/c-kategorija'
    },
    {
      title: 'CE',
      link: '/ce-kategorija'
    }]
  }
];

const HeaderCategories = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mouseOn = useRef(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const timeoutId = useRef(-1);

  const handleEnter = () => {
    clearTimeout(timeoutId.current);
    timeoutId.current = -1;

    if (!mouseOn.current) { setIsOpen(true); mouseOn.current = true; }
  }

  const handleLeave = () => {
    clearTimeout(timeoutId.current);
    timeoutId.current = window.setTimeout(() => {
      setIsOpen(false);
      mouseOn.current = false;
    }, 200);
  }

  return (
    <li className={styles.wrapper}
      onMouseOver={handleEnter}
      onMouseOut={handleLeave}>
      <button aria-label='Kategorije' className={`${styles.features} ${isOpen && styles.open} hover:opacity-[0.5] transition-opacity transition-duration-[1s]`}
        onClick={() => { setIsOpen((o) => !o); }}>
        <p className='font-semibold '>Kategorije</p>
        <svg xmlns="http://www.w3.org/2000/svg" color='currentColor' viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
      </button>
      <CSSTransition unmountOnExit in={isOpen} nodeRef={containerRef} timeout={200} classNames={{
        enter: styles.containerEnter,
        enterActive: styles.containerEnterActive,
        enterDone: styles.containerEnterDone,
        exit: styles.containerExit,
        exitActive: styles.containerExitActive,
        exitDone: styles.containerExitDone
      }}>
        <div ref={containerRef} className={styles.container}>
          <div className={styles.menu}>
            <p className='font-bold text-lg'>A kategorija</p>
            <ul>
              {categories[0].sub.map((category, index) => (
                <li key={index}>
                  <Link href={category.link} className={styles.link}>
                    <div className={styles.header}>
                      <p>{category.title}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.menu}>
            <p className='font-bold text-lg'>B kategorija</p>
            <ul>
              {categories[1].sub.map((category, index) => (
                <li key={index}>
                  <Link href={category.link} className={styles.link}>
                    <div className={styles.header}>
                      <p>{category.title}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.menu}>
            <p className='font-bold text-lg'>C kategorija</p>
            <ul>
              {categories[2].sub.map((category, index) => (
                <li key={index}>
                  <Link href={category.link} className={styles.link}>
                    <div className={styles.header}>
                      <p>{category.title}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CSSTransition>
    </li>
  )
}

export default HeaderCategories;