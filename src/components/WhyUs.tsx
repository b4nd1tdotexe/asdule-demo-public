const WhyUs = () => {
  return (
    <div className='bg-[white] pb-12 px-4'>
      <div className='flex flex-col gap-4 text-center'>
        <div className='flex flex-col gap-3'>
          <p className='font-bold text-5xl'>Zašto baš mi?</p>
          <p className='text-[#545E5F] font-semibold text-lg'>Preko 80% kandidata je upisano na preporuku.</p>
        </div>
        <div className='flex flex-col items-center gap-8'>
          <p className='text-md max-w-[700px]'>Mi se trudimo da svaki kandidat položi vozački ispit iz prvog puta. Ukoliko sa pažnjom prati obuku i prebrodi tremu na ispitu. Instruktori će svakog polaznika posavetovati kako da se izbori sa tremom pre vozačkog ispita i na koje segmente vožnje treba posebno da obrati pažnju.</p>
          <p className='text-md max-w-[700px]'>Statistika govori da je naša škola u vrhu najuspešnijih auto škola u Rasinskom okrugu. Pored uspešno položenog vozačkog ispita, nama je od važnosti da svaki polaznik bude dobar vozač koji nikada neće ugroziti ni sebe ni druge učesnike u saobraćaju. Iz tog razloga spremni smo da na svako pitanje polaznika odgovorimo detaljno i razumljivo.</p>
        </div>
      </div>
    </div>
  )
}

export default WhyUs;