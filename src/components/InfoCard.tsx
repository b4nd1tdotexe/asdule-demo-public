const InfoCard = ({
  title,
  list,
  desc,
  className
}: {
  title: string,
  list: string[],
  desc?: string,
  className?: string
}) => {
  return (
    <div className={`bg-white px-6 py-8 flex flex-col gap-4 shadow-xl ${className}`}>
      <div className='flex flex-col gap-1'>
        <p className='text-[#555555] font-semibold text-xl'>{title}</p>
        {desc && <p className='text-sm'>{desc}</p>}
      </div>
      <ul className='list-disc pl-10'>
        {list.map((item, ind) => (
          <li key={ind}>
            <p className='text-sm'>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default InfoCard;