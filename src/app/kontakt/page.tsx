import ContactForm from '@/components/ContactForm';
import EnvelopeIcon from '@/components/icons/Envelope';
import LocationIcon from '@/components/icons/Location';
import PhoneIcon from '@/components/icons/Phone';

const ContactCard = ({
  title,
  address,
  phone,
  email,
  mapEmbed
}: {
  title: string,
  address: string,
  phone: string,
  email: string,
  mapEmbed: React.ReactNode
}) => {
  return (
    <div className='flex flex-col gap-6 bg-white rounded-lg md:p-6'>
      <div className='flex flex-col gap-2'>
        <p className='text-2xl font-semibold'>{title}</p>
        <div className='flex gap-2 items-start'>
          <LocationIcon className='w-[18px] fill-[#E41E2D]' />
          <p className='text-sm'>{address}</p>
        </div>
        <div className='flex gap-2 items-start'>
          <PhoneIcon className='w-[18px] fill-[#E41E2D]' />
          <p className='text-sm'>{phone}</p>
        </div>
        <div className='flex gap-2 items-start'>
          <EnvelopeIcon className='w-[18px] fill-[#E41E2D]' />
          <p className='text-sm'>{email}</p>
        </div>
      </div>
      {mapEmbed}
    </div>
  )
}

const Kontakt = () => {
  return (
    <main className='flex flex-col px-6 py-12 bg-[#F8F8F8]'>
      <div className='flex items-center flex-col gap-6'>
        <div className='flex flex-col gap-12 bg-white p-6 rounded-lg md:flex-row md:bg-transparent md:justify-center max-w-[1300px]'>
          <ContactCard title='Auto škola Dule - Kruševac' address='Slobodana Jovanovića 6, Kruševac' phone='060 6 037 037' email='autoskoladule@gmail.com' mapEmbed={<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.634240791724!2d21.329287077529813!3d43.57250397110623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475687f49964c753%3A0xb82b5e942ac002de!2z0KfQtdGF0L7QstGZ0LXQstCwIDZhLCDQmtGA0YPRiNC10LLQsNGGIDM3MDAw!5e0!3m2!1ssr!2srs!4v1725261587822!5m2!1ssr!2srs" width="600" height="450" style={{ border: '0', maxWidth: '100%' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>} />
          <ContactCard title='Auto škola Dule - Varvarin' address='Slobode 94, Varvarin' phone='060 6 037 037' email='autoskoladule@gmail.com' mapEmbed={<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4077.6431530317336!2d21.360174211821302!3d43.72448924408314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475691cdce4ac58d%3A0xcb9b1a17a8de1980!2sSlobode%2094%2C%20Varvarin!5e0!3m2!1ssr!2srs!4v1725261925000!5m2!1ssr!2srs" width="600" height="450" style={{ border: '0', maxWidth: '100%' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>} />
        </div>
        <div className='w-full px-6 max-w-[1300px]'>
          <ContactForm />
        </div>
      </div>
    </main>
  )
}

export default Kontakt;