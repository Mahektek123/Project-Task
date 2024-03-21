import React, { useEffect, useRef, useState } from 'react'
import Image from "next/image";
import Link from 'next/link';
import { Entry, EntrySkeletonType, createClient } from 'contentful';

interface HtmlContent {
  items?: MainContent[]
}
interface MainContent {
  fields?: ContentData;
  // fields2?: contentForImage;
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



interface HtmlContent2 {
  items?: MainContent2[]
}
interface MainContent2 {
  fields?: ContentData2;
}

interface ContentData2 {
  buttonText?: string;
  link?: string;
}

const Card = () => {
  const [htmlData, setHtmlData] = useState<HtmlContent>();
  const [htmlData2, setHtmlData2] = useState<HtmlContent2>();

  var client = createClient({
    space: "kp0x19lqk3lm",
    accessToken: "4ZJWSRN5SbOdXvqh3efQAqWyVzpKFmCoWVA3hQlMit0"
  });

  const fetchData = async (): Promise<HtmlContent> => {
    const dataEntry = (await client.getEntries({ content_type: 'card' }))
    return dataEntry
  };

  const fetchData2 = async (): Promise<HtmlContent2> => {
    const dataEntry2 = (await client.getEntries({ content_type: 'button' }))
    return dataEntry2
  };

  useEffect(() => {
    fetchData()
      .then((res) => { setHtmlData(res); })

    fetchData2()
      .then((res) => { setHtmlData2(res); })
  }, []);

  return (
    <>
      {
        htmlData && htmlData2 &&(
          htmlData.items && htmlData2.items && (
            <>
              <h2 id='heading' className='font-bold xl:text-xl text-center my-2 md:text-lg lg:text-lg sm:text-sm'>
                {htmlData.items[0]?.fields?.heading}
              </h2>
              <Image className="m-3 w-2/3 rounded-xl"
                id='img'
                src={"https:" + (htmlData.items[0].fields?.image?.fields?.file?.url)?.toString()}
                alt={"This is img"}
                height={400}
                width={400}
                priority
              ></Image>
              <p className='m-9 text-center' id='description'>
                {htmlData.items[0]?.fields?.description}
              </p>

              <Link rel='preload' id='link' className='mb-3 py-2 px-5 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-75' href={"" + htmlData2.items[0]?.fields?.link}>{htmlData2.items[0]?.fields?.buttonText}</Link>
            </>
          )
        )
      }
    </>
  )
}

export default Card

