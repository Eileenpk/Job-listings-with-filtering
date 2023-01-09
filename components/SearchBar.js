import Image from "next/image";
import { useEffect } from "react";
export default function SearchBar({ setSearch, setItemsArray, itemsArray }) {
  const removeItem = (item) => {
    setItemsArray((prevItem) => {
      // reassign prevItem to change
      const itemsToFilter = [...prevItem];
      // target item from the itemsArray
      const itemToRemove = itemsToFilter.indexOf(item);
      // remove clicked item in itemsArray.
      if (itemToRemove > -1) {
        itemsToFilter.splice(itemToRemove, 1);
      }
      return [...itemsToFilter];
    });
  };

  //  set search to false to hide search bar if items array in empty
  useEffect(() => {
    if (itemsArray.length === 0) {
      setSearch(false);
    }
  }, [itemsArray]);

  const searchArray = itemsArray.map((item) => {
    return (
      <section
        className="search-item pl-[8px] h-[32px]  bg-tag-background-color flex items-center justify-center rounded-[4px] text-second-color font-bold leading-6 tracking-[-0.12px]"
        key={item}
      >
        {item}
        <button
          onClick={() => removeItem(item)}
          className="remove-btn bg-second-color h-[32px] w-[32px] flex justify-center items-center ml-[11px] rounded-r-[4px]"
        >
          <Image
            src="/icon-remove.svg"
            height={14}
            width={14}
            alt={`remove ${item} from search`}
          />
        </button>
      </section>
    );
  });
  return (
    <div
      role="search"
      className=" search-bar mt-[120px] w-[89%] max-w-[1110px] bg-white min-h-[120px] h-fit rounded-[5px] flex justify-between p-[20px] ">
        <div className="flex flex-wrap gap-[16px]">
            {searchArray}
        </div>
      
      <button className="clear-btn mr-[5px]" onClick={() => setItemsArray([])}>Clear</button>
    </div>
  );
}
