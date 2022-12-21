// Card component all data is passed down as props from index.js
export default function Card({
  companyName,
  contract,
  featured,
  location,
  isNew,
  position,
  postedAt,
  role,
  level,
  languages,
  tools,
  logo,
}) {
  // put all items in an array
  const tagsArray = [role, level, ...languages, ...tools];
// map over the array of items to display each as div
  const tagsArrayMap = tagsArray.map(item => {
    return (
      <div className='search-item pl-[8px] pr-[8px] h-[32px] mt-4 bg-tag-background-color flex items-center justify-center rounded-[4px] text-second-color font-bold leading-6 tracking-[-0.12px]'>{item}</div>
    )
  })
  return (
    <section className={`relative h-64 pt-8 pl-6 pr-6 mb-4 rounded-[5px] card bg-white-color ${featured ? 'left-border' : ''} `}>
      {/* {used <img> tag and not <Image/> tag because of svg format of images. (avoids dangerouslyallowsvg err )} */}
      <img src={logo.url} alt={`${companyName} logo`} className='absolute top-[-24px] w-12 h-12' />
      <div className="flex items-center company--info mb-[9px]">
        <h1 className='mr-[33px]'>{companyName}</h1>
        <div className={isNew ? 'bg-second-color text-white-color text-[14px] flex items-center font-bold tracking-[-0.11px] w-[51px] justify-center rounded-xl h-6 mr-2' : ''}>{isNew ? "NEW!" : ""}</div>
        <div className={featured ? 'bg-btn-hover-color text-white-color text-[14px] flex items-center font-bold tracking-[-0.11px] w-[79px] h-6 justify-center rounded-xl' : ''}>{featured ? "FEATURED" : ""}</div>
      </div>
      <h2 className='mb-[8px]'>{position}</h2>
      <div className="flex items-center pb-[15px] max-sm:border-b">
        <p className='text-light-font-color mr-[10px] font-medium leading-6 tracking-[-0.12px] '>{postedAt}</p>
        <div className="circle h-[4px] bg-light-font-color w-[4px] rounded-[2px] "></div>
        <p className='text-light-font-color ml-[10px] mr-[10px] font-medium leading-6 tracking-[-0.12px] '>{contract}</p>
        <div className="circle h-[4px] bg-light-font-color w-[4px] rounded-[2px]"></div>
        <p className='text-light-font-color ml-[10px] font-medium leading-6 tracking-[-0.12px] '>{location}</p>
      </div>
      
      <div className='flex flex-wrap justify-between pr-[10px]'>
        {tagsArrayMap}
      </div>
    </section>
  );
}
