import Instruktor1 from '@/../public/instruktor1.jpg';
import Instruktor2 from '@/../public/instruktor2.jpg';
import Instruktor3 from '@/../public/instruktor3.jpg';
import Instruktor4 from '@/../public/instruktor4.jpg';
import Instruktor5 from '@/../public/instruktor5.jpg';
import Instruktor6 from '@/../public/instruktor6.jpg';
import Instruktor7 from '@/../public/instruktor7.jpg';
import Instruktor8 from '@/../public/instruktor8.jpg';
import Instruktor9 from '@/../public/instruktor9.jpg';
import Instruktor10 from '@/../public/instruktor10.jpg';
import Instructor from '@/components/Instructor';

const list = [
  {
    name: 'Bojan Radosavljević',
    role: 'Instruktor/ispitavač',
    img: Instruktor1,
    fb: 'https://www.facebook.com/bojan.radosavljevic.902',
    ig: 'https://www.instagram.com/boky_instruktor'
  },
  {
    name: 'Dušan Zdravković',
    role: 'Direktor',
    img: Instruktor2,
    ig: 'https://www.instagram.com/dule_zd'
  },
  {
    name: 'Tatjana Vučković',
    role: 'Administrator',
    img: Instruktor3
  },
  {
    name: 'Lidija Bondžić',
    role: 'Instruktor',
    img: Instruktor4
  },
  {
    name: 'Milena Mladenović',
    role: 'Instruktor',
    img: Instruktor5
  },
  {
    name: 'Martin Cvetanović',
    role: 'Instruktor',
    img: Instruktor6
  },
  {
    name: 'Veljko Petrović',
    role: 'Instruktor',
    img: Instruktor7
  },
  {
    name: 'Marijana Simonović',
    role: 'Predavač',
    img: Instruktor8
  },
  {
    name: 'Vlasta Mitić',
    role: 'Instruktor',
    img: Instruktor9,
    ig: 'https://www.instagram.com/miticvlasta'
  },
  {
    name: 'Marko Mladenović',
    role: 'Instruktor / predavač / ispitivač',
    img: Instruktor10
  },
]

const Instruktori = () => {
  return (
    <main className='bg-[#F8F8F8] px-6 py-12'>
      <div className='flex justify-center'>
        <div className='w-full grid grid-row gap-12 max-w-[1000px] sm:grid-cols-4 lg:grid-cols-6'>
          {list.map((instr, index) => (
            <Instructor key={index} name={instr.name} role={instr.role} img={instr.img} fb={instr.fb} ig={instr.ig} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Instruktori;