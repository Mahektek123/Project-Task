'use client';
import { useDispatch, useSelector } from 'react-redux';
import { FriVal, MonVal, SatVal, SunVal, ThurVal, TueVal, WedVal, updateFri, updateSat, updateMon, updateSun, updateThur, updateTue, updateWed } from '../redux/slice2';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ReactECharts from 'echarts-for-react';
import { motion, AnimatePresence } from "framer-motion";

const Page = () => {
    const defaultSun = useSelector(SunVal);
    const defaultMon = useSelector(MonVal);
    const defaultTue = useSelector(TueVal);
    const defaultWed = useSelector(WedVal);
    const defaultThur = useSelector(ThurVal);
    const defaultFri = useSelector(FriVal);
    const defaultSat = useSelector(SatVal);

    const [sun, setSun] = useState(defaultSun);
    const [mon, setMon] = useState(defaultMon);
    const [tue, setTue] = useState(defaultTue);
    const [wed, setWed] = useState(defaultWed);
    const [thur, setThur] = useState(defaultThur);
    const [fri, setFri] = useState(defaultFri);
    const [sat, setSat] = useState(defaultSat);

    const dispatch = useDispatch();

    useEffect(() => {
        fetchData();
    }, []); // Empty dependency array to run the effect only once

    const fetchData = async () => {
        try {
            // Fetch data and dispatch actions if needed
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    let option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['Sun', 'Mon', 'tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'Direct',
                type: 'bar',
                barWidth: '60%',
                data: [sun, mon, tue, wed, thur, fri, sat]
            }
        ]
    };

    const setDefaultValues = () => {
        setMon(defaultMon);
        dispatch({
            mon,
            type: ''
        })
        setTue(defaultTue);
        dispatch({
            tue,
            type: ''
        })
        setWed(defaultWed);
        dispatch({
            wed,
            type: ''
        })
        setThur(defaultThur);
        dispatch({
            thur,
            type: ''
        })
        setFri(defaultFri);
        dispatch({
            fri,
            type: ''
        })
        setSat(defaultSat);
        dispatch({
            sat,
            type: ''
        })
        setSun(defaultSun);
        dispatch({
            sun,
            type: ''
        })
    }

    return (
        <>
            {/* <NextNProgress color="red"/> */}
            <Navbar></Navbar>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                >
                    <div className='flex flex-col md:flex-row text-center'>
                        <div className="left-part w-full md:w-1/2">
                            <h2 className='text-2xl font-bold'>Chart</h2>
                            <br />
                            <ReactECharts option={option} />
                        </div>
                        <div className=" flex flex-col items-center w-full md:w-1/2 mt-4">
                            <h2 className='text-2xl font-bold'>Change Values</h2>

                            <form className="w-full max-w-sm mt-4 ms-3 ">
                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="sun">
                                            Sunday
                                        </label>
                                    </div>
                                    <div className="md:w-2/3">
                                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="sun" type="number" onChange={(e) => {
                                            setSun(e.target.value)
                                            dispatch({
                                                sun,
                                                type: ''
                                            })
                                        }} />
                                    </div>
                                </div>


                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="mon">
                                            Monday
                                        </label>
                                    </div>
                                    <div className="md:w-2/3">
                                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="mon" type="number" onChange={(e) => {
                                            setMon(e.target.value)
                                            dispatch({
                                                mon,
                                                type: ''
                                            })
                                        }} />
                                    </div>
                                </div>


                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="tue">
                                            Tuesday
                                        </label>
                                    </div>
                                    <div className="md:w-2/3">
                                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="tue" type="number" onChange={(e) => {
                                            setTue(e.target.value)
                                            dispatch({
                                                tue,
                                                type: ''
                                            })
                                        }} />
                                    </div>
                                </div>


                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="wed">
                                            Wednesday
                                        </label>
                                    </div>
                                    <div className="md:w-2/3">
                                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="wed" type="number" onChange={(e) => {
                                            setWed(e.target.value)
                                            dispatch({
                                                wed,
                                                type: ''
                                            })
                                        }} />
                                    </div>
                                </div>


                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="thur">
                                            Thursday
                                        </label>
                                    </div>
                                    <div className="md:w-2/3">
                                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="thur" type="number" onChange={(e) => {
                                            setThur(e.target.value)
                                            dispatch({
                                                thur,
                                                type: ''
                                            })
                                        }} />
                                    </div>
                                </div>


                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="fri">
                                            Friday
                                        </label>
                                    </div>
                                    <div className="md:w-2/3">
                                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="fri" type="number" onChange={(e) => {
                                            setFri(e.target.value)
                                            dispatch({
                                                fri,
                                                type: ''
                                            })
                                        }} />
                                    </div>
                                </div>


                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="sat">
                                            Saturday
                                        </label>
                                    </div>
                                    <div className="md:w-2/3">
                                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="sat" type="number" onChange={(e) => {
                                            setSat(e.target.value)
                                            dispatch({
                                                sat,
                                                type: ''
                                            })
                                        }} />
                                    </div>
                                </div>
                            </form>
                            <button className="py-2 px-5 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-75" onClick={setDefaultValues}>
                                Set As Default
                            </button>
                        </div>
                    </div>

                </motion.div>
            </AnimatePresence>
        </>
    );
};

export default Page;
