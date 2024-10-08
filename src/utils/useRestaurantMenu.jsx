import { useEffect, useState } from "react";
import { RESTAURANT_PAGE } from "./configs";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_PAGE + resId);
    const json = await data.json();

    setResInfo(json);
  };

  return resInfo;
};

export default useRestaurantMenu;
