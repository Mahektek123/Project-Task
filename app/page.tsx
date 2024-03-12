'use client';
import Navbar from "./components/Navbar";
import { selectThemeMode } from './redux/slice';
import { useSelector } from 'react-redux'
import Card from "./components/Card";
import { motion, AnimatePresence } from "framer-motion";
import img from "./things/dog-bg.jpg"

import { useEffect, useState } from "react";

import { Entry, EntrySkeletonType, createClient } from 'contentful';
import { UrlObject } from 'url';




export default function Home() {




  
  var client = createClient({
    space: "kp0x19lqk3lm",
    accessToken: "4ZJWSRN5SbOdXvqh3efQAqWyVzpKFmCoWVA3hQlMit0"
  });

  const url = img;
  const heading = "props.heading"
  // const heading = img2 
  const description = "Explore a world of cuteness with our Pawsitively Adorable dog card collection. Each card features charming pups that are ready to bring joy and smiles to your day. From fluffy furballs to playful pals, these cards are a celebration of the pure, unconditional love that dogs bring into our lives."
  const link = "/users2"
  let mode = useSelector(selectThemeMode)

  return (
    <>
      <Navbar></Navbar>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .25 }}
          className="container mx-auto py-8 flex flex-col items-center justify-center relative w-auto">
          <h1 className="text-3xl font-bold mb-4">Card</h1>
          {/* <img src={img2.toString()} alt="" /> */}
          <motion.div
            whileHover={{ scale: 1.1, boxShadow: "0 0 10px black", backdropFilter: "blur(5px)" }}
            onHoverStart={e => { }}
            style={{ borderColor: mode == "Dark" ? 'white' : 'black' }} className="flex flex-wrap h-full mx-4 border-2 lg:w-2/4 xl:w-2/4 md:2/3 sm:2/3 rounded-xl flex-col items-center justify-center">

            <Card></Card>


          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>

  );
}


