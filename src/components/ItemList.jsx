import { CDN_URL } from "../utils/configs";

const ItemList = ({ items }) => {
  // console.log(items);

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.id}
          className="border-b-[1px] border-gray-400 p-8 text-left flex justify-between w-full"
        >
          <div className="w-8/12">
            <div className="flex flex-col">
              <span className="font-bold ">{item.name}</span>
              <span className="">
                ₹{item.price / 100 || item.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.description}</p>
          </div>
          <div className="flex justify-center relative">
            <img
              src={CDN_URL + item.imageId}
              className="object-fill w-36 max-h-32 shadow-inner rounded-2xl"
            />
            <button className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gray-100 text-green-500 font-bold text-sm rounded-lg">
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
