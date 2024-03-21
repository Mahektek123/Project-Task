'use client';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { createClient } from 'contentful';
import { selectThemeMode } from '../redux/slice';

interface HtmlContent {
  items?: MainContent[]
}
interface MainContent {
  fields?: ContentData;
}
interface ContentData {
  heading?: string;
  description?: string;
  img?: string;
}
interface ContentData {
  image?: imgPart;
}

interface imgPart {
  fields?: imgField;
}

interface imgField {
  file?: imgLoc;
}
interface imgLoc {
  url?: string;
}

const Page = () => {
  const [htmlData, setHtmlData] = useState<HtmlContent>();


  const mode = useSelector(selectThemeMode);
  const dispatch = useDispatch();

  const client = createClient({
    space: 'kp0x19lqk3lm',
    accessToken: '4ZJWSRN5SbOdXvqh3efQAqWyVzpKFmCoWVA3hQlMit0',
  });

  const fetchData = async (): Promise<HtmlContent> => {
    const dataEntry = (await client.getEntries({ content_type: 'card' }))
    return dataEntry
  };

  useEffect(() => {
    fetchData()
      .then((res) => { setHtmlData(res); })
  }, []);

  return (
    <>

      {
        htmlData && (
          htmlData.items && (
            <>
              <div id="imgForThis" className=" opacity-90">
                <Navbar />
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                  >
                    <h2 id="heading2" className="font-bold xl:text-xl text-center my-2 md:text-lg lg:text-lg sm:text-sm pt-10">
                    {htmlData.items[0]?.fields?.heading}
                    </h2>
                    <p className="m-9 text-center" id="description">
                    {htmlData.items[0]?.fields?.description}
                    </p>
                    <h1 className="font-bold xl:text-xl text-center my-2 md:text-lg lg:text-lg sm:text-sm pt-10">
                      Using - {mode} Theme
                    </h1>
                  </motion.div>
                </AnimatePresence>
              </div>
            </>
          ))
      }

    </>
  );
};

export default Page;
