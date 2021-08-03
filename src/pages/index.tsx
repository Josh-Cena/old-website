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
import { features, feature } from "../data/frontpageData";

const slides = [
  <header
    className={clsx("hero hero--primary", styles.heroBanner, styles.slide)}
  >
    <div className="container">
      <img className={styles.logo} alt="Logo" src="/img/logo.png" />
      <h1 className="hero__title">Joshua Chen</h1>
      <p className="hero__subtitle">&quot;Zesty scholar&quot;</p>
      <div className={styles.button}>
        <Link
          className={clsx(
            "button button--outline button--secondary button--lg"
          )}
          to="/CV/"
        >
          <Translate id="front.about">About me</Translate>
        </Link>
      </div>
    </div>
  </header>,
  <div className={clsx(styles.heroBanner, styles.slide)}>
    <div className="container">
      <h2>Change the World with Rules of the Garage</h2>
      <ol>
        <li>Believe you can change the world.</li>
        <li>Work quickly, keep the tools unlocked, work whenever.</li>
        <li>Know when to work alone and when to work together.</li>
        <li>Share — tools, ideas. Trust your colleagues.</li>
        <li>
          No Politics. No bureaucracy. (These are ridiculous in a garage.)
        </li>
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
    </div>
  </div>,
  <div
    className={clsx(styles.heroBanner, styles.slide)}
    style={{
      backgroundImage: "linear-gradient(rgb(69,26,24), rgb(95,36,33))",
    }}
  >
    <h2 className={styles.slideHeading} style={{ color: "white" }}>
      <Translate id="front.heading3">Road to 6K</Translate>
    </h2>
    <img src="/img/frontpage/CR_arena_blur.png" className={styles.bkgimg} />
    <div className={clsx(styles.button, styles.readMore)}>
      <Link
        className="button button--outline button--lg"
        style={{ color: "white" }}
        to="/blog/2021/04/26/champion"
      >
        <Translate id="front.readMore">Read more</Translate>
      </Link>
    </div>
  </div>,
  <div
    className={clsx(styles.heroBanner, styles.slide)}
    style={{
      backgroundColor: "rgb(64,116,225)",
    }}
  >
    <h2 className={styles.slideHeading} style={{ color: "white" }}>
      <Translate id="front.heading4">Thank you, UCloud!</Translate>
    </h2>
    <img src="/img/frontpage/UCloud_logo.svg" className={styles.bkgimg} />
    <p
      className={clsx(styles.readMore, styles.slideSubheading)}
      style={{
        color: "white",
      }}
    >
      This site is finally powered by a backend!
    </p>
  </div>,
];

function Feature({
  sources,
  title,
  description,
  key,
}: feature & { key: number }) {
  return (
    <div className={clsx("col col--4", styles.feature)}>
      <div className="text--center">
        <ThemedImage
          className={styles.featureImage}
          sources={sources}
          alt={title}
        />
      </div>
      <h3>
        <Translate id={`front.features.feat${key}.title`}>{title}</Translate>
      </h3>
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
      <CarouselProvider
        className={styles.carousel}
        totalSlides={slides.length}
        isPlaying
        interval={3000}
        dragEnabled={false}
        isIntrinsicHeight
        infinite
        naturalSlideHeight={undefined}
        naturalSlideWidth={undefined}
      >
        <div
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
            id="back"
            className={clsx(
              styles.button,
              styles.carouselbutton,
              styles.backbutton
            )}
            style={{ visibility: buttonVisible ? "visible" : "hidden" }}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </ButtonBack>
          <ButtonNext
            className={clsx(
              styles.button,
              styles.carouselbutton,
              styles.nextbutton
            )}
            style={{ visibility: buttonVisible ? "visible" : "hidden" }}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </ButtonNext>
          <div className={styles.carouseldots}>
            {slides.map((__, idx) => (
              <Dot className={styles.carouseldot} key={idx} slide={idx} />
            ))}
          </div>
        </div>
      </CarouselProvider>
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
