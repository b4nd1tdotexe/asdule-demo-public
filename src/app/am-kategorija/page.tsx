import InfoCardContainer from '@/components/InfoCardContainer';

const list = [
  {
    title: 'Kandidat koji ne poseduje vozačku dozvolu:',
    list: ['40 časova teorijske nastave', 'polaganje testa', '7 časova praktične obuke', 'polaganje vožnje']
  },
  {
    title: 'Kandidat koji poseduje B kategoriju(a ne poseduje AM kategoriju):',
    list: ['7 časova teorijske nastave', 'polaganje testa', '7 časova praktične obuke', 'polaganje vožnje']
  }
]

const AMKategorija = () => {
  return (
    <main className='flex flex-col items-center px-6 py-12 gap-10'>
      <div className='max-w-[700px]'>
        <h1 className='text-2xl font-semibold'>AM kategorija</h1>
        <br />
        <p className='text-sm'>Obuka kandidata za AM kategoriju u Auto školi Dule se vrši na mopedu jačine do 49 cm3.</p>
        <br />
        <ul className='list-disc pl-8'>
          <li className='text-sm'>Moderan skuter iz našeg voznog parka za obuku vozača je marke YIYING BENZHOU 50ccm.</li>
          <li className='text-sm'>Auto Škola Auto DULE obezbeđuje svojim kandidatima:kacigu (svih veličina), bluetooth vezu.</li>
        </ul>
        <br />
        <p className='text-sm'><b>USLOVI ZA POLAGANJE:</b>
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

export default AMKategorija;