import { CDN_URL } from "../utils/configs";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, cloudinaryImageId, avgRating, sla } = resData?.info;

  function truncatedStr(string) {
    return string.length > 20 ? string.slice(0, 25) + "..." : string;
  }

  return (
    <div className="hover:scale-105 transition duration-300 w-[19.5rem] h-auto rounded-2xl hover:border-2 hover:border-amber-600 hover:cursor-pointer shadow-md justify-center  text-black">
      <img
        src={CDN_URL + cloudinaryImageId}
        className="w-full max-h-40 object-cover shadow-inner rounded-t-2xl"
      />
      <div className="px-4 pb-4 text-left">
        <div className="pt-3 text-xl">{truncatedStr(name)}</div>
        <div className="pt-3 text-sm ">{truncatedStr(cuisines.join(", "))}</div>
        <div className="pt-3 text-sm flex">
          {avgRating} <span className="inline-block px-2">⭐️</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
