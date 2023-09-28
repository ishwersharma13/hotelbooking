import PropertyCard from "../Components/PropertyCard";
import Places from "../Places";
import { useState } from "react";

const Rent = () => {

  const [places, setPlaces] = useState(Places);
  const [location, setLocation] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [propertyType, setPropertyType] = useState("");

  const locationChangeHandler = (event) => {
    setLocation(event.target.value);
  }

  const searchHandler = (event) => {
      event.preventDefault();
      let filterByLocation = Places.filter(place => place.location.toLowerCase().includes(location.toLowerCase()) && place.type.includes(propertyType));
      setPlaces(filterByLocation);
      let filterByPrice = filterByLocation.sort((a,b) => {
          if(priceFilter === "B") return b.price - a.price;
          else if(priceFilter === "A")return a.price - b.price;
          else return;
      });
      console.log(filterByPrice);
      setPlaces(filterByPrice);
  }

  const priceFilterHandler = (event) => {
    setPriceFilter(event.target.value);
  }

  const propertyTypeHandler = (event) => {
    setPropertyType(event.target.value);
  }

  return (
    <div className="px-40 py-24">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl tracking-wide font-bold">
          Search properties to rent
        </h1>
        <select className="px-4 py-2 border-2 border-gray-200 rounded-md focus:outline-none text-gray-600">
          <option className="">Search with SearchBar</option>
        </select>
      </div>
      <div className="px-8 py-4 bg-white mt-10 rounded-md shadow-lg">
        <form onSubmit={searchHandler} className="flex items-center gap-x-4">
          <div className="px-4 border-r border-gray-300 flex-1">
            <label htmlFor="location" className="block text-gray-500 cursor-pointer">
              Location
            </label>
            <input
              id="location"
              type="text"
              onChange={locationChangeHandler}
              className="placeholder:text-black placeholder:font-semibold focus:outline-none cursor-pointer"
              value={location}
              placeholder="Country"
            />
          </div>
          <div className="px-4 border-r border-gray-300 flex-1">
            <label htmlFor="date" className="block text-gray-500 cursor-pointer">
              When
            </label>
            <input
              id="date"
              type="date"
              className="font-semibold placeholder:text-black placeholder:font-semibold focus:outline-none cursor-pointer"
              value=""
              placeholder="Select Move-in Date"
            />
          </div>
          <div className="px-4 border-r border-gray-300 flex-1">
            <label htmlFor="price" className="block text-gray-500 cursor-pointer">
              Price
            </label>
            <select
              id="price"
              value={priceFilter}
              onChange={priceFilterHandler}
              className="focus:outline-none font-semibold appearance-none cursor-pointer"
            >
              <option value="">Select</option>
              <option value="A">Low to high</option>
              <option value="B">High to low</option>
            </select>
          </div>
          <div className="px-4 border-r border-gray-300 flex-1">
            <label htmlFor="property-type" className="block text-gray-500">
              Property Type
            </label>
            <select
              id="property-type"
              value={propertyType}
              onChange={propertyTypeHandler}
              className="focus:outline-none font-semibold appearance-none cursor-pointer"
            >
              <option value="">Select</option>
              <option value="home">Houses</option>
              <option value="hotel">Hotels</option>
            </select>
          </div>
          <div className="px-4 flex justify-center items-center">
            <button type="submit" className="px-6 py-2 text-white bg-purple-500 rounded-md font-medium cursor-pointer">
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="mt-10 flex justify-evenly flex-wrap gap-x-10 gap-y-20 items-stretch">
  {places.length === 0 ? (
    <h1>No results found...</h1>
  ) : (
    places.map((place) => {
      return (
        <div className="w-1/4 mr-8" key={place.id}>
          <PropertyCard
            image={place.image}
            price={place.price}
            name={place.name}
            address={place.address}
            beds={place.beds}
            bathrooms={place.bathrooms}
            area={place.area}
          />
        </div>
      );
    })
  )}
</div>
    </div>
  );
};

export default Rent;
