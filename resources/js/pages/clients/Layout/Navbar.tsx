import React, { useState } from 'react';
import { FiGlobe, FiMenu, FiSearch, FiUser } from 'react-icons/fi';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const navItems = ['Home', 'Services', 'About Us'];
    const languages = ['English', 'Español', 'Français'];
    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedLanguage(e.target.value);
    };
    return (
        <nav className="fixed top-0 z-50 w-full bg-[#1A3A6C] px-6 py-4 text-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                <div className="flex items-center space-x-2">
                    <img
                        src="/clients/images/Mali.svg"
                        alt="Government Logo"
                        className="h-12 w-12 rounded-full border-2 border-white object-contain"
                    />
                    <span className="hidden text-xl font-semibold md:block">Ne ka Seben</span>
                </div>

                <div className="hidden items-center space-x-8 md:flex">
                    {navItems.map((item) => (
                        <button
                            key={item}
                            className="transition-colors duration-200 hover:text-[#E0E4E8] hover:underline hover:decoration-2 hover:underline-offset-4"
                        >
                            {item}
                        </button>
                    ))}
                </div>

                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <select
                            value={selectedLanguage}
                            onChange={(e) => setSelectedLanguage(e.target.value)}
                            className="cursor-pointer appearance-none rounded-md border border-white bg-transparent px-3 py-1"
                        >
                            {languages.map((lang) => (
                                <option key={lang} value={lang} className="text-black">
                                    {lang}
                                </option>
                            ))}
                        </select>
                        <FiGlobe className="pointer-events-none absolute top-2 right-1" />
                    </div>

                    <button className="rounded-full p-2 transition-colors duration-200 hover:bg-[#2C5EA0]">
                        <FiSearch className="h-5 w-5" />
                    </button>

                    <button className="hover:bg-opacity-90 hidden items-center space-x-2 rounded-md bg-[#2C5EA0] px-4 py-2 transition-colors duration-200 md:flex">
                        <FiUser className="h-5 w-5" />
                        <span>Login</span>
                    </button>

                    <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <FiMenu className="h-6 w-6" />
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="mt-4 space-y-2 px-4 py-2 md:hidden">
                    {navItems.map((item) => (
                        <button key={item} className="block w-full rounded-md px-4 py-2 text-left transition-colors duration-200 hover:bg-[#2C5EA0]">
                            {item}
                        </button>
                    ))}
                    <button className="hover:bg-opacity-90 flex w-full items-center space-x-2 rounded-md bg-[#2C5EA0] px-4 py-2 transition-colors duration-200">
                        <FiUser className="h-5 w-5" />
                        <span>Login</span>
                    </button>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
