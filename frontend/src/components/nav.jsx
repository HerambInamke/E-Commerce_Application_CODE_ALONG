import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinkClass = ({ isActive }) =>
        isActive
            ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-4 py-2.5 rounded-lg text-sm transition-all duration-300 shadow-md hover:from-blue-700 hover:to-blue-800 hover:shadow-lg transform hover:-translate-y-0.5"
            : "text-gray-700 hover:text-blue-600 bg-white hover:bg-blue-50 px-4 py-2.5 rounded-lg text-sm transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5";

    return (
        <nav className="bg-gradient-to-r from-blue-50 to-white border-b border-blue-100 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-2.5 rounded-lg 
                                     transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 
                                     hover:shadow-md active:bg-blue-100"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open Main Menu</span>
                            {!isOpen ? (
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                    <div className="hidden md:flex md:items-center md:justify-center w-full">
                        <ul className="flex space-x-8">
                            <li>
                                <NavLink
                                    to="/"
                                    end
                                    className={navLinkClass}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/myproducts"
                                    end
                                    className={navLinkClass}
                                >
                                    My Product
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/create-product"
                                    end
                                    className={navLinkClass}
                                >
                                    Add Product
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/cart"
                                    end
                                    className={navLinkClass}
                                >
                                    Cart
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div 
                    className="md:hidden transition-all duration-300 ease-in-out" 
                    id="mobile-menu"
                >
                    <ul className="px-2 pt-2 pb-3 space-y-2 bg-white shadow-lg rounded-b-xl border-x border-b border-blue-100">
                        <li>
                            <NavLink
                                to="/"
                                end
                                className={navLinkClass}
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/myproducts"
                                end
                                className={navLinkClass}
                                onClick={() => setIsOpen(false)}
                            >
                                My Product
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/create-product"
                                end
                                className={navLinkClass}
                                onClick={() => setIsOpen(false)}
                            >
                                Add Product
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/cart"
                                end
                                className={navLinkClass}
                                onClick={() => setIsOpen(false)}
                            >
                                Cart
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;