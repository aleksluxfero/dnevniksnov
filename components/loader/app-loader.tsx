"use client";
import styles from "./loader.module.css";

export const Loader = ({ spinner }: { spinner?: boolean }) => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      {spinner && <span className={styles.loader} />}
    </div>
  );
};
