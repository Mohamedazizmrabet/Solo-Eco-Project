"use client";
import Image from "next/image";
import React, { useState, useEffect,useContext } from "react";
import styles from "./styles/main.module.scss";
import DummyData from "./MOCK_DATA";
import axios from "axios";

import AllProducts from "./comp/AllProducts";

// import AllProductDisplay from "./comp/AllProductDisplay";

export default function Home() {
  console.log(fetch);
  
  
  const [data, setData] = useState(DummyData);
  const [bestRev, setBestRev] = useState<typeof items>([]);
  const [counter, setCounter] = useState(0);
  const [refresh, setRefresh] = useState(false);


  const BestFiveItems = (array: []) => {
    console.log(array);
    if (data.length) {
      let arr: typeof items = array.filter((item:item) => item?.rating >= 2);
      setBestRev(arr);
    }
  };

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      console.log(res.data.products);
      BestFiveItems(res.data.products);
      setData(res.data.products);
    });

    const intervalId = setInterval(() => {
      setCounter((prevCounter: number) => {
        if (prevCounter >= data.length - 1) {
          return 0;
        } else {
          return prevCounter + 1;
        }
      });
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, [refresh]);

  const controlTheImage = (x: number) => {
    setCounter((prevCounter: number) => {
      let newCounter = prevCounter + x;

      if (newCounter > data.length - 1) {
        return 0;
      } else if (newCounter < 0) {
        return data.length - 1;
      } else {
        return newCounter;
      }
    });
  };

  console.log(counter);

  return (
    <main>
      <div className={styles.promotion}>
        {bestRev.length > 0 ? (
          <img
            className={styles.products}
            src={bestRev[counter].images[0]}
            alt="images"
          />
        ) : (
          <p className={styles.placeholder}>Waiting for data...</p>
        )}
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
      <section>
<AllProducts data={data} />
      </section>
    </main>
  );
}
