import InfoCard from './InfoCard';

type InfoList = {
  title: string,
  list: string[]
}[];

const InfoCardContainer = ({
  list
}: {
  list: InfoList
}) => {
  return (
    <div className='max-w-[1000px]'>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {list.map((info, ind) => (
          <InfoCard key={ind} title={info.title} list={info.list} />
        ))}
      </div>
    </div>
  )
}

export default InfoCardContainer;