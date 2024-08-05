// components/SearchBox.js
"use client";

import { useState } from 'react';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import Link from 'next/link';

const SearchBox = () => {
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleLinkClick = () => {
        console.log('Input:', input);
        // Add your logic to handle the link click here
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-6 mt-8 mx-auto max-w-2xl">
            <div className="flex items-center">
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    className="flex-grow p-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your University"
                />
                <Link href="/search" onClick={handleLinkClick}>
                    <nav>
                        <ArrowForwardOutlinedIcon
                            className="text-blue-500 ml-4 cursor-pointer hover:text-blue-600"
                            fontSize="medium"
                        />
                    </nav>
                </Link>
            </div>
        </div>
    );
};

export default SearchBox;
