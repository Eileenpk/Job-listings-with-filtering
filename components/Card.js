// Card component all data is passed down as props from index.js
export default function Card({
  search,
  setSearch,
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
  const tagsArrayMap = tagsArray.map((item, index) => {
    return (
      <div key={index} className='search-item pl-[8px] pr-[8px] h-[32px] mt-4 bg-tag-background-color flex items-center justify-center rounded-[4px] text-second-color font-bold leading-6 tracking-[-0.12px]' onClick={() => setSearch(true)}>{item}</div>
    )
  })
  return (
    <section className={`relative  h-64 max-md:pt-8 lg:pt-8 lg:pb-8 lg:pl-10 pl-6 pr-6 mb-[40px] rounded-[5px] card bg-white-color lg:h-[152px] lg:mb-6 lg:max-w-[1110px] ${featured ? 'left-border' : ''} ${!search ? 'mt-[56px]' : ''} `}>
      {/* {used <img> tag and not <Image/> tag because of svg format of images. (avoids dangerouslyallowsvg err )} */}
      <img src={logo.url} alt={`${companyName} logo`} className=' logo max-md:absolute max-md:top-[-24px] w-12 h-12 lg:w-[88px] lg:h-[88px] ' />

      <div className="flex items-center company--info max-md:mb-[9px] ml-6 ">
        <h1 className='mr-8'>{companyName}</h1>
        <div className={isNew ? 'bg-second-color text-white-color text-[14px] flex items-center font-bold tracking-[-0.11px] w-[51px] justify-center rounded-xl h-6 mr-2' : ''}>{isNew ? "NEW!" : ""}</div>
        <div className={featured ? 'bg-btn-hover-color text-white-color text-[14px] flex items-center font-bold tracking-[-0.11px] w-[79px] h-6 justify-center rounded-xl' : ''}>{featured ? "FEATURED" : ""}</div>
      </div>
      <h2 className='max-md:mb-[8px] position lg:ml-6'>{position}</h2>
      <div className="info flex items-center pb-[15px] max-sm:border-b lg:ml-6">
        <p className='posting--info text-light-font-color mr-[10px] font-medium leading-6 tracking-[-0.12px] '>{postedAt}</p>
        <div className="circle h-[4px] bg-light-font-color w-[4px] rounded-[2px] "></div>
        <p className='text-light-font-color ml-[10px] mr-[10px] font-medium leading-6 tracking-[-0.12px] '>{contract}</p>
        <div className="circle h-[4px] bg-light-font-color w-[4px] rounded-[2px]"></div>
        <p className='text-light-font-color ml-[10px] font-medium leading-6 tracking-[-0.12px] '>{location}</p>
      </div>
      
      <div className='tags flex flex-wrap justify-between pr-[10px]'>
        {tagsArrayMap}
      </div>
    </section>
  );
}
