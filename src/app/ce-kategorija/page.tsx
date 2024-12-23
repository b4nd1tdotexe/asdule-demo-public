import InfoCardContainer from '@/components/InfoCardContainer';

const list = [
  {
    title: 'Uslovi za polaganje CE kategorije:',
    list: ['Posedovanje vozačke dozvole C kategorije']
  },
  {
    title: 'Trajanje obuke za CE kategoriju:',
    list: ['7 časova teorijske nastave', 'polaganje praktičnog dela']
  }
]

const CEKategorija = () => {
  return (
    <main className='flex flex-col items-center px-6 py-12 gap-10'>
      <div className='max-w-[700px]'>
        <h1 className='text-2xl font-semibold'>CE kategorija</h1>
        <br />
        <p className='text-sm'>
          - vozila čija najveća dozvoljena masa prelazi 12000 kg
          <br />
          - dužine veća od 8 m
          <br />
          - širina veća od 2.4 m
          <br />
          - najveća konstruktivna brzina veća od 80 km/h
          <br />
          - koji ima zatvoreni tovarni sanduk
          <br />
          - priključno vozilo dužina najmanja 7.5 m sa zatvorenim tovarnim sandukom
        </p>
      </div >
      <InfoCardContainer list={list} />
    </main >
  )
}

export default CEKategorija;