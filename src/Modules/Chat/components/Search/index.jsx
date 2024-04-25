import React from "react";
import { SearchIcon } from "../Icon/Search";

const Search = ({
    value,
    onChange = () => {},
}) => {

    return (
        <div className="flex justify-center items-center bg-gray-200 rounded-lg p-3 space-x-3 text-gray-500">
            <SearchIcon />
            <input value={value} onChange={(e) => onChange(e.target.value)} placeholder="Search..." className="w-full bg-transparent outline-none" />
        </div>
    );
};

export default Search;