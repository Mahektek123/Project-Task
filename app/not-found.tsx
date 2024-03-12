'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Image from 'next/image';

export default function NotFound() {
    const [meme, setMeme] = useState("");
    const [url, setUrl] = useState("");
    const [name, setName] = useState("");
    useEffect(() => {
        const fetchMeme = async () => {
            
            try {
                let data;
                const response = await axios.get('https://api.imgflip.com/get_memes');
                const memes = response.data.data.memes;
                const randomMeme = memes[Math.floor(Math.random() * memes.length)];
                setMeme(randomMeme);
                data = randomMeme.url.slice(0, randomMeme.url.lastIndexOf('/')) + randomMeme.url.slice(randomMeme.url.lastIndexOf('/') + 1)
                setUrl(randomMeme.url);
                setName(randomMeme.name)
              } catch (error) {
                console.error('Error fetching meme:', error);
              }

        };

        fetchMeme();
    }, []);

    return (
        <>
            <Navbar></Navbar>
            <div className='flex flex-col justify-center items-center' style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1 className='text-3xl'>Random Meme Generator</h1>
                {meme ? (
                    <>
                        <Image className='mt-5' src={url} alt={name} height={300} width={300} />
                        <br/>
                        <p style={{ marginTop: '10px' }}>{name}</p>
                    </>
                ) : (
                    <p>Loading meme...</p>
                )} 
             </div>
        </>
    );
}
