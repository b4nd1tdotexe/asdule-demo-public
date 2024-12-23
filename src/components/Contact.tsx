import Link from 'next/link';
import ClockIcon from './icons/ClockIcon';
import EnvelopeIcon from './icons/Envelope';
import FacebookIcon from './icons/FacebookIcon';
import InstagramIcon from './icons/InstagramIcon';
import LocationIcon from './icons/Location';
import PhoneIcon from './icons/Phone';
import YoutubeIcon from './icons/YoutubeIcon';

const School = ({
  title,
  address,
  phone,
  email,
  workDays,
  saturday
}: {
  title: string,
  address: string,
  phone: string,
  email: string,
  workDays: string,
  saturday: string
}) => {
  return (
    <div className='flex flex-col lg:items-start gap-6'>
      <p className='text-3xl text-center'>{title}</p>
      <div className='flex flex-col items-center gap-3 lg:items-start'>
        <div className='flex gap-2 items-start'>
          <LocationIcon className='w-[18px] fill-[#282828]' />
          <p className='text-sm'>{address}</p>
        </div>
        <div className='flex gap-2 items-start'>
          <PhoneIcon className='w-[18px] fill-[#282828]' />
          <p className='text-sm'>{phone}</p>
        </div>
        <div className='flex gap-2 items-start'>
          <EnvelopeIcon className='w-[18px] fill-[#282828]' />
          <p className='text-sm'>{email}</p>
        </div>
        <div className='flex gap-2 items-start'>
          <ClockIcon className='w-[18px] fill-[#282828]' />
          <div>
            <p className='text-sm'>pon - pet: {workDays}</p>
            <p className='text-sm'>subota: {saturday}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const Icon = ({
  icon,
  link
}: {
  icon: React.ReactNode,
  link: string
}) => (
  <Link href={link} className='rounded-full border-[1px] border-[white] h-fit p-2'>
    {icon}
  </Link>
)

const Contact = () => {
  return (
    <div className='bg-[#999999] text-[#282828] px-4 py-12'>
      <div className='flex flex-col lg:flex-row justify-center gap-8'>
        <div className='flex gap-3 self-center'>
          <Icon icon={<FacebookIcon className='w-[24px] h-[24px] fill-white' />} link='https://www.facebook.com/dule.autoskola/' />
          <Icon icon={<InstagramIcon className='w-[24px] h-[24px] fill-white' />} link='https://www.instagram.com/autoskoladule/' />
          <Icon icon={<YoutubeIcon className='w-[24px] h-[24px] fill-white' />} link='https://www.youtube.com/channel/UC92BBUXjT8KW2FbSgrHSTdQ' />
        </div>
        <School title='Auto škola Dule Kruševac' address='Slobodana Jovanovića 6, Kruševac' phone='060 6 037 037' email='autoskoladule@gmail.com' workDays='09 - 17h' saturday='09 - 14h' />
        <School title='Auto škola Dule Varvarin' address='Slobode 94, Varvarin' phone='060 6 037 037' email='autoskoladule@gmail.com' workDays='08 -15h' saturday='ne radimo' />
      </div>
    </div>
  )
}

export default Contact;