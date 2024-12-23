import InfoCardContainer from '@/components/InfoCardContainer';

const list = [
  {
    title: 'Kandidat koji ne poseduje vozačku dozvolu:',
    list: ['40 časova teorijske nastave', 'polaganje testa', '30 časova praktične obuke', 'polaganje vožnje']
  },
  {
    title: 'Kandidat koji poseduje B kategoriju(a ne poseduje AM kategoriju):',
    list: ['7 časova teorijske nastave', 'polaganje testa', '30 časova praktične obuke', 'polaganje vožnje']
  },
  {
    title: 'Kandidat koji poseduje AM kategoriju:',
    list: ['polaganje testa', '14 časova praktične obuke', 'polaganje vožnje']
  },
  {
    title: 'Kandidat koji poseduje A1 kategoriju:',
    list: ['polaganje testa', '7 časova praktične obuke', 'polaganje vožnje']
  },
]

const A2Kategorija = () => {
  return (
    <main className='flex flex-col items-center px-6 py-12 gap-10'>
      <div className='max-w-[700px]'>
        <h1 className='text-2xl font-semibold'>A2 kategorija</h1>
        <br />
        <p className='text-sm'><b>A2 kategorija</b> vam omogućava da vozite motocikle <b>čija snaga nije veća od 35kw.</b></p>
        <br />
        <p className='text-sm'>Jako zanimljiva kategorija koja vam daje veliki izbor motora koje možete voziti.
          Možete voziti motore koji imaju preko 600cm3 ukoliko im snaga ne prelazi 35kw.</p>
        <br />
        <p className='text-sm'>Vozila za obuku moraju imati motor radne zapremine od najmanje 400cm3 i snage od najmanje 25kw. Ne postoji mogućnost obuke na sopstvenom motoru već se mora koristiti motocikl u vlasnistvu auto skole.</p>
        <br />
        <p className='text-sm'>Vozilo za obuku A2 kategorije u auto skoli Dule , automatski menjač.
          Moderan skuter iz našeg voznog parka za obuku vozača je marke PIAGGIO BEVERLY 500.</p>
        <br />
        <p className='text-sm'>Auto Škola Auto DULE obezbeđuje svojim kandidatima:kacigu (svih veličina), bluetooth vezu.</p>
        <br />
        <p className='text-sm'><b>USLOVI ZA POLAGANJE:</b>
          <br />
          * Kandidat može da se upiše sa 17 godine i završi celokupnu obuku, a praktični ispit može polagati sa navršene 18 godine.
          <br />
          * Lična karta je obavezna, potrebno je da je kandidat nosi tokom celokupne obuke.</p>
        <br />
      </div >
      <InfoCardContainer list={list} />
    </main >
  )
}

export default A2Kategorija;