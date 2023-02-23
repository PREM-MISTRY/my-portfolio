import { assetPrefix } from "../../../next.config";
import styles from "./WhatIDo.module.css";

export default function WhatIDoCards({ imgSrc, imgAlt, text }) {
  return (
    <div className="col-lg-2 col-md-5 py-xxl-0 py-md-3 py-3">
      <div className={styles.card}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetPrefix ? assetPrefix + imgSrc : imgSrc}
          alt={imgAlt || ""}
          className={`img-fluid ${styles.img}`}
        />
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
}
