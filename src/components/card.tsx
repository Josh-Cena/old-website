import React, { ReactElement } from 'react';
import styles from './card.module.css';

import type { section } from '../data/CVData';

export default function Card({ sectionHead, items }: section): ReactElement {
  return (
    <div className={styles.card}>
      <h3 className={styles.header}>{sectionHead}</h3>
      <ul className={styles.content}>
        {items.map(
          item => <li>{item}</li>
        )}
      </ul>
    </div>
  )
}
