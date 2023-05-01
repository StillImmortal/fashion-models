import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'

// Styles
import styles from '../../styles/styles'

// Constants
import { navLinks, loginLinks } from '../../constants/constants'

const Header = () => {

    const showLine = (target) => {
        target.parentElement.classList.add("after:bg-left")
    }

    const hideLine = (target) => {
        target.parentElement.classList.remove("after:bg-left")
    }

    return (
        <header className='w-screen fixed inset-0 h-16 border-b-[1px] border-tertiary z-50'>
            <nav className='flex w-full h-full max-w-7xl mx-auto'>
                <NavLink
                    to='/'
                    className='flex items-center justify-start p-2 gap-2 flex-1'
                >
                    <div className='w-[40px] h-[40px] bg-green-500'></div>
                    <h1 className={styles.logoText}>LogoName</h1>
                </NavLink>
                
                <ul className='list-none flex items-center gap-8'>
                    {navLinks.map((link, index) => (
                        <li 
                            key={`link-${index}`} 
                            className='navLinkLine'
                        >
                            <NavLink
                                to={"/"}
                                className={`${styles.navLink} navLink`}
                                onMouseOver={({target}) => showLine(target)}
                                onMouseOut={({target}) => hideLine(target)}
                            >
                                {link.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <ul className='list-none flex justify-end items-center flex-1 gap-8 p-2'>
                    {loginLinks.map((link, index) => (
                        <li key={`link-${index}`}>
                            <NavLink
                                to={link.to}
                                className={`${link.style} duration-200 ease border-[1px] rounded-lg py-[6px] px-4`}
                            >
                                {link.title}    
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header