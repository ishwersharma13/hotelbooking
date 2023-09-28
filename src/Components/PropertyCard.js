import { BiHeart } from "react-icons/bi";
import { BiBed } from "react-icons/bi";
import { BiArea } from "react-icons/bi";
import { MdOutlineBathroom } from "react-icons/md";

const PropertyCard = ({
  image,
  price,
  name,
  address,
  beds,
  bathrooms,
  area,
}) => {
  return (
    <div className="flex flex-col w-80 h-84 rounded-lg overflow-hidden bg-white shadow-md">
      <div className="h-1/2">
        <img src={image} className="w-full h-full" alt="img1"></img>
      </div>
      <div className="flex flex-col gap-y-3 px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="text-gray-500 text-sm">
            <span className="text-purple-700 text-2xl">₹{price}</span>/night
          </div>
          <BiHeart className="w-6 h-6 text-gray-500" />
        </div>
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm text-gray-500 font-medium pb-4 border-b border-gray-300">
          {address}
        </p>
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center">
            <BiBed className="mr-1 text-purple-500" />
            {beds} beds
          </div>
          <div className="flex items-center">
            <MdOutlineBathroom className="mr-1 text-purple-500" />
            {bathrooms} Bathrooms
          </div>
          <div className="flex items-center">
            <BiArea className="mr-1 text-purple-500" />
            {area} sqm
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
