import React from "react";
import styles from "./CatLogo.module.css";

export default function Cat({ scale }: { scale: number }) {
  let scaleString = `scale(${scale})`;
  return (
    <div className="catIconContainer">
      <div style={{ transform: scaleString }} className={styles.catIcon}>
        <div className={styles.head}></div>
        <div className={styles.lEar}></div>
        <div className={styles.rEar}></div>
        <div className={styles.lEye}></div>
        <div className={styles.rEye}></div>
        <div className={styles.body}></div>
        <div className={styles.hair1}></div>
        <div className={styles.hair2}></div>
        <div className={styles.hair3}></div>
        <div className={styles.hair4}></div>
        <div className={styles.miau}>"Miau"</div>
      </div>
    </div>
  );
}
