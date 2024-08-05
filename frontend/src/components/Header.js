"use client";

import Link from 'next/link';
import Avatar from '@mui/material/avatar';
import { blue } from '@mui/material/colors';
import Navbar from '../components/Navbar';
import { TextField } from '@mui/material';

const Header = () => {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-1 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <div className="text-3xl font-bold text-blue-500 ml-2">
                        <Link href="/">StudiPak</Link>
                    </div>
                </div>
                <nav className="flex items-center space-x-4">
                        <div className="font-bold text-black ml-2 space-x-5">
                    <Link href="/courses">Sign Up</Link>
                    <Link href="/upload">Log In</Link>
                        </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;