"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setDummyResponse } from "@/redux/slice/dummyResponseSlice";

const dummyLocations = [
  "New York",
  "London",
  "Paris",
  "Tokyo",
  "Bangalore",
  "Berlin",
  "Sydney",
  "Dubai",
  "San Francisco",
  "Toronto",
];

const dummyResponse = {
  "New York": {
    city: "New York",
    country: "USA",
    temperature: "27°C",
    rainfall: "2 mm",
    windSpeed: "15 km/h",
  },
  "London": {
    city: "London",
    country: "UK",
    temperature: "22°C",
    rainfall: "5 mm",
    windSpeed: "10 km/h",
  },
  "Paris": {
    city: "Paris",
    country: "France",
    temperature: "25°C",
    rainfall: "1 mm",
    windSpeed: "12 km/h",
  },
  "Tokyo": {
    city: "Tokyo",
    country: "Japan",
    temperature: "30°C",
    rainfall: "0 mm",
    windSpeed: "18 km/h",
  },
  "Bangalore": {
    city: "Bangalore",
    country: "India",
    temperature: "24°C",
    rainfall: "7 mm",
    windSpeed: "9 km/h",
  },
  "Berlin": {
    city: "Berlin",
    country: "Germany",
    temperature: "23°C",
    rainfall: "3 mm",
    windSpeed: "14 km/h",
  },
  "Sydney": {
    city: "Sydney",
    country: "Australia",
    temperature: "20°C",
    rainfall: "6 mm",
    windSpeed: "16 km/h",
  },
  "Dubai": {
    city: "Dubai",
    country: "UAE",
    temperature: "38°C",
    rainfall: "0 mm",
    windSpeed: "20 km/h",
  },
  "San Francisco": {
    city: "San Francisco",
    country: "USA",
    temperature: "19°C",
    rainfall: "4 mm",
    windSpeed: "11 km/h",
  },
  "Toronto": {
    city: "Toronto",
    country: "Canada",
    temperature: "21°C",
    rainfall: "2 mm",
    windSpeed: "13 km/h",
  },
};




const Searchinput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredLocations, setFilteredLocations] = useState(dummyLocations);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption,setSelectedOption] = useState("Berlin")

  const dispatch = useDispatch()

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setFilteredLocations(
      dummyLocations.filter((loc) =>
        loc.toLowerCase().includes(value.toLowerCase())
      )
    );
    setShowDropdown(true);
  };

  const handleSelect = async (location) => {
    setSearchTerm(location);
    setSelectedOption(location)
    setShowDropdown(false);

    try {
      // const res = await axios.get(`/api/location?city=${location}`);
      dispatch(setDummyResponse(dummyResponse[location]))

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchData = async () => {
    try {
      // const res = await axios.get(`/api/location?city=${selectedOption}`);
      dispatch(setDummyResponse(dummyResponse[selectedOption]))
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 60 * 60 * 1000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-64">
      <input
        className="bg-[#2D3037] h-9 w-full rounded-xl pl-10 text-white"
        value={searchTerm}
        onChange={handleChange}
        onFocus={() => setShowDropdown(true)}
        placeholder="Search location..."
      />
      <Image
        style={{ left: "10px", top: "10px" }}
        className="absolute"
        src="/search.svg"
        alt="Search icon"
        width={20}
        height={20}
        priority
      />

      {showDropdown && filteredLocations.length > 0 && (
        <ul className="absolute z-10 bg-[#2D3037] text-white mt-1 w-full rounded-md shadow-lg max-h-60 overflow-y-auto">
          {filteredLocations.map((loc, idx) => (
            <li
              key={idx}
              className="px-4 py-2 hover:bg-[#3A3D44] cursor-pointer"
              onClick={() => handleSelect(loc)}
            >
              {loc}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Searchinput;
