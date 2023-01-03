// Search bar Component uses the filter function 
import filter from "./utils/filter"
import Image from "next/image"
export default function SearchBar ({
    search,
    setSearch,
    setItemsArray,
    itemsArray,}) {
    const array = itemsArray.map(item => {
        return (
            <div className='search-item pl-[8px] h-[32px]  bg-tag-background-color flex items-center justify-center rounded-[4px] text-second-color font-bold leading-6 tracking-[-0.12px]' key={item}>
                {item}
                <div className='bg-second-color h-[32px] w-[32px] flex justify-center items-center ml-[11px] rounded-r-[4px]'>
                    <Image
                        src='/icon-remove.svg'
                        height={14}
                        width={14}
                    />
                </div>
            </div>
        )
    })
    return (
        <div className=" search-bar mt-[120px] mb-[56px] bg-white w-[327px] min-h-[120px] h-fit rounded-[5px] flex flex-wrap gap-[16px] p-[20px]">
            {array}
        </div>
    )
}