"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

const STORAGE_KEY = "prevCount";

export default function Testpage() {
  const [count, setCount] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const savedValue = localStorage.getItem(STORAGE_KEY);

    if (savedValue !== null) {
      const parsedValue = JSON.parse(savedValue);
      if (typeof parsedValue === "number" && parsedValue >= 0) {
        setCount(parsedValue);
      }
    }

    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (!isInitialized) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(count));
  }, [count, isInitialized]);

  const incrementByOne = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decreamentByOne = () => {
    setCount((prevCount) => {
      if (prevCount <= 0) {
        return prevCount;
      }
      return prevCount - 1;
    });
  };

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