import React, { useState } from 'react';
import Logo from "../../assets/reshot-icon-heart-coffee-M34YRS6ZHW.svg"
import Menu from "../../assets/menu.svg"
import close from "../../assets/closebtn.svg"
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [menuIcon, setMenuIcon] = useState(Menu);
    
    const toggleMenu = (e) => {
        const navLinks = document.getElementsByClassName("nav-links")[0];
        console.log(navLinks.classList);
        if (!menuToggle) {
            navLinks.style.top = "8.5%";
        } else {
            navLinks.style.top = "-100%";
        }
        setMenuToggle(!menuToggle);
        setMenuIcon(menuToggle ? Menu : close);
    }


    return (
        <header className='bg-white'>
            <nav className='flex justify-between items-center w-[98%] mx-auto'>
                <div className='flex items-center font-bold text-2xl'>
                    <Link to='/'><img src={Logo} alt="Logo" className='w-12 m-4 md:6' /></Link>
                    <p className='text-xl'>Brand Name</p>
                </div>
                <div className='nav-links absolute md:static md:min-h-fit bg-white md:w-auto min-h-[40vh] left-0 top-[-100%] w-full flex items-center px-5 z-10'>
                    <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vh gap-10 font-bold hover: cursor-pointer  text-black text-[17px]'>
                    <li className='hover:text-[#f26b8c] md:hidden'>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className='hover:text-[#f26b8c]'>
                            <Link to='/shop'>Shop</Link>
                        </li>
                        <li className='hover:text-[#f26b8c]'>
                            <Link>Bestsellers</Link>
                        </li>
                        <li className='hover:text-[#f26b8c]'>
                            <Link>Snacking</Link>
                        </li>
                        <li className='hover:text-[#f26b8c]'>
                            <Link>Mixes</Link>
                        </li>
                        <li className='hover:text-[#f26b8c]'>
                            <Link>Diet Specific</Link>
                        </li>
                    </ul>
                </div>
                <div className='flex items-center gap-2'>
                    <Link className='bg-[#e73f69] text-white rounded-3xl py-2 px-6  hover:bg-[#f26b8c]' to="/signup">Sign Up</Link>
                    <img src={menuIcon} alt="Profile-logo" className='w-10 m-2 mr-0 md:hidden' onClick={() => toggleMenu(event)} />
                </div>
            </nav>

        </header>

    );
};

export default Navbar;
