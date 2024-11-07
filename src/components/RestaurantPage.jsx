import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestuarantCategory from "./RestaurantCategory";

const RestaurantPage = () => {
  // const [resInfo, setResInfo] = useState(null);

  const [showIndex, setShowIndex] = useState(null);

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);
  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     RESTAURANT_PAGE+resId
  //   );
  //   const json = await data.json();
  //   setResInfo(json);
  // };
  // moved to useRestaurantMenu.jsx

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );

  // console.log(categories)

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold my-8">{name}</h1>
      <h2 className="text-lg font-bold">{cuisines.join(", ")}</h2>

      {/* accordion categories */}

      {categories.map((category, index) => (
        // controlled component
        <RestuarantCategory
          key={index}
          data={category?.card?.card}
          showItems={index == showIndex ? true : false}
          setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
        />
      ))}

      {/* accordion categories end */}
    </div>
  );
};

export default RestaurantPage;
