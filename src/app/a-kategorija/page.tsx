import InfoCard from '@/components/InfoCard';
import InfoCardContainer from '@/components/InfoCardContainer';

const infos = [
  {
    title: 'Kandidat koji ne poseduje vozačku dozvolu:',
    list: ['40 časova teorijske nastave', 'polaganje testa', '40 časova praktične obuke', 'polaganje vožnje']
  },
  {
    title: 'Kandidat koji poseduje B kategoriju(a ne poseduje AM kategoriju):',
    list: ['7 časova teorijske nastave', 'polaganje testa', '40 časova praktične obuke', 'polaganje vožnje']
  },
  {
    title: 'Kandidat koji poseduje AM kategoriju:',
    list: ['polaganje testa', '20 časova praktične obuke', 'polaganje vožnje']
  },
  {
    title: 'Kandidat koji poseduje A1 kategoriju:',
    list: ['polaganje testa', '14 časova praktične obuke', 'polaganje vožnje']
  },
  {
    title: 'Kandidat koji poseduje A2 kategoriju',
    list: ['polaganje testa', '7 časova praktične obuke', 'polaganje vožnje']
  }
]

const AKategorija = () => {
  return (
    <main className='flex flex-col items-center px-6 py-12 bg-[#F8F8F8] gap-10'>
      <div className='max-w-[700px]'>
        <h1 className='text-2xl font-semibold'>A kategorija</h1>
        <br />
        <p className='text-sm'><b>Sa položenom A kategorijom</b> možete upravljati <b>MOTOCIKOLIMA i TEŠKIM TRICIKLIMA</b> čija je snaga motora veća od <b>15 KW</b></p>
        <br />
        <p className='text-sm'>Predvidjeno je da kandidati koji žele da polažu za <b>A KATEGORIJU moraju se obučavati na vozilu</b> sa motorom od <b>najmanje 600 cm3</b>, i snage od najmanje 40kw.</p>
        <br />
        <p className='text-sm'>Stari zakon je dozvoljavao obuku na sopstvenom motoru, sada novi pravilnik to ne dozvoljava.</p>
        <br />
        <p className='text-sm'><b>Nije predvidjena obuka na sopstvenom motoru, već se za obuku mora koristiti isključivo vozilo auto skole.</b></p>
        <br />
        <p className='text-sm'>Moderan skuter iz našeg voznog parka za obuku vozača je marke SUZUKI BURGMAN 650.
          Auto Škola Auto DULE obezbeđuje svojim kandidatima: kacigu (svih veličina), bluetooth vezu.</p>
        <br />
        <p className='text-sm'><b>USLOVI ZA POLAGANJE:</b>
          <br />
          Kandidat može da se upiše sa 23 godine i završi celokupnu obuku, a praktični ispit može polagati sa navršene 24 godine. Takodje moze vrsiti polaganje A kategorije i pre 24te god, ukoliko poseduje A2 kategoriju od najmanje 2god.</p>
        <br />
      </div >
      <InfoCardContainer list={infos} />
    </main >
  )
}

export default AKategorija;