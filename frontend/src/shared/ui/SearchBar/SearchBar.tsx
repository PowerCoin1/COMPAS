import React from 'react';

import { FilterIcon } from '../../../assets/icons/FilterIcon';
import { SearchIcon } from '../../../assets/icons/SearchIcon';

interface SearchBarProps {
    onClick?: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onClick }) => {
    return (
        <div
            className="flex items-center bg-white border border-secondary rounded-lg py-2.5 px-4 w-full max-w-[350px] cursor-text box-border"
            onClick={onClick}
        >
            <SearchIcon className="mr-1 shrink-0" />

            <span className="grow font-light text-md ml-1 select-none text-gray">Найти вакансию</span>

            <div className="flex items-center justify-center cursor-pointer">
                <FilterIcon />
            </div>
        </div>
    );
};
