/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { ReactElement } from 'react';
import Layout from '@theme/Layout';
import styles from './CV.module.css';


export default function Alumni(): ReactElement {
  return (
    <Layout
      title="About me"
      description="My CV"
    >
      <main>
        <div className="container margin-vert--lg">
          <div className={styles.cv}>
            <h1>About me</h1>
            <img
              className={styles.avatar}
              alt="Avatar"
              src="/img/CV/avatar.jpg"
            />
            <br />
            <h2>
              陈思达
              <br />
              <small>Joshua Chen</small>
            </h2>
            <ul>
              <li>Current 11th grade student at SWFLA</li>
              <li>
                Current club leader of
                {' '}<a href="https://github.com/Computerization">
                  Computerization
                </a>
              </li>
              <li>
                Developer of
                {' '}<a href="https://github.com/Computerization/Enspire">
                  Enspire
                </a>
              </li>
              <li>Hardcore MINECRAFTer / Lay Clash Royale player</li>
            </ul>
            <ul className={styles.links}>
              <li>
                <a href="https://github.com/Josh-Cena">
                  <img
                    className={styles.icon}
                    alt="Github"
                    src="/img/CV/github.svg"
                    width="24"
                  />
                </a>
              </li>
              <li>
                <a href="mailto:joshcena@qq.com">
                  <img
                    className={styles.icon}
                    alt="Mail"
                    src="/img/CV/mail.svg"
                    width="24"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  );
}
