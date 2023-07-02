"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "./styles/main.module.scss";
import DummyData from "./MOCK_DATA";

export default function Home() {
  const [data, setData] = useState(DummyData);
  const [bestRev, setBestRev] = useState<typeof data>([]);
  const [counter, setCounter] = useState(0);
  const [refresh,setRefresh] = useState(false)
  useEffect(() => {
    const BestFiveItems = () => {
      if (data.length) {
        let arr: typeof data = data.filter((item) => item.reviews >= 3.5);
        setBestRev(arr);
      }
    };
    
    BestFiveItems();
    const intervalId = setInterval(() => {
      
      setCounter((prevCounter:number) =>{
     if(prevCounter>=data.length){
        return prevCounter=1
      }
      else if(prevCounter<=0){
        return prevCounter=1
      }
      else return prevCounter + 1});
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, [refresh]);
  const controlTheImage = (x: number) => {
    setCounter((prevCounter: number) => prevCounter + x);
  };

  console.log(counter);

  return (
    <main>
      <div className={styles.promotion}>
        <img
          src={
            bestRev[counter] ? bestRev[counter].images : "waiting for the data"
          }
          alt="images"
        />
        <img
          src="./back.svg"
          className={styles.prev}
          onClick={() => {
            controlTheImage(-1);
          }}
        />
        <img
          src="./front.svg"
          className={styles.next}
          onClick={() => {
            controlTheImage(1);
          }}
        />
      </div>
    </main>
  );
}
