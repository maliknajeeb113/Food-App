import { useState } from "react";
import ItemList from "./ItemList";

const RestuarantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  const totalItemCards = data.categories.reduce((sum, category) => {
    return sum + category.itemCards.length;
  }, 0);

  // const allItems = data.categories.flatMap(category => category.itemCards);
  const allItems = data.categories.flatMap((category) =>
    category.itemCards.map((item) => item.card.info)
  );

  // console.log(data)

  // const vegCount = data.categories.find(category => category.title === "Veg").itemCards.length;
  // const nonVegCount = data.categories.find(category => category.title === "Non-Veg").itemCards.length;

  return (
    <div className="w-9/12">
      {/* header */}

      <div
        className="mx-auto border-[1px] border-black p-4 my-2 w-full "
        onClick={handleClick}
      >
        <div className="flex justify-between p-4">
          <span className="font-bold ">
            {data.title} ({totalItemCards})
          </span>
          <span className="">⬇️</span>
        </div>

        <div>{showItems && <ItemList items={allItems} />}</div>
      </div>
      {/* body */}
    </div>
  );
};

export default RestuarantCategory;
