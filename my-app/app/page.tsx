"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

import DumyData from './MOCK_DATA';

export default function Home() {
  const [data, setData] = useState(DumyData);
  const [bestRev, setBestRev] = useState<typeof data>([]);
const [counter, setcounter] = useState(0)
useEffect(() => {
  const BestFiveItems = () => {
    if (data.length) {
      let arr: typeof data = data.filter((item) => item.reviews >= 3.5);
      setBestRev(arr);
    }
  };

  BestFiveItems();

  const intervalId = setInterval(() => {
    console.log(counter);
    
    setcounter((prevCounter:number) => prevCounter +1);
  }, 4000);

  return () => {
    clearInterval(intervalId);
  };
}, [data]);
  
console.log(counter);

  return (
    <div>
     <img src= { bestRev[counter]?bestRev[counter].images :"waiting for the data" } alt="" srcset="" />
      hi
    </div>
  );
}
