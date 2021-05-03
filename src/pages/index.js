import React, { useState } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import ThemedImage from "@theme/ThemedImage";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Translate from "@docusaurus/Translate";

import styles from "./styles.module.css";
import { features } from "../data/frontpageData";

const slides = [
  <div className="container">
    <img className={styles.logo} alt="Logo" src="/img/logo.png" />
    <h1 className="hero__title">Joshua Chen</h1>
    <p className="hero__subtitle">&quot;Zesty scholar&quot;</p>
    <div className={styles.buttons}>
      <Link
        className={clsx(
          "button button--outline button--secondary button--lg",
          styles.getStarted
        )}
        to="CV/"
      >
        <Translate id="front.about">About me</Translate>
      </Link>
    </div>
  </div>,
  <div className="container">
    <h2>Change the World with Rules of the Garage</h2>
    <ol>
      <li>Believe you can change the world.</li>
      <li>Work quickly, keep the tools unlocked, work whenever.</li>
      <li>Know when to work alone and when to work together.</li>
      <li>Share — tools, ideas. Trust your colleagues.</li>
      <li>No Politics. No bureaucracy. (These are ridiculous in a garage.)</li>
      <li>The customer defines a job well done.</li>
      <li>Radical ideas are not bad ideas.</li>
      <li>Invent different ways of working.</li>
      <li>
        Make a contribution every day. If it doesn’t contribute, it doesn’t
        leave the garage.
      </li>
      <li>Believe that together we can do anything.</li>
      <li>Invent.</li>
    </ol>
    <div className={styles.caption}>
      By{" "}
      <a href="https://en.wikipedia.org/wiki/Rules_of_the_garage">
        Bill Hewlett and David Packard
      </a>
    </div>
  </div>,
  <div className="container">
    <h2>Hello world!</h2>
  </div>,
];

function Feature({ sources, title, description }) {
  return (
    <div className={clsx("col col--4", styles.feature)}>
      <div className="text--center">
        <ThemedImage
          className={styles.featureImage}
          sources={sources}
          alt={title}
        />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const [buttonVisible, setButtonVisible] = useState(false);
  return (
    <Layout title={`Hello from ${siteConfig.title}`}>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <CarouselProvider
          className={styles.carousel}
          totalSlides={3}
          isPlaying
          interval={3000}
          isIntrinsicHeight
          infinite
          onMouseEnter={() => {
            setButtonVisible(true);
          }}
          onMouseLeave={() => {
            setButtonVisible(false);
          }}
        >
          <Slider>
            {slides.map((elem, idx) => (
              <Slide key={idx} index={idx}>
                {elem}
              </Slide>
            ))}
          </Slider>
          <ButtonBack
            className={clsx(
              styles.buttons,
              styles.carouselbutton,
              styles.backbutton
            )}
            style={{ visibility: buttonVisible ? "visible" : "hidden" }}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </ButtonBack>
          <ButtonNext
            className={clsx(
              styles.buttons,
              styles.carouselbutton,
              styles.nextbutton
            )}
            style={{ visibility: buttonVisible ? "visible" : "hidden" }}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </ButtonNext>
          {slides.map((elem, idx) => (
            <Dot className={styles.carouseldot} key={idx} slide={idx} />
          ))}
        </CarouselProvider>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
