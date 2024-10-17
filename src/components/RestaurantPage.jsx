import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantPage = () => {

  // const [resInfo, setResInfo] = useState(null);

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


  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

    console.log(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards)

  // console.log(itemCards)

  return (
    <div className="flex flex-col items-center justify-center">
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <ul>
        <li>{costForTwoMessage}</li>
        <hr />
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.{" "}
            {item.card.info.defaultPrice / 100 || item.card.info.price / 100}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantPage;
