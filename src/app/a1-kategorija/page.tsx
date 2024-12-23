import InfoCardContainer from '@/components/InfoCardContainer';

const list = [
  {
    title: 'Kandidat koji ne poseduje vozačku dozvolu:',
    list: ['40 časova teorijske nastave', 'polaganje testa', '20 časova praktične obuke', 'polaganje vožnje']
  },
  {
    title: 'Kandidat koji poseduje B kategoriju(a ne poseduje AM kategoriju):',
    list: ['7 časova teorijske nastave', 'polaganje testa', '20 časova praktične obuke', 'polaganje vožnje']
  },
  {
    title: 'Kandidat koji poseduje AM kategoriju',
    list: ['polaganje testa', '7 časova praktične obuke', 'polaganje vožnje']
  },
]

const A1Kategorija = () => {
  return (
    <main className='flex flex-col items-center px-6 py-12 gap-10'>
      <div className='max-w-[700px]'>
        <h1 className='text-2xl font-semibold'>A1 kategorija</h1>
        <br />
        <p className='text-sm'><b>A1 kategorija</b> vam omogućava da možete voziti <b>motocikle</b> čija radna zapremina motora <b>nije veća od 125 cm3</b> i snaga motora do 11kw.</p>
        <br />
        <p className='text-sm'>Propisano je da se obuka mora vršiti na motociklu koji pripada vozilima A1, sa motorom radne zapremine od najmanje 120 cm3, najveće konstruktivne brzine od 90km/h.</p>
        <br />
        <p className='text-sm'>Moderan skuter iz našeg voznog parka za obuku vozača je marke XINYUAN 125ccm.</p>
        <br />
        <p className='text-sm'><b>Auto Škola Dule obezbeđuje svojim kandidatima:</b>
          <br />
          kacigu (svih veličina), potkapu, bluetooth vezu.</p>
        <br />
        <p className='text-sm'><b>Uslovi za polaganje:</b>
          <br />
          * Kandidat može da se upiše sa 15 godine i završi celokupnu obuku, a praktični ispit može polagati sa navršene 16 godine.
          <br />
          * Lična karta je obavezna, potrebno je da je kandidat nosi tokom celokupne obuke.</p>
        <br />
      </div >
      <InfoCardContainer list={list} />
    </main >
  )
}

export default A1Kategorija;