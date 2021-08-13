import React, { ReactElement } from "react";

import styles from "./Card.module.css";
import type { section } from "@site/src/data/profileData";

export default function Card({ sectionHead, items }: section): ReactElement {
  return (
    <div className={styles.card}>
      <h3 className={styles.header}>{sectionHead}</h3>
      <ul className={styles.content}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
