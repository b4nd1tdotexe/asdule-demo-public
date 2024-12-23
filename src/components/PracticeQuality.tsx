import Image from 'next/image';
import Car from '@/../public/car-1.png';
import CircleArrowRightIcon from './icons/CircleArrowRight';

const lista = ['Odgovornost kao vozač', 'Vozilo i tehnički uslovi', 'Saobraćajni znakovi i kontrolni uređaja', 'Pravila saobraćaja', 'Vožnja u opasnom stanju', 'Slučaj nesreće']

const PracticeQuality = () => {
  return (
    <div className='py-12 px-6'>
      <div className='flex flex-col items-center gap-8 lg:flex-row lg:justify-center'>
        <p className='text-center lg:max-w-[300px] text-3xl font-bold text-[#535E5F]'>Obuka polaznika naprednog nivoa za naše učenike</p>
        <Image src={Car} alt='Auto' />
        <div className='flex flex-col gap-4 max-w-[400px]'>
          <p className='text-center lg:text-start text-sm text-[#535E5F]'>Rad sa kandidatima nas uči da je strpljenje temelj kvalitetnog rada tokom vozačke obuke.</p>
          <ul className='self-start flex flex-col gap-2'>
            {lista.map((el, ind) => (
              <li key={ind}>
                <div className='flex gap-2'>
                  <CircleArrowRightIcon className='w-[16px] fill-[#777777]' />
                  <p className='text-[16px]'>
                    {el}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PracticeQuality;