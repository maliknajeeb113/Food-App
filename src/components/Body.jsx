import RestaurantCard,{WithPromotedLabel} from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANT_LIST } from "../utils/configs";
import { Link } from "react-router-dom";
import useOfflineStatus from "../utils/useOfflineStatus";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  
  const [searchText, setSearchText] = useState("");
  
  const PromotedRestaurantCard = WithPromotedLabel(RestaurantCard)
  // try {
  //   useEffect(() => {
  //     fetchData();
  //   }, []);
  // } catch (er) {
  //   console.log(er);
  // }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_LIST);
    const json = await data.json();

    console.log(json)

    //optional chaining
    try {
      setRestaurantList(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurantList(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (e) {
      console.log(e);
    }
  };



  if (useOfflineStatus())
    return <h1 className="text-center text-4xl">Looks like you are offline</h1>;

  // conditional rendering
  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="container mx-auto pb-28 ">
      <div className="flex flex-row justify-between py-3">
        <div className="flex flex-row gap-2">
          <input
            type="text"
            className="rounded text-black p-2"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className="rounded bg-amber-600 px-4 text-black"
            onClick={() => {
              const filtered = restaurantList.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              );
              setFilteredRestaurantList(filtered);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="rounded bg-amber-600 px-4 text-black"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.info.avgRating > 4
            );
            setRestaurantList(filteredList);
          }}
        >
          Top Restaurants
        </button>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRestaurantList.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              {

                  restaurant?.data?.promoted?<PromotedRestaurantCard resData={restaurant}/>:<RestaurantCard resData={restaurant} />
                  // The swiggy API no longer has promoted restaurants 

              }
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
