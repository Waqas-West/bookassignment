import React, { useState } from 'react';
import axios from 'axios';

const Searchbar = ({ setBooks, setSelectedBook }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async () => {
    try {
      // Make a POST request to the search endpoint with the search query
      const response = await axios.post('http://localhost:5174/books/search', {
        title: searchQuery,
      });

      // Update the UI with the search results
      setBooks(response.data.data);
      // Clear selected book when searching
      setSelectedBook(null);
    } catch (error) {
      console.error('Error searching books:', error);
      // Handle errors or set an appropriate state
    }
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className=" md:w-96">
      <div className="relative mb-4 flex w-full flex-wrap items-stretch">
        <input
          id="searchb"
          type="search"
          className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-yellow-800 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          placeholder="Search Book by Title"
          aria-label="Search"
          aria-describedby="button-addon1"
          value={searchQuery}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />

        {/* <!--Search button--> */}
        <button
          className="relative z-[2] flex items-center rounded-r bg-yellow-500 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
          type="button"
          id="button-addon1"
          onClick={handleSearch}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
