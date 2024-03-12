'use client';
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import NextNProgress from 'nextjs-progressbar';
import LoadingBar from 'react-top-loading-bar';
import { createClient } from 'contentful';
import { selectThemeMode } from '../redux/slice';

const Page = () => {
  const mode = useSelector(selectThemeMode);
  const dispatch = useDispatch();

  const heading = "Pawsitively Adorable: Meet Our Furry Friends!";
  const description =
    "Explore a world of cuteness with our Pawsitively Adorable dog card collection. Each card features charming pups that are ready to bring joy and smiles to your day. From fluffy furballs to playful pals, these cards are a celebration of the pure, unconditional love that dogs bring into our lives.";

  const client = createClient({
    space: 'kp0x19lqk3lm',
    accessToken: '4ZJWSRN5SbOdXvqh3efQAqWyVzpKFmCoWVA3hQlMit0',
  });

  const fetchData = async () => {
    try {
      const dataEntry = await client.getEntries({ content_type: 'card' });
      // Dispatch an action with the data if needed
      // dispatch(yourAction(dataEntry));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
    fetchData();

  return (
    <>
      <div id="imgForThis" className=" opacity-90">
        <NextNProgress color="red" />
        <LoadingBar color="red" />
        <Navbar />
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <h2 id="heading2" className="font-bold xl:text-xl text-center my-2 md:text-lg lg:text-lg sm:text-sm pt-10">
              {heading}
            </h2>
            <p className="m-9 text-center" id="description">
              {description}
            </p>
            <h1 className="font-bold xl:text-xl text-center my-2 md:text-lg lg:text-lg sm:text-sm pt-10">
              Using - {mode} Theme
            </h1>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default Page;
