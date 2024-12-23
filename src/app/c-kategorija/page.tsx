import InfoCardContainer from '@/components/InfoCardContainer';

const list = [
  {
    title: 'Uslovi za polaganje C kategorije:',
    list: ['Kandidat može da se upiše sa 20 godine i završi celokupnu obuku, a praktični ispit može polagati sa navršene 21 godine.', 'Posedovanje vozačke dozvole B kategorije (ne sme biti probna)']
  },
  {
    title: 'Trajanje obuke za C kategoriju:',
    list: ['7 časova teorijske nastave', 'polaganje testa', '15 časova praktične obuke', 'polaganje vožnje']
  }
]

const CKategorija = () => {
  return (
    <main className='flex flex-col items-center px-6 py-12 gap-10'>
      <div className='max-w-[700px]'>
        <h1 className='text-2xl font-semibold'>C kategorija</h1>
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

export default CKategorija;