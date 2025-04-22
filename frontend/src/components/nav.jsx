import  {useState} from 'react'
import {NavLink} from 'react-router-dom'

const Navbar=()=>{
    const [isOpen,setIsOpen]=useState(false)

    const toggleMenu=()=>{
        setIsOpen(!isOpen)
    }

    return(
        <nav className='bg-gradient-to-r from-blue-500 to-purple-600'>
            <div>
                <div>
                    <div className='flex items-center md:hidden'>
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className='text-sm font-medium text-gray-700'
                            aria-controls='mobile-menu'
                            aria-expanded={isOpen}>
                            <span className='sr-only'>Open main menu</span>
                            {
                                isOpen?(
                                    <svg
                                        className='h-6 w-6'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M6 18L18 6M6 6l12 M9 '></path>
                                    </svg>
                                ) : (
                                    <svg
                                        className='h-6 w-6'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'>
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth='2'
                                            d='M4 6h16M4 12h16M4 18h16'></path>
                                    </svg>

                                )
                            }
                        </button>

                    </div>

                    <div className='hidden md:flex md:items-center text-sm font-medium text-gray-700'>
                        <ul className='flex space-x-6'>
                            <li>
                                <NavLink
                                    to="/"
                                    end
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-white font-semibold px-3 py-2 rounded-md text-sm transition-colors duration-200"
                                            : "text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm transition-colors duration-200"
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/products"
                                    end
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-white font-semibold px-3 py-2 rounded-md text-sm transition-colors duration-200"
                                            : "text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm transition-colors duration-200"
                                    }
                                >
                                    My Products
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/create-product"
                                    end
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-white font-semibold px-3 py-2 rounded-md text-sm transition-colors duration-200"
                                            : "text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm transition-colors duration-200"
                                    }
                                >
                                    Add product
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/cart"
                                    end
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-white font-semibold px-3 py-2 rounded-md text-sm transition-colors duration-200"
                                            : "text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm transition-colors duration-200"
                                    }
                                >
                                    Cart
                                </NavLink>
                            </li>
                            <li>
                            <NavLink
                                to="/profile"
                                end
                                className={({isActive}) =>
                                    isActive
                                        ? "text-white font-semibold px-3 py-2 rounded-md text-sm transition-colors duration-200"
                                        : "text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm transition-colors duration-200"
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                Profile
                            </NavLink>
                        </li>
                        </ul>
                    </div>

                </div>
            </div>

            {isOpen &&(
                <div className='md:hidden' id='mobile-menu'>
                    <ul className='px-2 pt-2 pb-3 '>
                        <li>
                            <NavLink
                                to="/home"
                                end
                                className={({isActive}) =>
                                    isActive
                                        ? "text-white font-semibold px-3 py-2 rounded-md text-sm transition-colors duration-200"
                                        : "text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm transition-colors duration-200"
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/myproduct"
                                end
                                className={({isActive}) =>
                                    isActive
                                        ? "text-white font-semibold px-3 py-2 rounded-md text-sm transition-colors duration-200"
                                        : "text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm transition-colors duration-200"
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                My Products
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/create-product"
                                end
                                className={({isActive}) =>
                                    isActive
                                        ? "text-white font-semibold px-3 py-2 rounded-md text-sm transition-colors duration-200"
                                        : "text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm transition-colors duration-200"
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                Add product
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/cart"
                                end
                                className={({isActive}) =>
                                    isActive
                                        ? "text-white font-semibold px-3 py-2 rounded-md text-sm transition-colors duration-200"
                                        : "text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm transition-colors duration-200"
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                Cart
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/profile"
                                end
                                className={({isActive}) =>
                                    isActive
                                        ? "text-white font-semibold px-3 py-2 rounded-md text-sm transition-colors duration-200"
                                        : "text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm transition-colors duration-200"
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                Profile
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}

        </nav>
    )
}

export default Navbar