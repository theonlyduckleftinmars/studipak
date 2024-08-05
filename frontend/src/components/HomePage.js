"use client";

import SearchBox from "@/components/SearchBox";

const HomePage = () => {
    return (
        <div className="relative bg-gray-50 min-h-screen py-8 overflow-hidden">
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="bubbles">
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                </div>
            </div>
            <div className="container mx-auto text-center relative z-10 mt-20">
                <h1 className="text-4xl font-bold text-black mb-4">
                    Search for the old,
                    present and contribute for the future.
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                    Discover old course materials, create new content for future students, and see what students are sharing right now
                </p>
                <div className="flex justify-center">
                    <SearchBox />
                </div>
            </div>
        </div>
    );
};

export default HomePage;


// <div className="container mx-auto text-center">
//     <h1 className="text-4xl font-bold text-black mb-5">
//         Search for the old,
//         present and contribute for the future.
//     </h1>
//     <p className="text-lg text-gray-700 mb-8">
//         Discover old course materials, create new content for future students, and see what students are sharing right
//         now
//     </p>
//
// </div>