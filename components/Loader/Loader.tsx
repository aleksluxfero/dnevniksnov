"use client";
import styles from "./loader.module.css";

export const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-bg bg-no-repeat bg-cover">
      <span className={styles.loader} />
    </div>
  );
};
