import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { NavLink } from 'react-router-dom';
import menu from './menu-items.json'
export default function Navbar() {
    const [nav, setNav] = useState(false);
    const styleLinks = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
        }
    }
    const handleNav = () => {
        setNav(!nav)
    }
    let menuRef = useRef();
    useEffect(() => {
        let handleOutsideClick = (e) => {
            if (!menuRef.current.contains(e.target) && nav===true) {
                setNav(false)
            }
        }
        document.addEventListener("mousedown", handleOutsideClick)
        return ()=>{
            document.removeEventListener("mousedown", handleOutsideClick)
        }
    })
    return (
        <div ref={menuRef} className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>
            <h1 className='w-full text-3xl font-bold text-black'>Store.</h1>
            <ul className='hidden md:flex'>
                {menu.items.map(item => <NavLink key={item.name} style={styleLinks} to={item.path}><li className='p-4 border-b border-gray-600 whitespace-nowrap'>{item.name}</li></NavLink>)}
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] z-40 h-full border-r border-r-gray-900 bg-[#E7E7E7] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-black m-4'>Store.</h1>
                <ul className='p-4 uppercase'>
                    {menu.items.map(item => <NavLink key={item.name} onClick={()=>setNav(false)} style={styleLinks} to={item.path}><li className='p-4 border-b border-gray-600 whitespace-nowrap'>{item.name}</li></NavLink>)}
                </ul>
            </div>
        </div>
    )
}
