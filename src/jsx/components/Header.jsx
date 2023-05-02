import React, { useRef, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

// Styles
import styles from '../../styles/styles'

// Constants
import { navLinks, loginLinks } from '../../constants/constants'

const Header = () => {
    const headerRef = useRef()
    const [menuState, setMenuState] = useState(false)

    const toggleMenuState = () => {
        setMenuState(prevState => !prevState)
    }
 
    const showLine = (target) => {
        target.classList.add("after:bg-left")
    }

    const hideLine = (target) => {
        target.classList.remove("after:bg-left")
    }

    const initialScroll = 0
    const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop
    const windowSize = () => window.innerWidth || document.documentElement.offsetWidth

    useEffect(() => {
        window.addEventListener("scroll", function() {
            if (scrollPosition() > initialScroll) {
                headerRef.current.classList.add("border-b-[1px]")
            } else {
                headerRef.current.classList.remove("border-b-[1px]")
            }
        })

        window.addEventListener("resize", function() {
            if (windowSize() >= 1024) {
                setMenuState(false)
            }
        })
    }, [])

    return (
        <header 
            ref={headerRef} 
            className={`w-screen fixed inset-0 bg-white lg:bg-transparent lg:backdrop-blur-sm h-16 border-tertiary z-50 
            ${menuState ? "border-b-white" : `${scrollPosition() == initialScroll ? "" : "border-b-[1px]"}`}`}
        >
            <div className='flex w-full h-full max-w-7xl mx-auto gap-2'>
                <nav className='flex items-center justify-between gap-8 flex-1'>
                    <NavLink
                        to='/'
                        className='flex items-center gap-2 p-2'
                    >
                        <div className='w-[40px] h-[40px] bg-green-500'></div>
                        <h1 className={styles.logoText}>LogoName</h1>
                    </NavLink>

                    <div onClick={toggleMenuState} className={`${menuState ? "bg-red-400" : ""} lg:hidden w-[40px] h-[40px] m-2 border-2 `}></div>

                    <nav className={`mobile-menu ${menuState ? "flex" : "hidden"} lg:hidden top-16 flex-col py-2 px-6 gap-10 fixed w-screen z-50 bg-white overflow-y-scroll`}>
                        <nav className='flex flex-col w-full items-center gap-4 mt-2'>
                            {loginLinks.map((link, index) => (
                                <NavLink
                                    key={`link-${index}`}
                                    to={link.to}
                                    className={`${link.style} flex items-start justify-center duration-200 ease border-[1px] w-full rounded-md py-[8px] px-4 whitespace-nowrap`}
                                >
                                    {link.title}    
                                </NavLink>
                            ))}
                        </nav>
                        
                        <nav className='flex flex-col w-full gap-2 mt-2'>
                            {navLinks.map((link, index) => (
                                <NavLink
                                    key={`link-${index}`}
                                    to={"/"}
                                    className={`${styles.navLink} border-tertiary py-2 border-b-[1px]`}
                                >
                                    {link.title}
                                </NavLink>
                            ))}
                        </nav>
                    </nav>
                </nav>
                
                <nav className='hidden lg:flex items-center gap-8'>
                    {navLinks.map((link, index) => (
                        <NavLink
                            key={`link-${index}`}
                            to={"/"}
                            className={`${styles.navLink} navLink navLinkLine`}
                            onMouseOver={({target}) => showLine(target)}
                            onMouseOut={({target}) => hideLine(target)}
                        >
                            {link.title}
                        </NavLink>
                    ))}
                </nav>

                <nav className='hidden lg:flex justify-end items-center flex-1 gap-8 p-2'>
                    {loginLinks.map((link, index) => (
                        <NavLink
                            key={`link-${index}`}
                            to={link.to}
                            className={`${link.style} duration-200 ease border-[1px] rounded-lg py-[6px] px-4 whitespace-nowrap`}
                        >
                            {link.title}    
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    )
}

export default Header