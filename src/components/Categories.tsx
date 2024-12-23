import Link from 'next/link';

const categories = [
  {
    title: 'A',
    link: '/a-kategorija'
  },
  {
    title: 'B',
    link: '/b-kategorija'
  },
  {
    title: 'BE',
    link: '/be-kategorija'
  },
  {
    title: 'C',
    link: '/c-kategorija'
  },
  {
    title: 'CE',
    link: '/ce-kategorija'
  }
];

const Categories = () => {
  return (
    <div className='flex w-full bg-[#D02325] px-6'>
      <ul className='flex flex-col md:flex-row w-full'>
        {categories.map((category, ind) => (
          <Link key={ind} href={category.link} className='text-white grow px-4 py-4 font-medium text-2xl text-center md:text-start'>
            <li>
              <span className='font-bold text-5xl'>{category.title}</span> kategorija
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default Categories;