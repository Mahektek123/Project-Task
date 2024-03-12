'use client';
import Link from 'next/link'
import React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme, selectThemeMode } from '../redux/slice';

const Navbar = () => {

    const [isClient, setIsClient] = useState(false);
    const [mode, setmode] = useState("Dark")

    useEffect(() => {
        setIsClient(true);
    }, []);

    const dispatch = useDispatch();
    let themeMode = useSelector(selectThemeMode);
    const handleToggle = () => {
        dispatch(toggleTheme());
        if (isClient) {
            if (themeMode == "Light") {
                document.body.style.backgroundColor = "rgb(56, 56, 56)"
                document.body.style.color = "White"
                document.getElementById("impect")?.setAttribute("checked", "false")
                setmode(themeMode)
            } else if (themeMode == "Dark") {
                document.body.style.backgroundColor = "White"
                document.body.style.color = "Black"
                document.getElementById("impect")?.setAttribute("checked", "true")
                setmode(themeMode)
            }
        }

    };

    

    return (
        <>
            <div className='flex justify-around 2xl:text-2xl xl:text-xl border-b-4 sm:mx-11  sm:text-sm py-3 relative z-10'>
                
                    <Link rel='preload' href="/" className="mx-3"><button className='py-2 px-5 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-75'>Home</button></Link>
                
                    <Link rel='preload' href="users" className="mx-3"><button className='py-2 px-5 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-75'>Menu</button></Link>
                
                    <label className="inline-flex items-center cursor-pointer">
                        <input id='impect' type="checkbox" checked={themeMode == "Light" ? false : true} onClick={handleToggle} readOnly value="" className="sr-only peer" />
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span className="ms-3 text-sm font-medium">{themeMode} mode</span>
                    </label>
            </div>
        </>
    )
}

export default Navbar