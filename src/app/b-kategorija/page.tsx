import InfoCard from '@/components/InfoCard';

const restrictions = ['zabrana upravljanja vozilom u periodu 23:00-06:00', 'zabrana upotrebe telefona i drugih sredstava za komunikaciju', 'zabrana upravljanja pod dejstvom alkohola', 'maksimalna brzina na auto-putu do 110 km/h', 'maksimalna brzina na regionalnom putu do 90 km/h', 'na ostalim putevima ne sme da pređe 90% od brzine koja je dozvoljena na delu puta kojim se vozilo kreće', 'lice koje ima probnu dozvolu sa navršenih 17 godina, ne sme da upravlja vozilom čija snaga motora prelazi 80kw bez nadzora lica koje ima važeću vozačku dozvolu u trajanju od najmanje 5 godina', 'sa probnom vozačkom dozvolom nije moguće upisati druge kategorije.']

const BKategorija = () => {
  return (
    <main className='flex flex-col items-center px-6 py-12 gap-10'>
      <div className='max-w-[700px]'>
        <h1 className='text-2xl font-semibold'>B kategorija</h1>
        <br />
        <p className='text-sm'><b>Auto škola Auto Dule</b> obezbeđuje svojim kandidatima moderna putnička vozila za praktičnu obuku i polaganje.</p>
        <br />
        <p className='text-sm'><b>USLOVI ZA POLAGANJE:</b></p>
        <br />
        <ul className='list-disc pl-8 mt-[-8px]'>
          <li className='text-sm'>Kandidat može da se upiše sa 16 godine i završi celokupnu obuku, a praktični ispit može polagati sa navršene 17 godine.</li>
          <li className='text-sm'>Lična karta je obavezna, potrebno je da je kandidat nosi tokom celokupne obuke</li>
        </ul>
        <br />
      </div >
      <div className='flex flex-col items-center gap-10'>
        <InfoCard title='Trajanje obuke za B kategoriju' list={['40 časova teorijske nastave', 'polaganje testa', '40 časova praktične obuke', 'polaganje vožnje']} />
        <InfoCard className='max-w-[900px]' title='Probna vozačka dozvola' desc='Probna vozačka dozvola se dobija do navršene 21 godine ili ako lice položi nakon 19 godina života probna vozačka dozvola se dobija u trajanju na 2 godine.' list={restrictions} />
      </div>
    </main >
  )
}

export default BKategorija;