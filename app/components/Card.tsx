import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { Entry, EntrySkeletonType, createClient } from 'contentful';


const Card = () => {

    var client = createClient({
        space: "kp0x19lqk3lm",
        accessToken: "4ZJWSRN5SbOdXvqh3efQAqWyVzpKFmCoWVA3hQlMit0"
      });
    
      let heading = "Pawsitively Adorable: Meet Our Furry Friends!"
      let img = "https://images.ctfassets.net/kp0x19lqk3lm/7q21jWQJkxFzLtQYEbUcoT/faa9af0ac25f49ae636bf43b3ddb14cf/dog-bg.jpg"
      let description = "Explore a world of cuteness with our Pawsitively Adorable dog card collection. Each card features charming pups that are ready to bring joy and smiles to your day. From fluffy furballs to playful pals, these cards are a celebration of the pure, unconditional love that dogs bring into our lives."

      const fetchData = async () => {
        try {
          const dataEntry = await client.getEntries({ content_type: 'card' })
          return dataEntry
            // .then((e) => {
            //     let heading = document.getElementById("heading")
            //     if(heading){
            //         heading!.innerHTML = e.items[0].fields.heading
            //     }
            //   document.getElementById("description").innerHTML = e.items[0].fields.description
            //   document.getElementById('img').setAttribute('src', e.items[0].fields.image.fields.file.url)
            //   document.getElementById('img').removeAttribute('srcset')
            // })
    
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData().then((e)=> e?.items[0].fields.heading)

    return (
        <>
            <h2 id='heading' className='font-bold xl:text-xl text-center my-2 md:text-lg lg:text-lg sm:text-sm'>{heading}</h2>
            <Image className="m-3 w-2/3 rounded-xl"
                id='img'
                src={img}
                alt={"This is img"}
                height={400}
                width={400}
                priority
            ></Image>
            <p className='m-9 text-center' id='description'>{description}</p>

            <Link rel='preload' id='link' className='mb-3 py-2 px-5 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-75' href='/users2'>Click Me</Link>


        </>
    )
}

export default Card

