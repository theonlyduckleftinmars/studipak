"use client";

import Link from 'next/link';
import Avatar from '@mui/material/avatar';
import { blue } from '@mui/material/colors';
import Navbar from "../components/Navbar";

const Header = () => {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-1 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <Navbar />
                    <div className="text-2xl font-bold text-blue-600 ml-2">
                        <Link href="/">CourseShare</Link>
                    </div>
                </div>
                <nav>
                    <Link href="/profile" legacyBehavior>
                        <a>
                            <Avatar sx={{ bgcolor: blue[500] }}>P</Avatar>
                        </a>
                    </Link>
                </nav>
            </div>
        </header>
    );
};


export default Header;