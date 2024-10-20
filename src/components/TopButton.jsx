import React from 'react';

const TopButton = ({ setQuery }) => {

  const cities = [
    { name: "India", query: { q: "India" } },
    { name: "London", query: { q: "London" } },
    { name: "Tokyo", query: { q: "Tokyo" } },
    { name: "Paris", query: { q: "Paris" } },
    { name: "Toronto", query: { q: "Toronto" } },
  ];

  return (
    <div className='flex items-center justify-around my-6'>
      {cities.map((city, index) => (
        <button
          key={index}
          className='text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in'
          onClick={() => setQuery(city.query)}
        >
          {city.name}
        </button>
      ))}
    </div>
  );
};

export default TopButton;
