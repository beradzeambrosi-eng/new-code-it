"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Testpage() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("გამარჯობა");
  }, []);

  useEffect(() => {
    console.log(localStorage.getItem("prevCount"));
  }, []);

  const incrementByOne = () => {
    setCount((prevCount) => {

      return prevCount + 1;
    });
  };

  const decreamentByOne = () => {
     setCount((prevCount) => {
      return prevCount - 1;
    });
  };
  if (count === -1) {
    return <h2>problem occured, counter can't go below 0</h2>;
  }

  return (
    <>
      <h2>{count}</h2>
      <div className={styles.counterCont}>
      <button className={styles.counter} onClick={incrementByOne}>
        +
      </button>
      {"     "}
      <button className={styles.counter} onClick={decreamentByOne}>
        -
      </button>
      </div>
    </>
  );
}
